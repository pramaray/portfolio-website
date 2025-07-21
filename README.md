# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. Perfect for showcasing your software development projects and skills.

## Features

- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Responsive**: Looks great on all devices (mobile, tablet, desktop)
- 🚀 **Fast Performance**: Built with Next.js for optimal loading speeds
- 🎯 **SEO Friendly**: Structured for search engine optimization
- 📧 **Contact Form**: Ready-to-use contact form for inquiries
- 🎪 **Smooth Scrolling**: Navigation with smooth scrolling between sections

## Sections Included

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and brief introduction
3. **Projects**: Showcase of your development projects with technologies used
4. **Skills**: Display of your technical skills and proficiency levels
5. **Contact**: Contact form for potential clients or employers

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Customization

### Personal Information
1. **Update your name** in `app/components/Hero.js` (line 9)
2. **Add your photo** in `app/components/About.js` (replace the placeholder)
3. **Customize the about section** with your personal story
4. **Update skills** in `app/components/Skills.js`
5. **Add your projects** in `app/components/Projects.js`

### Styling
- The website uses **Tailwind CSS** for styling
- Colors can be customized by modifying the Tailwind classes
- The main color theme uses blue (`blue-600`, `blue-700`, etc.)

### Contact Form
The contact form is ready for integration with:
- **Formspree**
- **Netlify Forms**
- **EmailJS**
- Custom backend API

## Deployment on Vercel

1. **Push your code to GitHub**
2. **Connect your GitHub repo to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select your portfolio repository

3. **Deploy**:
   - Vercel will automatically build and deploy your site
   - You'll get a live URL that you can share

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **Deployment**: Vercel (recommended)

## Project Structure

```
portfolio-website/
├── app/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   └── Contact.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── package.json
└── README.md
```

## Next Steps

1. **Customize content** with your personal information
2. **Add your projects** with real project data and images
3. **Update skills** to match your expertise
4. **Test responsiveness** on different devices
5. **Deploy to Vercel** for a live website
6. **Set up contact form** integration
7. **Add Google Analytics** (optional)
8. **Connect your domain** (optional)

## Need Help?

If you need help customizing or deploying your portfolio:
1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Visit [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Review [Vercel Deployment Guide](https://vercel.com/docs)

Happy coding! 🚀
