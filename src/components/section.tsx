export default function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
return (
<section className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>{children}</section>
)
}