# Air-Gen Landing Page

A modern, responsive landing page for Air-Gen, a company focused on generating clean energy from air humidity.

## Features

- **Modern Design**: Clean, professional design with dark blue/grey color scheme
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Smooth hover effects and transitions
- **Accessible**: Built with accessibility best practices
- **Performance**: Built with Next.js 15 and optimized for speed

## Sections

1. **Header**: Navigation with logo and menu items
2. **Hero**: Eye-catching hero section with call-to-action
3. **How It Works**: Technical diagram and explanation
4. **News Stories**: Grid of featured news articles
5. **Meet The Team**: Team member profiles
6. **Our Donors**: Recognition section
7. **Footer**: Contact information, links, and newsletter signup

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons and gradients

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section
    ├── HowItWorks.tsx   # Technology explanation
    ├── NewsStories.tsx  # News articles grid
    ├── Team.tsx         # Team members
    ├── Donors.tsx       # Donors section
    └── Footer.tsx       # Footer with links and contact
```

## Color Palette

- **Primary Background**: #1a1a2e (Dark blue-grey)
- **Text**: #ffffff (White)
- **Secondary Text**: #6b7280 (Light grey)
- **Accent Green**: #10b981
- **Accent Blue**: #3b82f6
- **Card Background**: #f3f4f6 (Light grey)

## Images

The design is set up to use actual images for:
- **Team members**: Located in `/public/images/team/`
- **Technical diagram**: Located in `/public/images/diagrams/`
- **Hero background**: Located in `/public/images/hero/`

See `/public/images/README.md` for detailed specifications and instructions.

## Customization

The design uses CSS custom properties defined in `globals.css` for easy color customization. You can modify the color scheme by updating the CSS variables in the `:root` selector.