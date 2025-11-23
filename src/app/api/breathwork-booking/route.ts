import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    // Check if all required environment variables are set
    console.log('Environment check:', {
      SMTP_USER: process.env.SMTP_USER ? 'SET' : 'NOT SET',
      SMTP_PASSWORD: process.env.SMTP_PASSWORD ? 'SET' : 'NOT SET',
      SMTP_HOST: process.env.SMTP_HOST || 'DEFAULT (smtp.gmail.com)',
      SMTP_PORT: process.env.SMTP_PORT || 'DEFAULT (587)',
      SMTP_FROM: process.env.SMTP_FROM || 'NOT SET'
    })
    
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Missing SMTP credentials')
      return NextResponse.json(
        { error: 'Email service not configured', debug: 'Missing SMTP_USER or SMTP_PASSWORD' },
        { status: 500 }
      )
    }

    // Create transporter with fallback to port 465 (SSL) if 587 fails
    const createTransporter = (useSSL = false) => {
      const config = {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: useSSL ? 465 : parseInt(process.env.SMTP_PORT || '587'),
        secure: useSSL, // true for 465, false for other ports
        connectionTimeout: 20000, // 20 seconds
        greetingTimeout: 20000, // 20 seconds
        socketTimeout: 20000, // 20 seconds
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false
        }
      }
      console.log('SMTP config:', { ...config, auth: { user: 'SET', pass: 'SET' } })
      return nodemailer.createTransport(config)
    }

    // Try port 587 first, then 465 as fallback
    let transporter = createTransporter(false)

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

    console.log('Creating transporter and sending email...')
    
    const emailData = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'laceybeela@gmail.com',
      subject: `New 1:1 Breathwork Booking Request - ${name}`,
      text: emailContent,
      replyTo: email,
    }
    
    // Send email with timeout wrapper and port fallback
    const sendEmailWithTimeout = async (transporterToUse: any, timeoutMs: number = 15000) => {
      return Promise.race([
        transporterToUse.sendMail(emailData),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error(`Email sending timeout after ${timeoutMs/1000} seconds`)), timeoutMs)
        )
      ])
    }

    console.log('Attempting to send email with port 587...')
    try {
      const result = await sendEmailWithTimeout(transporter, 15000)
      console.log('Email sent successfully with port 587:', result)
    } catch (error587) {
      console.log('Port 587 failed, trying port 465 (SSL):', error587)
      
      // Try with SSL port 465
      const sslTransporter = createTransporter(true)
      try {
        const result = await sendEmailWithTimeout(sslTransporter, 15000)
        console.log('Email sent successfully with port 465 (SSL):', result)
      } catch (error465) {
        console.error('Both ports failed:', { port587: error587, port465: error465 })
        throw error465
      }
    }

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