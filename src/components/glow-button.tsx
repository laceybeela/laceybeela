export function GlowButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
return (
<button {...props} className="rounded-2xl bg-blush px-6 py-3 font-semibold text-plum shadow-glow hover:brightness-110 transition">
{children}
</button>
)
}