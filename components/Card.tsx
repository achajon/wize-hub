import type { LucideIcon } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface Props {
  icon?: LucideIcon
  title: string
  description: string
  delay?: number
}

export default function Card({ icon: Icon, title, description, delay = 0 }: Props) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition-all h-full">
        {Icon && (
          <div className="w-11 h-11 rounded-xl bg-indigo-500/10 dark:bg-indigo-400/15 flex items-center justify-center mb-4">
            <Icon size={24} strokeWidth={1.5} className="text-indigo-600 dark:text-indigo-400" />
          </div>
        )}
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  )
}
