import Nav from '@/components/nav'
import Section from '@/components/section'
import { GlowButton } from '@/components/glow-button'
import Image from 'next/image'

export default function HereNowMediaPage() {
  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <Section className="bg-cream pt-20">
        <div className="text-center mb-16">
          <Image
            src="/here-now-media-logo.png"
            alt="Here Now Media Logo"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#4A284D' }}>
            Here Now Media
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Capturing moments that matter. Professional photography and videography 
            services for your most important events and milestones.
          </p>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="bg-sand">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4A284D' }}>
          Our Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            '9ADA099A-987B-4D2E-8274-C6DA77774B76.jpeg',
            'C6D8D929-F0E9-4EAD-A8B8-EAB94F72913D.jpeg',
            'D386BE6F-A3A4-4FBB-85E4-473642C9A126.jpeg',
            'P1000045.jpg',
            'P1000135.jpg',
            'P1000288.jpg'
          ].map((image, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
              <Image
                src={`/${image}`}
                alt={`Here Now Media Portfolio ${i + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">View our complete portfolio</p>
          <GlowButton>View Full Gallery</GlowButton>
        </div>
      </Section>

      {/* Services & Pricing Section */}
      <Section className="bg-cream">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#4A284D' }}>
          Services & Pricing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Wedding Photography */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-blush/20">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#4A284D' }}>
              Wedding Photography
            </h3>
            <div className="mb-6">
              <span className="text-3xl font-bold" style={{ color: '#F4B63E' }}>$1,200</span>
              <span className="text-gray-600 ml-2">Starting Package</span>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>✓ 1-hour engagement session</li>
              <li>✓ 6 hours of wedding day coverage</li>
              <li>✓ Pre-shoot consultation</li>
              <li>✓ 250+ edited high-res images</li>
              <li>✓ Online gallery delivery</li>
            </ul>
            <a href="https://cal.com/herenowmedia/30min" target="_blank" rel="noopener noreferrer" className="block">
              <GlowButton className="w-full">Book Wedding Package</GlowButton>
            </a>
          </div>

          {/* Event Photography */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-ether/20">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#4A284D' }}>
              Event Photography
            </h3>
            <div className="mb-6">
              <span className="text-3xl font-bold" style={{ color: '#F4B63E' }}>$100</span>
              <span className="text-gray-600 ml-2">per hour</span>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>✓ Professional event coverage</li>
              <li>✓ 50+ edited photos per hour</li>
              <li>✓ Online gallery within 48hrs</li>
              <li>✓ Print release included</li>
              <li>✓ 2 hour minimum</li>
            </ul>
            <a href="https://cal.com/herenowmedia/30min" target="_blank" rel="noopener noreferrer" className="block">
              <GlowButton className="w-full">Book Event Session</GlowButton>
            </a>
          </div>

          {/* Portrait Sessions */}
          <div className="bg-white rounded-lg p-8 shadow-lg border border-sage/20">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#4A284D' }}>
              Portrait Sessions
            </h3>
            <div className="mb-6">
              <span className="text-3xl font-bold" style={{ color: '#F4B63E' }}>$200</span>
              <span className="text-gray-600 ml-2">1 hour</span>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>✓ 1 hour photo session</li>
              <li>✓ 25+ edited photos</li>
              <li>✓ Online gallery</li>
              <li>✓ All images at full resolution</li>
              <li>✓ Full printing rights included</li>
            </ul>
            <a href="https://cal.com/herenowmedia/30min" target="_blank" rel="noopener noreferrer" className="block">
              <GlowButton className="w-full">Book Portrait Session</GlowButton>
            </a>
          </div>
        </div>
      </Section>

      {/* Contact & Booking Section */}
      <Section className="bg-plum text-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Let's Create Together
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#FBE9D0' }}>
                Get In Touch
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-amber rounded-full flex-shrink-0"></div>
                  <span>herenowmediaco@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-ether rounded-full flex-shrink-0"></div>
                  <span>(435) 668-5186</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-blush rounded-full flex-shrink-0"></div>
                  <span>Based in Vernon, Arizona</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3" style={{ color: '#FBE9D0' }}>
                  Follow Our Journey
                </h4>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/herenowmediaco" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cream/10 rounded-lg hover:bg-cream/20 transition-colors"
                  >
                    @herenowmediaco
                  </a>
                  <button className="px-4 py-2 bg-cream/10 rounded-lg hover:bg-cream/20 transition-colors">
                    Facebook
                  </button>
                </div>
              </div>
            </div>

            {/* Booking Calendar Placeholder */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#FBE9D0' }}>
                Book Your Session
              </h3>
              
              <div className="bg-cream/10 rounded-lg p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-amber/30 rounded-full mx-auto flex items-center justify-center mb-4">
                    📅
                  </div>
                  <p className="mb-4">
                    Ready to book your session? Choose a time that works for you.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <a 
                    href="https://cal.com/herenowmedia/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <GlowButton className="w-full bg-amber hover:bg-amber/90">
                      Schedule Consultation Call
                    </GlowButton>
                  </a>
                  <p className="text-sm opacity-75">
                    We'll discuss your vision, timeline, and package options
                  </p>
                </div>
                
                <div className="mt-6 p-4 bg-cream/5 rounded border border-cream/20">
                  <p className="text-sm">
                    <strong>Next Steps:</strong><br />
                    1. Schedule consultation call<br />
                    2. Discuss your vision & needs<br />
                    3. Receive custom quote<br />
                    4. Book your session date
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}