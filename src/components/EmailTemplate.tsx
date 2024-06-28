// components/EmailTemplate.tsx
import React from 'react'

interface EmailTemplateProps {
  firstName: string
  lastName: string
  company: string
  senderEmail: string
  country: string
  phone: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  company,
  senderEmail,
  country,
  phone,
  message,
}) => (
  <div>
    <h1>
      Nouveau message du formulaire de contact
    </h1>
    <p>
      <strong>Prénom :</strong> {firstName}
    </p>
    <p>
      <strong>Nom :</strong> {lastName}
    </p>
    <p>
      <strong>Email :</strong> {senderEmail}
    </p>
    <p>
      <strong>Entreprise :</strong> {company}
    </p>
    <p>
      <strong>Téléphone :</strong> ({country}) {phone}
    </p>
    <p>
      <strong>Message :</strong> {message}
    </p>
  </div>
)
