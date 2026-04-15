import Kicker from './Kicker'
import ScrollReveal from './ScrollReveal'

interface Props {
  kicker?: string
  title: string
  description?: string
}

export default function SectionHead({ kicker, title, description }: Props) {
  return (
    <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">{title}</h2>
      {description && <p className="text-lg text-slate-500 dark:text-slate-400">{description}</p>}
    </ScrollReveal>
  )
}
