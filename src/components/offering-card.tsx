'use client'
import { motion } from 'framer-motion'

interface OfferingCardProps {
    title: string
    desc: string
    cta?: string
    gradient?: string
    href?: string
    external?: boolean
}

export default function OfferingCard({ title, desc, cta, gradient, href, external }: OfferingCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className={`relative rounded-2xl p-[2px] shadow-glow bg-gradient-to-br ${gradient || 'from-blush to-ether'}`}
        >
            <div className="rounded-2xl bg-cream p-6 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold mb-2 leading-tight tracking-tight" style={{ color: '#4A284D' }}>
                        {title}
                    </h3>

                    <p className="text-plum/80">{desc}</p>
                </div>
                {cta && (
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={href || "#"}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="mt-6 inline-block rounded-2xl bg-blush px-5 py-2 text-plum font-medium shadow-glow hover:brightness-110 transition"
                    >
                        {cta}
                    </motion.a>
                )}
            </div>
        </motion.div>
    )
}
