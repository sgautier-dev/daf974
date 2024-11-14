import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import logoRegion from '@/images/logos/RegionLogo.jpg'
import logoUE from '@/images/logos/EuropeLogo.jpg'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 gap-x-6 text-center sm:flex sm:justify-center">
              <NavLink href="#features">À propos</NavLink>
              <NavLink href="#secondary-features">Services</NavLink>
              <NavLink href="#testimonials">Témoignages</NavLink>
              <NavLink href="#pricing">Tarifs</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <NavLink href="/mentions">Mentions</NavLink>
            </div>
          </nav>
          <div className="mx-auto mt-10 grid max-w-lg place-items-center gap-1 md:grid-cols-2 md:gap-3">
            <Image
              src={logoRegion}
              placeholder="blur"
              alt="logo de la région réunion"
              width={150}
              className="aspect-auto object-cover"
            />
            <Image
              src={logoUE}
              placeholder="blur"
              alt="logo union européenne"
              width={150}
              className="aspect-auto object-cover"
            />
            <p className="col-span-2 mt-4 self-start text-center text-[10px]">
              Ce site a été financé par l’Union Européenne dans le cadre du
              programme FEDER-FSE+ Réunion dont l’Autorité de gestion est la
              Région Réunion. L’Europe s’engage à La Réunion avec le fonds FEDER
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://www.linkedin.com/company/104460275"
              className="group"
              target="_blank"
              aria-label="DAF974 on LinkedIn"
            >
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
              </svg>
            </Link>
            {/* <Link href="#" className="group" aria-label="DAF974 on GitHub">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
              </svg>
            </Link> */}
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} DAF974. Tous droits
            réservés.
          </p>
          <a
            href="https://www.sgautier.dev/"
            target="_blank"
            className="mt-6 text-sm text-slate-500 sm:mt-0"
          >
            <p translate="no">Designed by SG</p>
          </a>
        </div>
      </Container>
    </footer>
  )
}
