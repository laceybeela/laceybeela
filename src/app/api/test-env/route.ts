import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    smtp_user: process.env.SMTP_USER ? 'SET' : 'NOT SET',
    smtp_password: process.env.SMTP_PASSWORD ? 'SET' : 'NOT SET',
    smtp_host: process.env.SMTP_HOST || 'NOT SET',
    smtp_port: process.env.SMTP_PORT || 'NOT SET',
    smtp_from: process.env.SMTP_FROM || 'NOT SET',
    resend_api_key: process.env.RESEND_API_KEY ? 'SET' : 'NOT SET',
    node_env: process.env.NODE_ENV || 'NOT SET'
  })
}