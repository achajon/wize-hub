export default function Kicker({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block text-xs font-semibold tracking-[.12em] uppercase text-wz-primary dark:text-indigo-300 bg-indigo-500/10 dark:bg-indigo-500/20 px-3 py-1.5 rounded-full mb-4 ${className}`}>
      {children}
    </span>
  )
}
