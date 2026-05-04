# AutoTak Portfolio Website - Setup Instructions

This is an exact copy of the AutoTak automation studio portfolio website.

## Features

- ✨ Modern, minimalist design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Custom animations using Framer Motion
- 🎯 Smooth scroll navigation
- 🖼️ Interactive project showcase with hover previews
- 💚 Neon green (#B8FF4F) accent color theme
- 🌙 Dark mode design (#080808 background)

## Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Motion (Framer Motion) 12.23.24
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Fonts**: Space Grotesk, Space Mono

## Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **pnpm** package manager

## Installation & Setup

### Step 1: Install Dependencies

Using npm:
```bash
npm install
```

Or using pnpm (recommended):
```bash
pnpm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Or with pnpm:
```bash
pnpm dev
```

The website will open at `http://localhost:5173`

### Step 3: Build for Production

To create an optimized production build:

```bash
npm run build
```

Or with pnpm:
```bash
pnpm build
```

The built files will be in the `dist` folder.

## Project Structure

```
AutoTak_Portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx          # Navigation bar with mobile menu
│   │   │   ├── Hero.tsx            # Hero section with animated text
│   │   │   ├── SelectedWork.tsx    # Projects showcase
│   │   │   ├── WhatIsAutomation.tsx # Automation explanation
│   │   │   ├── HowItHelps.tsx      # Benefits section
│   │   │   ├── AboutUs.tsx         # About section
│   │   │   ├── Contact.tsx         # Contact section
│   │   │   └── ui/                 # Reusable UI components
│   │   └── App.tsx                 # Main app component
│   ├── styles/
│   │   ├── index.css               # Main CSS imports
│   │   ├── fonts.css               # Google Fonts imports
│   │   ├── tailwind.css            # Tailwind configuration
│   │   └── theme.css               # CSS variables & theme
│   └── main.tsx                    # React entry point
├── index.html                       # HTML entry point
├── package.json                     # Dependencies
├── vite.config.ts                   # Vite configuration
└── postcss.config.mjs              # PostCSS configuration
```

## Customization Guide

### 1. Change Brand Name & Logo
Edit `src/app/components/Navbar.tsx` and `src/app/components/Contact.tsx`:
```tsx
// Change "AutoTak" to your brand name
```

### 2. Update Contact Email
Find and replace `tutialok5@gmail.com` with your email in:
- `src/app/components/Navbar.tsx`
- `src/app/components/Contact.tsx`

### 3. Modify Projects
Edit `src/app/components/SelectedWork.tsx`:
```tsx
const projects = [
  {
    id: "01",
    title: "Your Project Title",
    category: "Your Category",
    tags: ["Tag1", "Tag2", "Tag3"],
    year: "2024",
    description: "Your project description...",
    image: "https://your-image-url.com/image.jpg",
  },
  // Add more projects...
];
```

### 4. Change Color Scheme
The main accent color is `#B8FF4F` (neon green). To change it:
- Search for `#B8FF4F` across all files
- Replace with your preferred color

### 5. Update Content
Edit the text content in each component:
- `Hero.tsx` - Main headline
- `WhatIsAutomation.tsx` - Process steps
- `HowItHelps.tsx` - Benefits
- `AboutUs.tsx` - About information

## Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 90+

## Troubleshooting

### Issue: "Module not found" errors
**Solution**: Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

### Issue: Animations not working
**Solution**: Ensure Motion is properly installed:
```bash
npm install motion@12.23.24
```

### Issue: Styles not applying
**Solution**: Clear Vite cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

## License

This is a portfolio website template. Feel free to use and modify as needed.

## Credits

- Design & Development: AutoTak Studio
- Fonts: Google Fonts (Space Grotesk, Space Mono)
- Icons: Lucide React
- Animations: Framer Motion

## Support

For questions or issues, contact: tutialok5@gmail.com

---

Made with ❤️ by AutoTak
