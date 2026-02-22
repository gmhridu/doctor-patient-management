# MediCare - Doctor Patient Management

A modern healthcare landing page built with Next.js, shadcn/ui, and cyan as the primary color.

## Purpose

A professional medical/healthcare website featuring doctor listings, appointment booking UI, pricing plans, patient testimonials, and contact information.

## Quick Setup (< 2 min)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Key Features

- **Hero Section** - Landing banner with call-to-action
- **Doctor Listings** - Browse and search doctors
- **Services/Features** - Healthcare services overview
- **How It Works** - Step-by-step process explanation
- **Pricing Plans** - Service pricing tiers
- **Testimonials** - Patient reviews
- **Contact Form** - Get in touch functionality
- **Responsive Design** - Mobile-friendly layout
- **Cyan Theme** - Primary color: `oklch(0.61 0.11 222)`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui (radix-nova style)
- Phosphor Icons

## Project Structure

```
src/
├── app/              # Next.js app router
├── components/
│   ├── home/         # Landing page sections
│   ├── shared/       # Navbar, footer
│   └── ui/           # shadcn components
└── lib/              # Utilities
```

## Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```
