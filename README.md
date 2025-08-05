# Full E-commerce Application

A modern React-based e-commerce application built with TypeScript, Vite, and Tailwind CSS.

## Features

- 🛍️ Product browsing and search
- 🛒 Shopping cart functionality
- ❤️ Favorites/wishlist
- 👤 User authentication
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast performance with Vite

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, DaisyUI
- **State Management**: Zustand
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd full-ecommerce
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment on Vercel

This project is optimized for deployment on Vercel with proper SPA routing support.

### Automatic Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the project settings
3. The build command `npm run build` will be used automatically
4. Static assets will be served with proper caching headers

### Manual Deployment

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy to Vercel:

```bash
vercel
```

3. Follow the prompts to configure your deployment

### Environment Variables

If your application requires environment variables, add them in your Vercel project settings:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add any required environment variables

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── services/      # API services
├── store/         # Zustand state management
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── assets/        # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## SPA Routing

The application uses React Router for client-side routing. The Vercel configuration includes:

- **Rewrites**: All routes redirect to `index.html` for SPA behavior
- **Headers**: Static assets are cached for optimal performance
- **Page Refresh Support**: Direct URL access and page refreshes work correctly

## Performance Optimizations

- Code splitting with dynamic imports
- Optimized bundle size
- Static asset caching
- Lazy loading of components
- Efficient state management with Zustand

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
