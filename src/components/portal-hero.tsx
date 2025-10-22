'use client'
import { motion } from 'framer-motion'
export default function PortalHero() {
return (
<div className="relative min-h-[90vh] overflow-hidden bg-portal">
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.35),transparent_40%)]" />
<div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 pt-36 text-center">
<h1 className="text-5xl md:text-7xl font-bold tracking-tight">Welcome to the Portal</h1>
<p className="max-w-2xl text-lg text-sand drop-shadow-[0_0_10px_rgba(74,40,77,0.6)]">Integration. Breath. Code. Creation.</p>
</div>
</div>
)
}