import OfferingCard from '@/components/offering-card'
import Section from '@/components/section'
import Nav from '@/components/nav'

export default function OfferingsPage() {
  return (
    <>
      <Nav />
      <Section className="bg-gradient-to-b from-sand via-cream to-sage min-h-screen pt-20">
        <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#4A284D' }}>
          Offerings
        </h1>
        <p className="text-xl text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Bridging technology and soul through conscious creation, authentic expression, and meaningful connection.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
          
          {/* Here Now Media */}
          <OfferingCard
            title="Here Now Media"
            desc="Professional photography services for weddings, events, and portraits. Capturing authentic moments with artistic vision and technical precision."
            cta="View Services & Book"
            gradient="from-blush via-amber to-sand"
            href="/here-now-media"
          />
          
          {/* Breathwork & Integration */}
          <OfferingCard
            title="Conscious Breathers Collective"
            desc="Facilitating conscious breathing practices, community connection, and integration circles for presence, healing, and deeper self-connection."
            cta="Join the Collective"
            gradient="from-ether via-cream to-sage"
            href="https://conscious-breathers-collective.mn.co/share/ugqAqCyGi8r0Fono?utm_source=manual"
            external={true}
          />
          
          {/* Software Development */}
          <OfferingCard
            title="Conscious Code"
            desc="Website and app development for healing communities, creative collectives, and soulful startups. Technology that enhances rather than complicates."
            cta="Start a Project"
            gradient="from-sage via-ether to-sand"
            href="/contact"
          />
          
          {/* Radio */}
          <OfferingCard
            title="The Last Radio Station on Earth"
            desc="Broadcasting consciousness, creativity, and authentic conversations. Deep listening experiences and meaningful dialogue from the frequencies that matter."
            cta="Listen & Support"
            gradient="from-plum via-blush to-amber"
            href="/radio"
          />
          
          {/* Writing */}
          <OfferingCard
            title="Writing & Reflection"
            desc="Exploring ideas through words, sharing insights on technology, creativity, and the human experience in our rapidly evolving digital landscape."
            cta="Read on Substack"
            gradient="from-amber via-sand to-cream"
            href="https://substack.com/@laceybeela"
            external={true}
          />
          
          {/* Consultation/Collaboration */}
          <OfferingCard
            title="Integration Consultation"
            desc="One-on-one sessions for those seeking to bridge technical and spiritual practices, align their work with their values, or integrate multiple disciplines."
            cta="Book a Call"
            gradient="from-cream via-blush to-ether"
            href="https://cal.com/herenowmedia/30min"
            external={true}
          />
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to explore how we might work together?
          </p>
          <a 
            href="/contact"
            className="inline-block bg-plum text-cream px-8 py-3 rounded-2xl font-medium hover:bg-plum/90 transition-colors shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </Section>
    </>
  )
}
