# AgenticFlow - Smart Engineering Automation

🤖 A modern single-page website selling agentic workflows for smart automation of engineering problems.

## 🚀 Features

- **Modern Design**: Beautiful, responsive single-page application
- **Animated Sections**: Each section has unique entrance animations
- **Agentic Workflows**: Comprehensive list of pre-built automation workflows
- **AI Agents Portfolio**: Specialized agents for different engineering domains
- **Flexible Pricing**: Plans for teams of all sizes
- **Container Ready**: Full Docker support for easy deployment
- **Performance Optimized**: Fast loading with modern web technologies

## 🏗️ Architecture

### Frontend
- Pure HTML5, CSS3, and Vanilla JavaScript
- No framework dependencies for maximum performance
- Responsive design with mobile-first approach
- CSS Grid and Flexbox for modern layouts
- Font Awesome icons and Google Fonts

### Sections
1. **Hero Section** - Eye-catching introduction with animated workflow diagram
2. **Features Section** - Key benefits and capabilities
3. **Workflows Section** - Available automation workflows with pricing
4. **Agents Section** - AI agents portfolio with specializations
5. **Pricing Section** - Flexible pricing plans
6. **Contact Section** - Contact form and information

## 🐳 Docker Deployment

### Quick Start

```bash
# Clone the repository
git clone https://github.com/xyphanajay/agentic-workflows.git
cd agentic-workflows

# Build and run with Docker Compose
docker-compose up -d

# Access the website
open http://localhost:8080
```

### Manual Docker Build

```bash
# Build the image
docker build -t agentic-workflows .

# Run the container
docker run -d -p 8080:80 --name agentic-workflows-app agentic-workflows
```

### Production Deployment

For production deployment, you can:

1. **Use Docker Swarm**:
```bash
docker service create \
  --name agentic-workflows \
  --publish 80:80 \
  --replicas 3 \
  agentic-workflows
```

2. **Use Kubernetes**:
```bash
# Create deployment
kubectl create deployment agentic-workflows --image=agentic-workflows

# Expose service
kubectl expose deployment agentic-workflows --type=LoadBalancer --port=80
```

3. **Use Cloud Platforms**:
   - **AWS**: Deploy to ECS, EKS, or Elastic Beanstalk
   - **Google Cloud**: Deploy to Cloud Run, GKE, or App Engine
   - **Azure**: Deploy to Container Instances, AKS, or App Service

## 🔧 Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/xyphanajay/agentic-workflows.git
cd agentic-workflows

# Serve locally (using Python)
python -m http.server 8000

# Or using Node.js
npx serve .

# Or using any static file server
```

### Project Structure

```
agentic-workflows/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose setup
└── README.md          # This file
```

## 🎨 Customization

### Colors and Branding
Update the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #f59e0b;
  --text-color: #1f2937;
}
```

### Content Updates
- Modify `index.html` for content changes
- Update workflows and agents in their respective sections
- Customize pricing plans and features

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add animations and interactions in `script.js`
4. Update navigation links

## 🚀 Performance Features

- **Optimized Images**: Lazy loading and modern formats
- **Minification**: CSS and JS optimization
- **Caching**: Browser caching strategies
- **Compression**: Gzip compression enabled
- **CDN Ready**: Static assets optimized for CDN delivery

## 🔒 Security Features

- **Security Headers**: XSS protection, content type options
- **HTTPS Ready**: SSL/TLS configuration support
- **Input Validation**: Form input sanitization
- **CSP Ready**: Content Security Policy headers

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect display on tablets
- **Desktop Enhanced**: Rich experience on larger screens
- **Touch Friendly**: Optimized for touch interactions

## 🔧 Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 SEO Optimized

- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags
- Structured data ready
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Nginx for web serving
- Docker for containerization

## 📞 Support

For support, email hello@agenticflow.com or create an issue in this repository.

---

**Built with ❤️ for the future of engineering automation**