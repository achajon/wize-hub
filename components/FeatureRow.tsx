import Kicker from './Kicker'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

interface Props {
  kicker: string
  title: string
  description: string
  mockText: string
  reverse?: boolean
  ctaLabel?: string
  ctaHref?: string
  bullets?: string[]
}

export default function FeatureRow({ kicker, title, description, mockText, reverse, ctaLabel, ctaHref, bullets }: Props) {
  return (
    <ScrollReveal>
      <div className={`grid lg:grid-cols-2 gap-14 items-center py-12 ${reverse ? 'lg:direction-rtl' : ''}`}>
        <div className={reverse ? 'lg:order-2' : ''}>
          <Kicker>{kicker}</Kicker>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">{title}</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
          {bullets && (
            <ul className="mt-4 space-y-2">
              {bullets.map((b, i) => <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm"><span className="text-wz-success font-bold mt-0.5">✓</span>{b}</li>)}
            </ul>
          )}
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="inline-flex mt-5 px-5 py-2.5 rounded-xl text-sm font-semibold wz-gradient text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition">
              {ctaLabel}
            </Link>
          )}
        </div>
        <div className={reverse ? 'lg:order-1' : ''}>
          <div className="p-1 rounded-2xl wz-gradient shadow-xl">
            <div className="bg-wz-bg rounded-xl aspect-[4/3] flex items-center justify-center text-slate-400 text-sm p-5 text-center">
              {mockText}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
