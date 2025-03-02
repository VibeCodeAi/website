# VibeCode - AI-Powered Startup House

VibeCode is a modern, responsive landing page for an AI startup specializing in agentic AI development. This project showcases a beautiful, animated UI with a playful mascot character.

## Features

- Responsive design that works on all devices
- Interactive particle background with subtle animations
- Cute mascot character that engages with users
- Modern UI with gradient accents and clean design
- Sections for services, contact form, and more

## Technologies Used

- React
- TypeScript
- CSS3 with modern features
- HTML5 Canvas for animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/vibe-code-landing.git
cd vibe-code-landing
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

The site will be available at `http://localhost:3000`

## Deployment

This site is designed to be deployed on GitHub Pages. To deploy:

1. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/vibe-code-landing"
```

2. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
# or
yarn add --dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  // other scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy the site:
```bash
npm run deploy
# or
yarn deploy
```

## Project Structure

- `src/components/` - React components
- `src/assets/` - Static assets like images
- `public/` - Public files

## Customization

- Color scheme can be modified in `src/App.css` by changing the CSS variables
- Mascot options can be updated in the `Mascot.tsx` component
- Particle animation settings can be adjusted in `ParticleBackground.tsx`

## License

MIT

## Acknowledgements

- Mascot component inspired by kawaii design patterns
- Particle animation inspired by interactive web experiences
