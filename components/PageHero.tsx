import Kicker from './Kicker'
import Link from 'next/link'

interface Props {
  kicker: string
  title: React.ReactNode
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  gradient?: string
}

export default function PageHero({ kicker, title, description, primaryCta, secondaryCta, gradient }: Props) {
  return (
    <section className={`py-20 pb-10 ${gradient || 'bg-gradient-to-b from-indigo-500/[.04] to-transparent dark:from-indigo-900/20'}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Kicker>{kicker}</Kicker>
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.1] mb-5">{title}</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            {primaryCta && <Link href={primaryCta.href} className="px-5 py-3 rounded-xl text-sm font-semibold wz-gradient text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition">{primaryCta.label}</Link>}
            {secondaryCta && <Link href={secondaryCta.href} className="px-5 py-3 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-wz-primary hover:text-wz-primary transition">{secondaryCta.label}</Link>}
          </div>
        )}
      </div>
    </section>
  )
}
