'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/section'
import Nav from '@/components/nav'
import BreathworkForm from '@/components/breathwork-form'
import Link from 'next/link'

const focusAreaDescriptions = {
  'Inner Child Return': 'A soft descent into the forgotten places within you. Reconnecting to innocence, play, unmet needs, and the small voice inside that\'s still waiting to be held.',
  'Shadow Illumination': 'A gentle but honest journey into the parts of yourself you\'ve tucked away—anger, fear, jealousy, shame. Not to fix them, but to meet them with awareness and compassion.',
  'Grief as a Sacred Teacher': 'Holding space for heartbreak, transition, loss, endings, and the slow unwinding of letting go. A space to feel what you\'ve been carrying alone.',
  'Nervous System Reset': 'A restorative session focused on downshifting out of chronic stress, burnout, and overwhelm. Rebalancing your body through breath, presence, and gentle body awareness.',
  'Release & Rebirth': 'A transformative session for life transitions: moving, ending relationships, shifting identities, starting new chapters. Shedding the old skin so you can rise differently.',
  'Healing Heart Space': 'For heartbreak, resentment, emotional fatigue, or feeling closed off. A clearing of the energetic chest—softening the armor and restoring emotional flow.'
}

export default function BreathworkPage() {
  const [showForm, setShowForm] = useState(false)
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)

  return (
    <>
      <Nav />
      <Section className="bg-gradient-to-b from-ether via-cream to-sage min-h-screen pt-20">
        <div className="mb-8">
          <Link 
            href="/offerings" 
            className="inline-flex items-center gap-2 text-plum hover:text-plum/80 transition-colors mb-4"
          >
            ← Back to Offerings
          </Link>
          <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#4A284D' }}>
            Conscious Breathers Collective
          </h1>
          <p className="text-xl text-center text-plum mb-10 max-w-4xl mx-auto">
            Join our community or book a personalized 1:1 breathwork session to explore deeper healing and self-connection.
          </p>
        </div>

        {!showForm ? (
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* 1:1 Session Option - Now First */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              className="relative rounded-2xl p-[2px] shadow-glow bg-gradient-to-br from-blush via-amber to-ether"
            >
              <div className="rounded-2xl bg-cream p-8 h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#4A284D' }}>1:1 Breathwork Session</h2>
                
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="bg-plum/5 rounded-xl p-4">
                    <p className="font-semibold text-plum mb-2">90-minute session • $75 • Online via Zoom</p>
                    <p className="text-sm text-plum/80">
                      Personalized breathwork journey using conscious connected breath technique
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3" style={{ color: '#4A284D' }}>Sacred Focus Areas:</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                      {Object.entries(focusAreaDescriptions).map(([title, description]) => (
                        <motion.span
                          key={title}
                          className="bg-ether/30 px-2 py-2 rounded-lg text-plum text-center cursor-pointer transition-colors hover:bg-ether/50"
                          onHoverStart={() => setHoveredArea(title)}
                          onHoverEnd={() => setHoveredArea(null)}
                          whileHover={{ scale: 1.02 }}
                        >
                          {title}
                        </motion.span>
                      ))}
                    </div>
                    
                    {hoveredArea && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-plum/5 rounded-lg p-3 border-l-4 border-ether"
                      >
                        <h4 className="font-semibold text-sm mb-1" style={{ color: '#4A284D' }}>{hoveredArea}</h4>
                        <p className="text-xs text-plum/80 leading-relaxed">
                          {focusAreaDescriptions[hoveredArea as keyof typeof focusAreaDescriptions]}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#4A284D' }}>Session Flow:</h3>
                    <div className="text-sm text-plum/80 space-y-1">
                      <p>• 10 min: Introduction & intention setting</p>
                      <p>• 10 min: Guided meditation</p>
                      <p>• 60 min: Conscious connected breathwork</p>
                      <p>• 10 min: Grounding & integration</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#4A284D' }}>What to Expect:</h3>
                    <p className="text-sm text-plum/80">
                      A safe, supportive space to explore deeper layers of yourself, release stored emotions, 
                      and gain clarity. You may experience emotional release, physical sensations, insights, 
                      or profound states of peace and connection.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: '#4A284D' }}>Preparation:</h3>
                    <div className="text-sm text-plum/80 space-y-1">
                      <p>• Avoid large meals 2-3 hours before</p>
                      <p>• Find a quiet space where you can lay down undisturbed</p>
                      <p>• Ensure stable internet connection</p>
                      <p>• Use headphones for an immersive experience</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowForm(true)}
                  className="inline-block rounded-2xl bg-blush text-plum px-6 py-3 font-medium text-center shadow-glow hover:brightness-110 transition"
                >
                  Book 1:1 Session
                </motion.button>
              </div>
            </motion.div>

            {/* Community Option - Now Second */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              className="relative rounded-2xl p-[2px] shadow-glow bg-gradient-to-br from-sage via-ether to-cream"
            >
              <div className="rounded-2xl bg-cream p-8 text-center">
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#4A284D' }}>Join the Community</h2>
                <p className="text-plum/80 mb-6 max-w-2xl mx-auto">
                  Connect with like-minded individuals in our Mighty Network community. Share experiences, find support, 
                  and participate in group sessions and discussions around conscious breathing practices.
                </p>
                
                <div className="flex flex-col items-center space-y-4">
                  <img 
                    src="/Conscious breathers.PNG" 
                    alt="Conscious Breathers Collective Logo" 
                    className="max-h-32 w-auto object-contain mx-auto"
                  />
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://conscious-breathers-collective.mn.co/share/ugqAqCyGi8r0Fono?utm_source=manual"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-2xl bg-sage text-cream px-8 py-3 font-medium text-center shadow-glow hover:brightness-110 transition"
                  >
                    Join Community
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-center"
            >
              <button
                onClick={() => setShowForm(false)}
                className="text-plum hover:text-plum/80 transition-colors mb-4"
              >
                ← Back to Options
              </button>
              <h2 className="text-3xl font-bold text-plum mb-2">Book Your 1:1 Session</h2>
              <p className="text-plum/80">Please fill out the form below and I&apos;ll be in touch within 48 hours.</p>
            </motion.div>
            <BreathworkForm />
          </div>
        )}
      </Section>
    </>
  )
}