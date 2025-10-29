import { getSubstackFeed } from '@/lib/substack'

export default async function SubstackFeed() {
const posts = await getSubstackFeed()
return (
<div className="grid gap-6 sm:grid-cols-2">
{posts?.slice(0,4).map((p:any) => (
<a key={p.link} href={p.link} className="rounded-2xl bg-cream p-6 hover:shadow-glow">
<h3 className="text-xl font-semibold">{p.title}</h3>
<p className="text-sm text-plum/70 mt-2" dangerouslySetInnerHTML={{ __html: p.excerpt }} />
</a>
))}
</div>
)
}