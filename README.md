# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light theme toggle
- 📱 Mobile-friendly navigation
- 🎯 Interactive skill badges with Wikipedia links
- 📧 Contact form with validation
- ⚡ Fast loading and optimized performance

## Deployment Options

### Option 1: Deploy Static HTML (Recommended)

This option deploys your static HTML files directly without any build process.

1. **Rename the config file:**
   ```bash
   mv netlify-static.toml netlify.toml
   ```

2. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Set build command to: `echo "No build required"`
   - Set publish directory to: `.`
   - Deploy!

### Option 2: Deploy Vite React Build

This option builds your React project and deploys the optimized build.

1. **Use the existing `netlify.toml`** (already configured)

2. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

## Local Development

### For Static HTML:
```bash
# Serve with any static server
npx serve .
# or
python -m http.server 8000
```

### For Vite React:
```bash
npm install
npm run dev
```

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript file
├── me1.jpg            # Profile image
├── netlify.toml       # Netlify configuration
├── public/_redirects   # Redirect rules
└── src/               # React source files (if using Vite)
```

## Customization

- Update profile information in `index.html`
- Modify styles in `styles.css`
- Add new skills in the skills section
- Update project links and descriptions

## Performance Features

- Optimized images and assets
- Efficient CSS and JavaScript
- Proper caching headers
- Security headers configured
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available under the [MIT License](LICENSE). 