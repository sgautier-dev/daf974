import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import Link from 'next/link'

export const metadata = {
  title: 'Mentions légales',
}

export default function Legal() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <main className="mx-auto min-h-screen max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <article className="container mx-auto">
          <h1 className="text-orange mb-4 text-3xl font-bold">
            Mentions légales
          </h1>
          <p className="mb-4">
            DAF974 respecte et se conforme à toutes les obligations légales
            requises pour la mise en ligne d&apos;un site internet. Sur cette
            page, vous trouverez toutes les informations légales concernant
            notre entreprise et l&apos;utilisation de notre site web.
          </p>
          <p className="mb-4">
            Le numéro SIRET de l&apos;entreprise DAF974 est 94997535300010.
          </p>
          <p className="mb-4">
            Le représentant légal de DAF974 est Pierre Dillac.
          </p>
          <p className="mb-4">
            Le site web de DAF974 est hébergé par Vercel Inc., dont le siège
            social est situé 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>
          <p className="mb-4">
            Les images utilisées sur ce site web sont fournies par Unsplash.
            Selon la licence Unsplash, ces images peuvent être utilisées
            gratuitement à des fins commerciales et non commerciales sans avoir
            à donner crédit.
          </p>
          <p className="mb-4">
            Notre site web ne dépose pas de cookies sur votre appareil, que ce
            soit des cookies de suivi, d&apos;analyse ou de publicité. Nous
            respectons votre confidentialité et ne collectons pas
            d&apos;informations personnelles via des cookies.
          </p>
        </article>
      </main>
    </SlimLayout>
  )
}
