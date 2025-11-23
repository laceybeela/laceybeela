# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production version with Turbopack (skips linting)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 15 application using the App Router with a personal website/portfolio structure:

**Framework & Tools:**
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4 
- Turbopack for fast development builds
- Framer Motion for animations
- React Hook Form + Zod for form handling
- Nodemailer for email notifications

**Project Structure:**
- `src/app/` - App Router pages with nested routes:
  - `/about`, `/contact`, `/offerings`, `/writing`, `/radio`, `/here-now-media`, `/breathwork`
  - `/api/breathwork-booking` - Email notification API for booking requests
- `src/components/` - Reusable UI components including:
  - `audio-player`, `nav`, `portal-hero`
  - `breathwork-form.tsx` - Complete booking form with validation and email integration
- `src/lib/` - Utility functions (includes substack integration)
- `public/` - Static assets and images including Conscious Breathers logo

**Design System:**
Uses a custom color palette defined in Tailwind config:
- `cream` (#FFF8F2) - Background
- `plum` (#4A284D) - Primary text
- `blush` (#F6B1B8) - Accent 
- `sand`, `amber`, `ether`, `sage` - Supporting colors
- Custom gradients: `portal` and `dusk`

**Typography:**
- Primary: Syne (variable font)
- Accent: Italianno (decorative font)

**Key Features:**
- Fixed navigation header with backdrop blur
- Portal-themed hero sections
- Audio player component
- Substack feed integration
- Form handling with validation
- **Breathwork Booking System:**
  - 1:1 breathwork session booking with detailed session information (90-minute sessions, $75, via Zoom)
  - Interactive focus area selection with hover descriptions for 6 sacred themes
  - Complete booking form with validation and email notifications
  - Conscious Breathers Collective community integration
  - Automatic email notifications to laceybeela@gmail.com with booking details

## Breathwork Focus Areas

The breathwork booking system offers 6 sacred focus areas, each with detailed descriptions:

1. **Inner Child Return** - A soft descent into the forgotten places within you. Reconnecting to innocence, play, unmet needs, and the small voice inside that's still waiting to be held.

2. **Shadow Illumination** - A gentle but honest journey into the parts of yourself you've tucked away—anger, fear, jealousy, shame. Not to fix them, but to meet them with awareness and compassion.

3. **Grief as a Sacred Teacher** - Holding space for heartbreak, transition, loss, endings, and the slow unwinding of letting go. A space to feel what you've been carrying alone.

4. **Nervous System Reset** - A restorative session focused on downshifting out of chronic stress, burnout, and overwhelm. Rebalancing your body through breath, presence, and gentle body awareness.

5. **Release & Rebirth** - A transformative session for life transitions: moving, ending relationships, shifting identities, starting new chapters. Shedding the old skin so you can rise differently.

6. **Healing the Heart Space** - For heartbreak, resentment, emotional fatigue, or feeling closed off. A clearing of the energetic chest—softening the armor and restoring emotional flow.

## Email System Configuration

The breathwork booking system requires email configuration in `.env.local`:

```
# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=laceybeela@gmail.com
SMTP_PASSWORD=your-gmail-app-password
SMTP_FROM=laceybeela@gmail.com
```

**Setup Requirements:**
- Gmail account with 2-Factor Authentication enabled
- Gmail App Password generated (not regular password)
- App Password entered without spaces in .env.local

**Email Features:**
- Automatic booking notifications with all form details
- Reply-to functionality for easy client communication
- Professional email formatting with session details
- Integration with all 6 breathwork focus areas

## DigitalOcean Droplet Deployment

The site is deployed on a DigitalOcean droplet. Here's how to securely deploy with environment variables:

### Server-Side Environment Setup

**1. Deploy Code (without .env.local):**
```bash
# On your droplet
git clone [your-repo-url]
cd laceybeela
npm install
npm run build
```

**2. Create Secure .env.local on Server:**
```bash
# SSH into your droplet
nano .env.local

# Add your SMTP configuration:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=laceybeela@gmail.com
SMTP_PASSWORD=your-gmail-app-password
SMTP_FROM=laceybeela@gmail.com

# Save and set secure permissions
chmod 600 .env.local
chown $USER:$USER .env.local
```

**3. Production Startup:**
```bash
# Using PM2 (recommended)
npm install -g pm2
pm2 start npm --name "laceybeela" -- start
pm2 startup
pm2 save

# Or direct startup
npm start
```

### Security Best Practices

- **File Permissions:** Set .env.local to 600 (owner read/write only)
- **Server Security:** Use SSH keys, keep OS updated, configure UFW firewall
- **Process Management:** Use PM2 for automatic restarts and process monitoring
- **Reverse Proxy:** Configure Nginx for SSL and domain routing
- **Regular Updates:** Keep Node.js, npm, and dependencies updated

### Deployment Checklist

- [ ] Code deployed to droplet via git (excluding .env.local)
- [ ] Dependencies installed with `npm install`
- [ ] Production build created with `npm run build`
- [ ] .env.local created on server with secure permissions
- [ ] SMTP credentials tested (submit test booking form)
- [ ] PM2 configured for process management
- [ ] Nginx configured with SSL certificate
- [ ] Firewall rules configured (UFW)
- [ ] Domain DNS pointing to droplet IP
- [ ] Email notifications working in production

**Note:** Never commit .env.local to GitHub. Always create it directly on the server to keep SMTP credentials secure.

The site appears to be a personal brand/portfolio for "Lacey Beela" with offerings, writing, radio content, media services, and specialized breathwork session booking.