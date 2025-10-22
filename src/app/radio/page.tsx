import Nav from '@/components/nav'
import Section from '@/components/section'
import { GlowButton } from '@/components/glow-button'

export default function RadioPage() {
  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <Section className="bg-plum text-cream pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            The Last Radio Station on Earth
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Broadcasting consciousness, creativity, and authentic conversations 
            from the frequencies that matter most
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://lastradio.earth/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GlowButton className="bg-amber hover:bg-amber/90 text-plum font-semibold px-8 py-4">
                🎙️ Listen Live
              </GlowButton>
            </a>
            <a 
              href="https://patreon.com/TheLastRadioStationonEarth" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GlowButton className="bg-cream/10 hover:bg-cream/20 border border-cream/30 px-8 py-4">
                ❤️ Support on Patreon
              </GlowButton>
            </a>
          </div>
        </div>
      </Section>

      {/* About the Station */}
      <Section className="bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#4A284D' }}>
              More Than Just Radio
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              This is a space for deep listening, meaningful dialogue, and the kind of 
              content that nourishes the soul in our increasingly noisy world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#4A284D' }}>
                What You'll Hear
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>🎵 Curated music that moves the spirit</li>
                <li>🗣️ Conversations that go beneath the surface</li>
                <li>🌱 Explorations of consciousness and creativity</li>
                <li>📚 Readings and reflections on meaning</li>
                <li>🌍 Stories from the edge of transformation</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#4A284D' }}>
                Why Support?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>📡 Keep independent broadcasting alive</li>
                <li>🎤 Support ad-free, authentic content</li>
                <li>🌟 Help expand programming and reach</li>
                <li>🤝 Join a community of conscious listeners</li>
                <li>💝 Early access to special content</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#4A284D' }}>
            Tune In, Drop Deep
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're here to listen or to support the mission, 
            you're part of keeping authentic voices on the airwaves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://lastradio.earth/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GlowButton className="px-8 py-4">
                Start Listening Now
              </GlowButton>
            </a>
            <a 
              href="https://patreon.com/TheLastRadioStationonEarth" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GlowButton className="bg-plum hover:bg-plum/90 text-cream px-8 py-4">
                Become a Patron
              </GlowButton>
            </a>
          </div>
          
          <p className="mt-8 text-gray-600">
            Broadcasting from the frequencies that matter most • 
            <a href="https://lastradio.earth/" target="_blank" rel="noopener noreferrer" className="hover:text-amber">
              lastradio.earth
            </a>
          </p>
        </div>
      </Section>
    </>
  )
}