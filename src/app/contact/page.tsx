import Section from '@/components/section'
import Nav from '@/components/nav'
import Link from 'next/link'

export default function ContactPage() {
return (
<>
<Nav />
<Section className="pt-20">
<div className="mb-8">
<Link 
  href="/" 
  className="inline-flex items-center gap-2 text-plum hover:text-plum/80 transition-colors mb-4"
>
  ← Back to Home
</Link>
<h1 className="text-4xl font-bold">Connect</h1>
</div>
<div>
<p className="mb-4 text-center">Tell me about your project or session intention.</p>
<div className="rounded-2xl bg-cream p-4 shadow max-w-4xl mx-auto">
<iframe src="https://cal.com/herenowmedia/30min" className="h-[650px] w-full rounded-2xl" />
</div>
</div>
</Section>
</>
)
}