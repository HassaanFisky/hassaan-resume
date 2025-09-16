# Muhammad Hassaan Aslam - Portfolio Website

Ultra-premium, interactive portfolio website built with Next.js, TailwindCSS, and Framer Motion. Features stunning animations, dark/light mode, and a modern design that showcases professional skills and projects.

🚀 Features

- **Ultra-Premium Design**: Modern, clean, and professional design with gradient effects
- **Interactive Animations**: Smooth scroll-triggered animations using Framer Motion
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessible**: WCAG compliant with proper ARIA labels
- **Particle Background**: Animated particle system for visual appeal
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project cards with filtering
- **Skills Visualization**: Animated progress bars and skill badges

🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel (recommended)

📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd hassaan-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

🎨 Customization

Personal Information
Update the following files with your information:

- **Name & Tagline**: `components/Hero.tsx`
- **About Section**: `components/About.tsx`
- **Skills**: `components/Skills.tsx`
- **Projects**: `components/Projects.tsx`
- **Contact Info**: `components/Contact.tsx`

Profile Picture
Replace the placeholder in `components/Hero.tsx`:

```jsx
// Replace this section with your actual image
<div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 via-purple-500 to-primary-600 p-1 shadow-2xl">
  <img 
    src="/your-profile-picture.jpg" 
    alt="Your Name" 
    className="w-full h-full rounded-full object-cover"
  />
</div>
```

Project Images
Add your project images to the `public/` folder and update the image paths in `components/Projects.tsx`.

Colors & Theme
Customize colors in `tailwind.config.js`:

```js
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... customize your brand colors
  }
}
```

🚀 Deployment

Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

Other Platforms

**Netlify**:

```bash
npm run build

Upload the .next folder to Netlify
```

**Railway**:

```bash

Connect your GitHub repo to Railway

Railway will automatically deploy
```

📱 Performance Optimization

- **Images**: Use Next.js Image component for optimization
- **Fonts**: Optimized with `next/font`
- **Bundle**: Tree-shaking and code splitting enabled
- **SEO**: Meta tags and structured data included

🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

📄 File Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects showcase
│   ├── WhyWorkWithMe.tsx    # Why work section
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer
│   ├── ThemeProvider.tsx    # Theme context
│   └── ParticleBackground.tsx # Animated background
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

🎯 SEO Features

- Meta tags for social sharing
- Open Graph images
- Twitter Card support
- Structured data markup
- Sitemap generation (can be added)
- Robots.txt (can be added)

🔒 Security

- Form validation
- XSS protection
- CSRF protection (when backend is added)
- Secure headers (can be configured)

📞 Support

For questions or support:

- Email: <fiskyhere@gmail.com>
- GitHub :<https://github.com/HassaanFisky>

📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

**Made with ❤️ by Muhammad Hassaan Aslam**
