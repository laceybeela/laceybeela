'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  whatBringsYou: string
  isNewToBreathwork: 'yes' | 'no'
  focusArea: 'inner-child-return' | 'shadow-illumination' | 'grief-sacred-teacher' | 'nervous-system-reset' | 'release-rebirth' | 'healing-heart-space'
  healthConditions: string
  waiverAgreed: boolean
  preferredDays: string[]
  preferredTimes: string[]
}

export default function BreathworkForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch
  } = useForm<FormData>()

  const waiverAgreed = watch('waiverAgreed')

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/breathwork-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email me directly at laceybeela@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cream rounded-2xl p-8 shadow-glow border-2 border-sage/20 text-center"
      >
        <div className="text-6xl mb-4">🙏</div>
        <h3 className="text-2xl font-bold text-plum mb-4">Thank You!</h3>
        <p className="text-plum/80 mb-4">
          Your booking request has been submitted successfully. I&apos;ll review your information and 
          get back to you within 48 hours to schedule your session.
        </p>
        <p className="text-sm text-plum/60">
          If you have any immediate questions, feel free to email me at laceybeela@gmail.com
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-cream rounded-2xl p-8 shadow-glow space-y-6"
    >
      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b border-plum/20 pb-2" style={{ color: '#4A284D' }}>Contact Information</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#4A284D' }}>Name *</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-3 py-2 border border-plum/20 rounded-lg focus:ring-2 focus:ring-ether focus:border-ether outline-none"
              style={{ color: '#4A284D' }}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#4A284D' }}>Email *</label>
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              className="w-full px-3 py-2 border border-plum/20 rounded-lg focus:ring-2 focus:ring-ether focus:border-ether outline-none"
              style={{ color: '#4A284D' }}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: '#4A284D' }}>Phone</label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-3 py-2 border border-plum/20 rounded-lg focus:ring-2 focus:ring-ether focus:border-ether outline-none"
            style={{ color: '#4A284D' }}
            placeholder="Your phone number"
          />
        </div>
      </div>

      {/* Session Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b border-plum/20 pb-2" style={{ color: '#4A284D' }}>Session Details</h3>
        
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: '#4A284D' }}>What brings you here? *</label>
          <textarea
            {...register('whatBringsYou', { required: 'Please tell me what brings you here' })}
            rows={3}
            className="w-full px-3 py-2 border border-plum/20 rounded-lg focus:ring-2 focus:ring-ether focus:border-ether outline-none resize-y"
            style={{ color: '#4A284D' }}
            placeholder="Share what's drawing you to breathwork at this time..."
          />
          {errors.whatBringsYou && <p className="text-red-500 text-sm mt-1">{errors.whatBringsYou.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#4A284D' }}>Are you new to breathwork? *</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                {...register('isNewToBreathwork', { required: 'Please select an option' })}
                type="radio"
                value="yes"
                className="mr-2 text-ether focus:ring-ether"
              />
              <span className="text-plum">Yes, I&apos;m new to breathwork</span>
            </label>
            <label className="flex items-center">
              <input
                {...register('isNewToBreathwork', { required: 'Please select an option' })}
                type="radio"
                value="no"
                className="mr-2 text-ether focus:ring-ether"
              />
              <span className="text-plum">No, I have some experience</span>
            </label>
          </div>
          {errors.isNewToBreathwork && <p className="text-red-500 text-sm mt-1">{errors.isNewToBreathwork.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#4A284D' }}>Which sacred focus area resonates most? *</label>
          <select
            {...register('focusArea', { required: 'Please select a focus area' })}
            className="w-full px-3 py-2 border border-plum/20 rounded-lg focus:ring-2 focus:ring-ether focus:border-ether outline-none"
            style={{ color: '#4A284D' }}
          >
            <option value="">Choose a sacred focus area...</option>
            <option value="inner-child-return">Inner Child Return</option>
            <option value="shadow-illumination">Shadow Illumination</option>
            <option value="grief-sacred-teacher">Grief as Sacred Teacher</option>
            <option value="nervous-system-reset">Nervous System Reset</option>
            <option value="release-rebirth">Release & Rebirth</option>
            <option value="healing-heart-space">Healing the Heart Space</option>
          </select>
          {errors.focusArea && <p className="text-red-500 text-sm mt-1">{errors.focusArea.message}</p>}
          
          <div className="mt-2 text-xs text-plum/60">
            <p>Each session is uniquely crafted around your chosen focus, using conscious connected breath to guide you into deeper healing and awareness.</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: '#4A284D' }}>Do you have any health conditions I should know about?</label>
          <textarea
            {...register('healthConditions')}
            rows={2}
            className="w-full px-3 py-2 border border-plum/20 rounded-lg focus:ring-2 focus:ring-ether focus:border-ether outline-none resize-y"
            style={{ color: '#4A284D' }}
            placeholder="Please share any physical or mental health conditions, medications, or concerns..."
          />
        </div>
      </div>

      {/* Scheduling Preferences */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b border-plum/20 pb-2" style={{ color: '#4A284D' }}>Scheduling Preferences</h3>
        
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#4A284D' }}>Preferred Days</label>
          <div className="grid grid-cols-2 gap-2">
            {['Weekdays', 'Weekends'].map((day) => (
              <label key={day} className="flex items-center">
                <input
                  {...register('preferredDays')}
                  type="checkbox"
                  value={day.toLowerCase()}
                  className="mr-2 text-ether focus:ring-ether rounded"
                />
                <span className="text-plum">{day}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#4A284D' }}>Preferred Times</label>
          <div className="grid grid-cols-2 gap-2">
            {['Mornings', 'Evenings'].map((time) => (
              <label key={time} className="flex items-center">
                <input
                  {...register('preferredTimes')}
                  type="checkbox"
                  value={time.toLowerCase()}
                  className="mr-2 text-ether focus:ring-ether rounded"
                />
                <span className="text-plum">{time}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Waiver */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b border-plum/20 pb-2" style={{ color: '#4A284D' }}>Waiver Agreement</h3>
        
        <div className="bg-plum/5 rounded-lg p-4">
          <p className="text-sm text-plum/80 mb-4">
            I understand that breathwork is a powerful healing practice that can bring up intense physical, 
            emotional, and psychological experiences. I take full responsibility for my wellbeing during the session 
            and agree to communicate any concerns immediately. I acknowledge that this is not medical treatment 
            and does not replace professional medical or psychological care.
          </p>
          
          <label className="flex items-start">
            <input
              {...register('waiverAgreed', { required: 'You must agree to the waiver to proceed' })}
              type="checkbox"
              className="mr-3 mt-1 text-ether focus:ring-ether rounded"
            />
            <span className="text-plum text-sm">
              I have read and agree to the above waiver and understand the nature of breathwork practice. *
            </span>
          </label>
          {errors.waiverAgreed && <p className="text-red-500 text-sm mt-1">{errors.waiverAgreed.message}</p>}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <motion.button
        whileHover={waiverAgreed && !isSubmitting ? { scale: 1.02 } : {}}
        type="submit"
        disabled={!waiverAgreed || isSubmitting}
        className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all ${
          waiverAgreed && !isSubmitting
            ? 'bg-blush text-plum shadow-glow hover:brightness-110'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
      </motion.button>
      
      <p className="text-center text-sm text-plum/60">
        I&apos;ll review your request and get back to you within 48 hours to schedule your session.
      </p>
    </motion.form>
  )
}