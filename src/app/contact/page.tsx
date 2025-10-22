import Section from '@/components/section'
export default function ContactPage() {
return (
<Section>
<h1 className="text-4xl font-bold mb-8">Connect</h1>
<div className="grid gap-10 md:grid-cols-2">
<div>
<p className="mb-4">Tell me about your project or session intention.</p>
<div className="rounded-2xl bg-cream p-4 shadow">
<iframe src="https://calendly.com/your-link" className="h-[650px] w-full rounded-2xl" />
</div>
</div>
<div className="rounded-2xl bg-sand p-6 shadow">
<h2 className="text-2xl font-semibold mb-2">Email</h2>
<p>laceybeela@gmail.com</p>
</div>
</div>
</Section>
)
}