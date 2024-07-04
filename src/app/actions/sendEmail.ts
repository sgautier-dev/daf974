'use server'
import React from 'react'
import { EmailTemplate } from '../../components/EmailTemplate'
import { Resend } from 'resend'
import { z } from 'zod'
import { actionClient } from '../lib/safe-action'
import { flattenValidationErrors } from 'next-safe-action'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  firstName: z.string().min(1, { message: 'Le prénom est requis.' }),
  lastName: z.string().min(1, { message: 'Le nom de famille est requis.' }),
  company: z.string().min(1, { message: 'Le nom de l’entreprise est requis.' }),
  email: z.string().email({ message: 'Adresse e-mail invalide.' }),
  country: z.string().min(2, { message: 'Le pays est requis.' }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: 'Le message est requis.' }),
})

export const sendEmail = actionClient
  .schema(schema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(
    async ({
      parsedInput: {
        firstName,
        lastName,
        company,
        email,
        country,
        phone,
        message,
      },
    }) => {
      // throw new Error ('test')

      await resend.emails.send({
        from: 'DAF974 Contact <onboarding@resend.dev>',
        to: ['sgautier.dev@gmail.com'],
        reply_to: email as string,
        subject: `Message de ${firstName} ${lastName}`,
        react: React.createElement(EmailTemplate, {
          firstName: firstName as string,
          lastName: lastName as string,
          company: company as string,
          senderEmail: email as string,
          country: country as string,
          phone: phone as string,
          message: message as string,
        }),
      })

      return {
        message: 'Envoyé avec succès !',
      }
    },
  )
