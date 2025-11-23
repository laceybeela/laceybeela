import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
  try {
    // Test both port configurations
    const testConfigs = [
      {
        name: 'Port 587 (STARTTLS)',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        connectionTimeout: 10000,
        tls: { rejectUnauthorized: false }
      },
      {
        name: 'Port 465 (SSL)',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        connectionTimeout: 10000,
        tls: { rejectUnauthorized: false }
      }
    ]

    const results = []

    for (const config of testConfigs) {
      try {
        const transporter = nodemailer.createTransport(config)
        
        // Test connection with timeout
        const testConnection = () => {
          return Promise.race([
            transporter.verify(),
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Connection timeout')), 10000)
            )
          ])
        }

        await testConnection()
        results.push({ config: config.name, status: 'SUCCESS' })
      } catch (error) {
        results.push({ 
          config: config.name, 
          status: 'FAILED', 
          error: error instanceof Error ? error.message : 'Unknown error' 
        })
      }
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      smtp_user: process.env.SMTP_USER ? 'SET' : 'NOT SET',
      smtp_password: process.env.SMTP_PASSWORD ? 'SET' : 'NOT SET',
      results
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}