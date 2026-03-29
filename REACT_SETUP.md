# React Portfolio Setup - Quick Start Guide

## Prerequisites
- Node.js v16+ installed on your machine
- npm installed

## Installation (Already Done!)
Dependencies have been installed in `/node_modules`

## Running the Development Server

```bash
npm run dev
```

This will:
- Start Vite development server (typically on http://localhost:5173)
- Hot reload as you make changes
- Open in your browser automatically

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── main.jsx                          # React entry point
├── App.jsx                           # Main app with routing
├── pages/
│   ├── LandingPage.jsx              # Landing page with hero + gallery
│   └── PortfolioPage.jsx            # Portfolio page (in progress)
├── components/
│   ├── Hero/
│   │   ├── HeroSection.jsx          # Hero with particles & title
│   │   ├── MagicCanvas.jsx          # Canvas particle system
│   │   ├── SoulGemButton.jsx        # Interactive gem button
│   │   └── *.module.css             # Component styles
│   ├── Gallery/
│   │   ├── CircularGallery.jsx      # 3D carousel (react-three-fiber)
│   │   └── CircularGallery.module.css
│   └── Transition/
│       ├── MadokamiTransition.jsx   # Page transition overlay
│       └── MadokamiTransition.module.css
└── styles/
    └── globals.css                  # Global styles

public/
└── images/                          # All character & asset images
```

## Features Implemented

✅ **Hero Section**
- Particle effects on mouse movement
- Magical aura follow effect
- Animated title with shimmer effect
- Japanese quote

✅ **Soul Gem Button**
- GlassIcons glassmorphism design
- Hover glow effect with 3D layers
- Click triggers Madokami transition
- Smooth scale & rotation animations

✅ **3D Circular Gallery**
- React-three-fiber WebGL rendering
- 6 character carousel items
- Horizontal scroll with momentum
- Distortion effects on 3D meshes
- Character descriptions displayed
- Grid layout below canvas

✅ **Madokami Transition**
- Smooth zoom & fade effects
- Particle burst animation
- Auto-navigates to portfolio page
- Epic visual effect

✅ **React Router**
- Client-side routing
- "/" = Landing page
- "/portfolio" = Portfolio page

## Next Steps

1. Run `npm run dev` to start the development server
2. Open http://localhost:5173 in your browser
3. Test the Soul Gem button hover and click interactions
4. Scroll the gallery carousel
5. Verify 3D effects render correctly

## Testing Checklist

- [ ] Particle effects appear on hero mouse movement
- [ ] Soul Gem button glows on hover
- [ ] Soul Gem button triggers Madokami transition on click
- [ ] Transition zooms and particles burst
- [ ] Navigation to portfolio page completes
- [ ] Gallery carousel renders with 3D effects
- [ ] Gallery items show character names and descriptions
- [ ] Horizontal scroll works on gallery
- [ ] All animations are smooth (60fps)
- [ ] Mobile responsiveness works

## Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 5174
```

**Hot reload not working?**
- Check that your editor saved the file
- Try refreshing the browser (F5)

**3D gallery not rendering?**
- Ensure WebGL is enabled in your browser
- Check browser console for errors
- Try a different browser (Chrome recommended for best WebGL support)

## Performance Tips

- Particle effects are GPU-accelerated
- 3D gallery uses efficient Three.js geometry
- Lazy loading for images can be added later
- Canvas effects use requestAnimationFrame for smooth 60fps

## Customization

### Colors
Edit CSS variable in `src/styles/globals.css`:
```css
:root {
  --color-pink: #ff0088;
  --color-purple: #a300a3;
  /* etc */
}
```

### Gallery Items
Edit gallery array in `src/components/Gallery/CircularGallery.jsx`:
```javascript
const galleryItems = [
  { image: '/images/...' , text: '...', description: '...' },
  // ...
]
```

### Button Text/Label
Edit `SoulGemButton.jsx`:
```jsx
<motion.span className={styles.label}>
  Enter Portfolio  {/* Change this */}
</motion.span>
```

## Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready to deploy to any static hosting (Netlify, Vercel, GitHub Pages, etc).

## Support

For questions or issues, refer to:
- React: https://react.dev
- Vite: https://vitejs.dev
- React Router: https://reactrouter.com
- Three.js: https://threejs.org
- Framer Motion: https://www.framer.com/motion/
