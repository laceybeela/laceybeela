'use client'
import Link from 'next/link'
export default function Nav() {
return (
<header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-cream/40">
<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<Link href="/" className="font-bold tracking-wide text-plum">LACEY BEELA</Link>
<div className="flex gap-6 text-sm text-plum">
<Link href="/about">About</Link>
<Link href="/offerings">Offerings</Link>
<Link href="/writing">Writing</Link>
<Link href="/radio">Radio</Link>
<Link href="/here-now-media">Here Now Media</Link>
<Link href="/contact">Contact</Link>
</div>
</nav>
</header>
)
}