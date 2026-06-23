# 🚀 Setup & Deployment Guide

This guide will help you set up the portfolio website locally and deploy it to the web.

---

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (VS Code, Sublime Text, Atom, etc.)
- Git (optional, but recommended)

---

## 🏠 Local Development Setup

### Option 1: Simple Local Server (Recommended)

#### Using Python (3.7+)
```bash
cd portfolio1
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

#### Using Node.js (with http-server)
```bash
npm install -g http-server
cd portfolio1
http-server
```

#### Using Live Server (VS Code Extension)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The website will automatically open in your default browser

### Option 2: Direct File Opening
1. Simply double-click `index.html` to open it in your default browser
2. This works for basic viewing but some features may be limited

---

## 📁 Project Structure

```
portfolio1/
├── index.html              # Main portfolio page
├── css/
│   └── style.css          # All glassmorphism styles
├── js/
│   └── script.js          # Navigation and interactivity
├── assets/
│   └── images/            # Portfolio images directory
├── README.md              # Main project documentation
├── SETUP.md              # This file
├── .gitignore            # Git ignore rules
└── CONTRIBUTING.md       # (Optional) Contribution guidelines
```

---

## 🎨 Customization Guide

### Update Personal Information

Edit the following in `index.html`:

1. **Hero Section** (around line 43):
   ```html
   <h1 class="hero-title">Your Name</h1>
   <p class="hero-subtitle">Your Professional Title</p>
   <p class="hero-description">Your bio here</p>
   ```

2. **Contact Information** (around line 415):
   - Update email, phone, location
   - Update LinkedIn URL

3. **Social Links**: 
   - Update URLs in social link sections throughout the HTML

### Update Education

Edit the education section (around line 88):
```html
<h3>Your Degree</h3>
<p class="education-institution">Your University</p>
```

### Update Projects

Each project card (around line 185) can be customized:
```html
<h3 class="project-title">Your Project Title</h3>
<div class="project-tech">
    <span class="tech-badge">Technology 1</span>
</div>
```

### Add Your Images

Place your images in `assets/images/` and reference them in HTML:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

### Modify Colors (Glassmorphism Theme)

Edit CSS variables in `css/style.css` (lines 8-20):
```css
:root {
    --accent-color: #38bdf8;       /* Change primary color */
    --accent-success: #34d399;     /* Change success color */
    --text-primary: #f8fafc;       /* Change text color */
}
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (FREE - Recommended)

1. Create a GitHub account (if you don't have one)
2. Create a new repository named `portfolio`
3. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```
4. Copy all portfolio files into this directory
5. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```
6. Go to repository Settings > Pages
7. Select "main branch" as the source
8. Your portfolio will be live at: `https://YOUR_USERNAME.github.io/portfolio`

### Option 2: Netlify (FREE)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Connect your GitHub repository
5. Choose main branch and confirm
6. Your site will be deployed automatically
7. Custom domain can be added in Site Settings

### Option 3: Vercel (FREE)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your project
4. Deploy with one click
5. Get a live URL instantly

### Option 4: Traditional Web Hosting

1. Purchase hosting (GoDaddy, Bluehost, etc.)
2. Upload files via FTP/SFTP
3. Set your domain to point to the hosting
4. Your site will be live on your custom domain

---

## 🔧 Advanced Customization

### Add Smooth Scroll Behavior
Already implemented! Check `js/script.js` for scroll configuration.

### Add Form Backend

The contact form currently shows a success message locally. To make it functional:

1. **Option A: Formspree**
   - Go to [formspree.io](https://formspree.io)
   - Create an account and set up your form
   - Update the form action in `index.html`

2. **Option B: EmailJS**
   - Sign up at [emailjs.com](https://emailjs.com)
   - Add EmailJS script to HTML
   - Configure email service

### Add Analytics

Add Google Analytics to track visitors:
1. Go to [google.com/analytics](https://google.com/analytics)
2. Create a property for your website
3. Add the tracking code to `index.html` (in `<head>`)

---

## 📱 Testing

### Browser Compatibility Testing
- Test on Chrome, Firefox, Safari, and Edge
- Use mobile emulation (F12) to test responsive design
- Check tablet view (768px) and mobile view (480px)

### Performance Testing
1. Use Google PageSpeed Insights
2. Check image optimization
3. Monitor CSS and JS file sizes

### Accessibility Testing
- Use accessibility checkers (WAVE, AXE DevTools)
- Ensure keyboard navigation works
- Test with screen readers

---

## 🐛 Troubleshooting

### Issue: Styles not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check file paths in `index.html`
- Ensure CSS file is in `css/style.css`

### Issue: JavaScript not working
- Open browser console (F12)
- Check for errors
- Ensure `script.js` is linked correctly

### Issue: Images not showing
- Verify image paths in HTML
- Check image file formats
- Use `assets/images/` folder path

### Issue: Contact form not working
- Check browser console for errors
- Verify form field names
- Consider using Formspree or EmailJS

---

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org) - HTML/CSS/JS Reference
- [CSS Tricks](https://css-tricks.com) - Advanced CSS Tips
- [GitHub Pages Docs](https://pages.github.com) - Static site hosting
- [Netlify Docs](https://docs.netlify.com) - Deployment platform

---

## 💡 Tips for Success

1. **Keep it Updated** - Regularly update your projects and achievements
2. **Use High-Quality Images** - Professional photos make a big difference
3. **Mobile First** - Always test on mobile devices
4. **SEO Optimization** - Add meta descriptions and keywords
5. **Backup Regularly** - Keep backups of your portfolio
6. **Get Feedback** - Ask friends/mentors for improvements

---

## 📞 Support

If you encounter issues:
1. Check the [README.md](README.md) for specifications
2. Review browser console for error messages
3. Test in a different browser
4. Clear cache and reload
5. Check file permissions

---

**Happy building! 🚀**

Last Updated: 2026-06-23
