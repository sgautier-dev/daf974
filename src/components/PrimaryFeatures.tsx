'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import expertise from '@/images/expertise.jpg'
import flexibility from '@/images/flexibility.jpg'
import collaboration from '@/images/collaboration.jpg'
import economy from '@/images/economy.jpg'

const features = [
  {
    title: 'Expertise spécialisée',
    description:
      "Nos directeurs externalisés apportent une expertise pointue dans divers secteurs d'activité. Leur expérience et leurs compétences spécifiques garantissent un accompagnement adapté et performant pour chaque projet.",
    image: expertise,
  },
  {
    title: 'Flexibilité',
    description:
      "Profitez d'une flexibilité inégalée avec des solutions à temps partagé. Nos directeurs s'adaptent à vos besoins changeants, vous permettant d'ajuster facilement le niveau de support en fonction de votre activité.",
    image: flexibility,
  },
  {
    title: 'Engagement',
    description:
      "Nos directeurs s'investissent pleinement dans vos projets. En tant que véritables partenaires d'affaires, ils travaillent avec dévouement pour atteindre vos objectifs et contribuer à la réussite de votre entreprise.",
    image: collaboration,
  },
  {
    title: 'Économie',
    description:
      "Optez pour un modèle économiquement avantageux. Nos services à temps partagé vous permettent de bénéficier de l'expertise de directeurs de haut niveau sans les coûts associés à une embauche à temps plein.",
    image: economy,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Notre Singularité.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            DAF 974 offre aux dirigeants de PME l&apos;accès à des directeurs
            externalisés à temps partagé, disponibles sans limites ! Cette
            solution durable, économiquement équitable et performante, est
            bénéfique tant pour les PME que pour les directeurs à temps partagé
            de notre réseau. L&apos;avantage ? Bénéficier de l&apos;expertise
            d&apos;un directeur opérationnel qualifié (DAF, DGA, DG, DG LBO,
            etc.) qui s&apos;investit pleinement dans vos projets, sans les
            contraintes d&apos;une embauche traditionnelle. En tant que Business
            Partner, nous nous engageons à vos côtés pour atteindre vos
            objectifs.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="m-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
