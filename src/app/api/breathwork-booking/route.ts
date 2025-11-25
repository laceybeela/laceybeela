import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  console.log('Breathwork booking API called')
  
  try {
    const body = await request.json()
    console.log('Request body received:', { 
      name: body.name, 
      email: body.email, 
      focusArea: body.focusArea 
    })
    
    const {
      name,
      email,
      phone,
      whatBringsYou,
      isNewToBreathwork,
      focusArea,
      healthConditions,
      waiverAgreed,
      preferredDays,
      preferredTimes
    } = body

    // Basic validation
    if (!name || !email || !whatBringsYou || !isNewToBreathwork || !focusArea || !waiverAgreed) {
      console.error('Missing required fields:', { name: !!name, email: !!email, whatBringsYou: !!whatBringsYou, isNewToBreathwork: !!isNewToBreathwork, focusArea: !!focusArea, waiverAgreed: !!waiverAgreed })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    console.log('Environment check:', {
      RESEND_API_KEY: process.env.RESEND_API_KEY ? 'SET' : 'NOT SET'
    })
    
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing Resend API key')
      return NextResponse.json(
        { error: 'Email service not configured', debug: 'Missing RESEND_API_KEY' },
        { status: 500 }
      )
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Format focus area for display
    const focusAreaLabels: { [key: string]: string } = {
      'inner-child-return': 'Inner Child Return',
      'shadow-illumination': 'Shadow Illumination',
      'grief-sacred-teacher': 'Grief as a Sacred Teacher',
      'nervous-system-reset': 'Nervous System Reset',
      'release-rebirth': 'Release & Rebirth',
      'healing-heart-space': 'Healing the Heart Space'
    }

    // Create email content
    const emailContent = `
New 1:1 Breathwork Session Booking Request

CONTACT INFORMATION:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

SESSION DETAILS:
What brings you here: ${whatBringsYou}
New to breathwork: ${isNewToBreathwork === 'yes' ? 'Yes' : 'No'}
Focus area: ${focusAreaLabels[focusArea] || focusArea}
Health conditions: ${healthConditions || 'None mentioned'}

SCHEDULING PREFERENCES:
Preferred days: ${Array.isArray(preferredDays) && preferredDays.length > 0 ? preferredDays.join(', ') : 'No preference specified'}
Preferred times: ${Array.isArray(preferredTimes) && preferredTimes.length > 0 ? preferredTimes.join(', ') : 'No preference specified'}

WAIVER:
Waiver agreed: ${waiverAgreed ? 'Yes' : 'No'}

---
SESSION DETAILS REMINDER:
• 90-minute session for $75
• Conducted via Zoom
• Focus: ${focusAreaLabels[focusArea]}
• Structure: 10min intro + 10min meditation + 60min breathwork + 10min grounding

Please respond within 24 hours to schedule this session.
    `.trim()

    // Send email using Resend
    console.log('Sending email using Resend...')
    
    try {
      const result = await resend.emails.send({
        from: 'Lacey Beela Breathwork <booking@laceybeela.org>',
        to: ['laceybeela@gmail.com'],
        subject: `New 1:1 Breathwork Booking Request - ${name}`,
        text: emailContent,
        replyTo: email,
      })
      
      console.log('Email sent successfully with Resend:', result)
    } catch (resendError) {
      console.error('Resend email failed:', resendError)
      throw new Error('Email sending failed')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing booking request:', error)
    return NextResponse.json(
      { error: 'Failed to send booking request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}