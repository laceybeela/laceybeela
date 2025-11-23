import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
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
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if all required environment variables are set
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Missing SMTP credentials')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter (using environment variables for email config)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      connectionTimeout: 30000, // 30 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 30000, // 30 seconds
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

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

    // Send email with timeout wrapper
    const sendEmailWithTimeout = () => {
      return Promise.race([
        transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: 'laceybeela@gmail.com',
          subject: `New 1:1 Breathwork Booking Request - ${name}`,
          text: emailContent,
          replyTo: email,
        }),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email sending timeout after 25 seconds')), 25000)
        )
      ])
    }

    await sendEmailWithTimeout()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Detailed error sending email:', error)
    console.error('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? 'SET' : 'NOT SET',
      password: process.env.SMTP_PASSWORD ? 'SET' : 'NOT SET',
      from: process.env.SMTP_FROM
    })
    return NextResponse.json(
      { error: 'Failed to send booking request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}