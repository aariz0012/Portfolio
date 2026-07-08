# Aariz Khan - Portfolio Website

A premium, modern portfolio website for a Full Stack Developer & AI/ML Engineer featuring cinematic animations, glassmorphism effects, and award-winning design aesthetics.

## Features

- **Preloader**: Cinematic water-fill animation with shutter reveal effect
- **Navbar**: Floating glassmorphism navigation with smooth scroll and mobile menu
- **Hero Section**: Full-screen video background with custom play controls
- **About Section**: Creative ID badge design with floating star decorations
- **Services Timeline**: Interactive process cards with scroll-driven animations
- **Footer**: Giant branding typography with elegant layout

## Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Preloader.jsx    # Water-fill animation preloader
│   │   ├── Navbar.jsx       # Glassmorphism navigation
│   │   ├── Hero.jsx         # Video background hero section
│   │   ├── About.jsx        # ID badge about section
│   │   ├── Services.jsx     # Process timeline
│   │   └── Footer.jsx       # Giant branding footer
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets (videos, images)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Required Assets

Place the following assets in the `public/` directory:

- `hero-video.mp4` - Background video for hero section
- `hero-poster.jpg` - Poster image for video
- `profile.jpg` - Profile photo for ID badge

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  'brand-red': '#FF2A2A',
  'brand-black': '#111111',
}
```

### Content
Edit individual component files to update:
- Personal information in `About.jsx`
- Process steps in `Services.jsx`
- Contact details in `Footer.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Aariz Khan. All rights reserved.
