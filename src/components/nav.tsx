'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/offerings', label: 'Offerings' },
    { href: '/writing', label: 'Writing' },
    { href: '/radio', label: 'Radio' },
    { href: '/here-now-media', label: 'Here Now Media' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-cream/40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold tracking-wide text-plum">
          LACEY BEELA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm text-plum">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-plum"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur bg-cream/95 border-t border-plum/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-plum hover:text-plum/70 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}