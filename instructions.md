# 🚀 Portfolio Deployment Guide

## Quick Deploy (Vercel - Recommended)

### 1. GitHub Setup

```bash
git init
git add .
git commit -m "Portfolio ready for deployment"
git remote add origin https://github.com/yourusername/hassaan-portfolio.git
git push -u origin main
```

### 2 Vercel Deploy
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click "New Project" → Import your repository
3. Vercel auto-detects Next.js settings
4. Click "Deploy" (2-3 minutes)

### 3. Custom Domain (Optional)
- Vercel Dashboard → Settings → Domains
- Add your domain → Update DNS as instructed

## Alternative Platforms

### Netlify
```bash
# Build locally
npm run build

# Deploy via Netlify CLI or drag .next folder to netlify.com
```

### Railway/Render
- Connect GitHub repo
- Auto-deploys on push
- No configuration needed

## Environment Setup

### Local Development
```bash
npm run dev          # http://localhost:3000
npm run dev -p 3001  # http://localhost:3001 (if 3000 busy)
```

### Production Build
```bash
npm run build        # Build for production
npm start            # Start production server
```

### Environment Variables
```bash
# Create .env.local for local development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# For production (add in hosting platform)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Performance Checklist

### Before Deploy
- [ ] `npm run build` completes successfully
- [ ] `npm run lint` shows no errors
- [ ] Images optimized (using Next.js Image component)
- [ ] Meta tags updated in `app/layout.tsx`

### Post-Deploy
- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] Custom domain working
- [ ] Analytics tracking (Vercel Analytics included)
- [ ] Contact form functional

## Analytics Setup

### Vercel Analytics (Already Included)
- Automatically tracks page views
- No additional setup needed

### Google Analytics (Optional)
1. Create GA4 property
2. Add to `app/layout.tsx`:
```jsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}/>
<script dangerouslySetInnerHTML={{
  __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`
}}/>
```

## Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Conflicts
```bash
# Use different port
npm run dev -p 3001
# or
PORT=3001 npm start
```

### Common Issues
- **TypeScript errors**: Run `npm run lint` to check
- **Missing dependencies**: `npm install` to fix
- **Build failures**: Check console for specific errors
- **Port conflicts**: Use `npm run dev -p 3001`
- **Memory issues**: Clear cache with `rm -rf .next node_modules`

## Security & SEO

### Security
- ✅ HTTPS enabled (automatic)
- ✅ Form validation implemented
- ✅ No sensitive data exposed
- ✅ Dependencies updated

### SEO Features
- ✅ Meta tags configured
- ✅ Open Graph images
- ✅ Twitter Card support
- ✅ Structured data markup
- ✅ Sitemap ready (can be added)

## Customization

### Update Content
- **Personal Info**: Edit `components/Hero.tsx`, `components/About.tsx`
- **Skills**: Modify `components/Skills.tsx`
- **Projects**: Update `components/Projects.tsx`
- **Contact**: Change details in `components/Contact.tsx`
- **Meta Tags**: Update `app/layout.tsx`

### Styling
- **Colors**: Modify `tailwind.config.js` primary colors
- **Fonts**: Change in `app/layout.tsx`
- **Animations**: Adjust in `components/*.tsx` files

## Performance Optimization

### Before Deployment
- [ ] Run `npm run build` to check bundle size
- [ ] Use Lighthouse in Chrome DevTools for performance audit
- [ ] Optimize images with Next.js Image component
- [ ] Enable compression (automatic on Vercel/Netlify)

### Post-Deployment
- [ ] CDN enabled (automatic on Vercel/Netlify)
- [ ] Caching configured properly
- [ ] Performance monitoring set up

## Support

**Issues?** Check:
1. [Next.js Docs](https://nextjs.org/docs)
2. [Vercel Docs](https://vercel.com/docs)
3. GitHub repository issues

**Quick Commands:**
```bash
npm run dev -p 3001    # Start dev server on port 3001
npm run build          # Build for production
npm run lint           # Check for errors
npm start              # Start production server
```

---

**🎉 Your portfolio is ready to deploy!**
