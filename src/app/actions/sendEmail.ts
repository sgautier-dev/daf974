'use server'
import React from 'react'
import { EmailTemplate } from '../../components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const company = formData.get('company')
  const senderEmail = formData.get('email')
  const country = formData.get('country')
  const phone = formData.get('phone')
  const message = formData.get('message')

  if (!firstName || !lastName || !company || !senderEmail || !message) {
    return {
      error: 'Données du formulaires invalides',
    }
  }

  const { data, error } = await resend.emails.send({
    from: 'DAF974 Contact <onboarding@resend.dev>',
    to: ['sgautier.dev@gmail.com'],
    reply_to: senderEmail as string,
    subject: `Message de ${firstName} ${lastName}`,
    react: React.createElement(EmailTemplate, {
      firstName: firstName as string,
      lastName: lastName as string,
      company: company as string,
      senderEmail: senderEmail as string,
      country: country as string,
      phone: phone as string,
      message: message as string,
    }),
  })

  if (error) {
    return {
      error: error.message,
    }
  }

  return {
    data: data?.id,
  }
}
