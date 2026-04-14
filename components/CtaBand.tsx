import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

interface Props {
  title: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CtaBand({ title, description, primaryLabel = 'Empezar gratis', primaryHref = '/pricing', secondaryLabel, secondaryHref }: Props) {
  return (
    <ScrollReveal className="max-w-7xl mx-auto px-6 my-10">
      <div className="wz-gradient-dark text-white rounded-3xl p-10 md:p-14 text-center shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        {description && <p className="text-slate-300 max-w-xl mx-auto mb-6">{description}</p>}
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={primaryHref} className="px-5 py-3 rounded-xl text-sm font-semibold wz-gradient text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition">{primaryLabel}</Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="px-5 py-3 rounded-xl text-sm font-semibold border border-white/30 text-white hover:border-white/60 transition">{secondaryLabel}</Link>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}
