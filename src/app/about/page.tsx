import Nav from '@/components/nav'
import Section from '@/components/section'
import { GlowButton } from '@/components/glow-button'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <Section className="bg-cream pt-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#4A284D' }}>
            About Lacey
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The bridge between software and soul, weaving technology with human connection
          </p>
        </div>
      </Section>

      {/* Main About Content */}
      <Section className="bg-sand">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/IMG_2488.JPG"
                  alt="Lacey Beela"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#4A284D' }}>
                My Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Lacey Beela is the bridge between software and soul, seamlessly weaving technology 
                  with human connection. Through code, creation, and conscious integration, 
                  I explore the intersection where digital innovation meets authentic expression.
                </p>
                <p>
                  My journey spans multiple creative and technical realms - from software development 
                  to writing, from radio broadcasting to photography. Each medium offers a unique 
                  lens through which to explore the deeper questions of our digital age.
                </p>
                <p>
                  At the heart of my work lies a commitment to integration: bringing together 
                  disparate elements to create something beautiful, functional, and meaningful. 
                  Whether through lines of code or captured moments, I believe in the power 
                  of intentional creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What I Do Section */}
      <Section className="bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4A284D' }}>
            What I Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Software Development */}
            <div className="text-center">
              <div className="w-20 h-20 bg-amber/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4A284D' }}>
                Software Development
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Building digital experiences that bridge functionality with human-centered design, 
                creating tools that enhance rather than complicate life.
              </p>
            </div>

            {/* Photography */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blush/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4A284D' }}>
                Photography
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Through Here Now Media, capturing authentic moments and emotions, 
                preserving memories with artistic vision and technical precision.
              </p>
            </div>

            {/* Writing */}
            <div className="text-center">
              <div className="w-20 h-20 bg-ether/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4A284D' }}>
                Writing
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Exploring ideas through words, sharing insights on technology, creativity, 
                and the human experience in our rapidly evolving digital landscape.
              </p>
            </div>

            {/* Radio */}
            <div className="text-center">
              <div className="w-20 h-20 bg-sage/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎙️</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4A284D' }}>
                Radio
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Broadcasting from The Last Radio Station on Earth, creating audio experiences 
                that connect listeners with deeper conversations and authentic expression.
              </p>
            </div>

            {/* Breathwork */}
            <div className="text-center">
              <div className="w-20 h-20 bg-cream/40 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-plum/20">
                <span className="text-2xl">🌬️</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4A284D' }}>
                Breathwork
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Facilitating conscious breathing practices through the Conscious Breathers Collective, 
                creating space for presence, healing, and deeper connection with self.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-plum text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            My Philosophy
          </h2>
          <div className="text-lg leading-relaxed space-y-6">
            <p>
              <strong>Integration.</strong> In a world of silos and specialization, 
              I believe in the power of bringing together diverse disciplines, 
              perspectives, and ways of knowing.
            </p>
            <p>
              <strong>Breath.</strong> Technology should enhance our humanity, 
              not diminish it. Creating space for reflection, presence, 
              and authentic connection in our digital interactions.
            </p>
            <p>
              <strong>Code.</strong> Whether in programming languages or life itself, 
              the patterns we create and the systems we build shape our reality. 
              Let's code with intention and awareness.
            </p>
            <p>
              <strong>Creation.</strong> At the heart of everything lies the creative act - 
              the bringing forth of something new, beautiful, and meaningful 
              into the world.
            </p>
          </div>
        </div>
      </Section>

      {/* Connect Section */}
      <Section className="bg-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#4A284D' }}>
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're interested in collaborating on a project, discussing ideas, 
            or simply connecting with someone who values the integration of technology and soul.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <GlowButton>Get In Touch</GlowButton>
            </a>
            <a href="/here-now-media">
              <GlowButton className="bg-plum hover:bg-plum/90">
                Photography Services
              </GlowButton>
            </a>
            <a 
              href="https://conscious-breathers-collective.mn.co/share/ugqAqCyGi8r0Fono?utm_source=manual" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GlowButton className="bg-ether hover:bg-ether/90">
                Join Breathers Collective
              </GlowButton>
            </a>
          </div>
          
          <div className="mt-12 flex justify-center gap-8">
            <a 
              href="https://substack.com/@laceybeela" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-plum hover:text-amber transition-colors"
            >
              Writing on Substack
            </a>
            <a 
              href="https://patreon.com/TheLastRadioStationonEarth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-plum hover:text-amber transition-colors"
            >
              Radio on Patreon
            </a>
            <a 
              href="https://instagram.com/herenowmediaco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-plum hover:text-amber transition-colors"
            >
              Photography Instagram
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}