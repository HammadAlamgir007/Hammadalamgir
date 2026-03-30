# 🚀 Futuristic Portfolio - Muhammad Hammad Alamgir

A cutting-edge, cyberpunk-themed portfolio showcasing full-stack development expertise with stunning visual effects and modern UI/UX design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0080?style=for-the-badge&logo=framer)
![.NET Core](https://img.shields.io/badge/.NET_Core-latest-512BD4?style=for-the-badge&logo=dotnet)

## ✨ Features

### 🎨 **Visual Effects & Animations**

#### 1. **Cyberpunk Aurora Background**
- Animated radial gradients in pink, blue, and purple
- Moving aurora effects (20s animation cycle)
- Pulsing overlay with depth
- Cyber grid pattern overlay

#### 2. **Starfield Universe Background**
- 100+ falling stars with random trajectories
- 50 twinkling static stars
- Periodic shooting stars
- Animated nebula clouds
- Creates immersive space atmosphere

#### 3. **Glassmorphism UI**
- Frosted glass effects with 20px blur
- Semi-transparent backgrounds
- Neon borders (pink, blue, purple variants)
- Inset lighting effects
- Modern, premium look

#### 4. **Neumorphism (Soft 3D)**
- Soft inner/outer shadows
- Hologram-like depth
- Interactive button states
- Applied to skill cards
- Futuristic tactile feel

#### 5. **Parallax Scroll Animations**
- Multi-layer depth effects
- Background moves slower than content
- Smooth scroll-based animations
- Floating elements
- Dynamic reveals

### 🎯 **Interactive Elements**

- **Smooth Scrolling** - Seamless navigation between sections
- **Hover Effects** - Cards lift and glow on hover
- **Animated Progress Bars** - Skill levels with shimmer effects
- **Responsive Design** - Perfect on all devices
- **Dark/Light Mode** - Theme toggle with smooth transitions

### 📱 **Sections**

1. **Hero Section**
   - Animated profile with floating effect
   - Pulsing rings around profile image
   - Staggered text animations
   - Call-to-action buttons with hover effects

2. **About Me**
   - Professional introduction
   - Full-stack development focus
   - Experience highlights

3. **Why Hire Me**
   - Full-Stack Adaptability
   - Database Driven
   - Problem Solving
   - Continuous Learning

4. **Services**
   - Web Application Development
   - Database Design & Optimization
   - REST API Development

5. **Technical Arsenal**
   - **Languages**: C#, JavaScript, Python, SQL, HTML/CSS
   - **Frameworks**: ASP.NET Core MVC, Entity Framework, React, Next.js, Express.js, Flutter
   - **Databases**: Microsoft SQL Server, MySQL, MongoDB
   - **Tools & Cloud**: Visual Studio, VS Code, Git/GitHub, AWS, ClickUp, ODOO
   - **Core Concepts**: OOP, MVC Architecture, REST APIs, Stored Procedures

6. **Projects**
   - Fusionner PDF (PDF Merging Tool)
   - Rahila Labs (Professional Home Diagnostic Testing)
   - Movie Recommendation System (Machine Learning)
   - Detailed tech stacks and links

7. **Contact Form**
   - Direct messaging
   - Social media links
   - Professional contact information

## 🎨 **Design System**

### **Color Palette**

#### Cyberpunk Neon Colors:
```css
--neon-pink: rgba(236, 72, 153, 1);    /* #EC4899 */
--neon-blue: rgba(59, 130, 246, 1);    /* #3B82F6 */
--neon-purple: rgba(168, 85, 247, 1);  /* #A855F7 */
--neon-cyan: #00FFFF;
```

#### Neumorphism Base:
```css
--neo-bg: #1c1c1c;
--neo-light-shadow: #2a2a2a;
--neo-dark-shadow: #0e0e0e;
```

#### Almond Theme (Light Mode):
```css
--almond-50: #F5F1E8;   /* Lightest */
--almond-100: #E8DCC8;  /* Light backgrounds */
--almond-200: #D4C5A9;  /* Section backgrounds */
--almond-300: #C0AE8A;  /* Borders */
--almond-900: #201A10;  /* Darkest */
```

### **Typography**
- **Font Family**: Outfit (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Gradient Text**: Animated color shifts
- **Glow Effects**: Neon text shadows

### **Animations**

#### Aurora Effects:
- `aurora-move`: 20s rotating gradient
- `aurora-pulse`: 15s opacity/scale pulse
- `cyber-grid`: 20s moving grid pattern

#### Micro-interactions:
- `hover-scale`: Scale up on hover
- `hover-lift`: Lift with shadow
- `shimmer`: Sliding shine effect
- `icon-spin`: 360° rotation

## 🛠️ **Tech Stack**

### **Frontend**
- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Advanced animations
- **React Router** - Navigation
- **React Scroll** - Smooth scrolling
- **FontAwesome** - Icon library

### **Build Tools**
- **Vite/Create React App** - Build tool
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

### **Deployment**
- **Vercel / AWS** - Hosting platforms
- **Git** - Version control
- **GitHub** - Repository hosting

## 📦 **Project Structure**

```
Protofolio/
├── public/
│   ├── favicon.png          # Custom profile favicon
│   └── index.html           # HTML template
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── profile.png  # Profile image
│   ├── components/
│   │   ├── AnimatedBackground.jsx    # Aurora background
│   │   ├── Card.jsx                  # Reusable card component
│   │   ├── ContactForm.jsx           # Contact section
│   │   ├── Footer.jsx                # Footer component
│   │   ├── Loading.jsx               # Loading animation
│   │   ├── Navbar.jsx                # Navigation bar
│   │   ├── ParallaxEffects.jsx       # Parallax utilities
│   │   ├── Services.jsx              # Services section
│   │   ├── Skills.jsx                # Skills with categories
│   │   ├── SkillsCarousel.jsx        # 3D carousel (optional)
│   │   └── Starfield.jsx             # Universe background
│   ├── pages/
│   │   ├── About_me.jsx              # About section
│   │   ├── Home.jsx                  # Hero section
│   │   ├── projects.jsx              # Projects showcase
│   │   └── WhyHireMe.jsx             # Value propositions
│   ├── App.js                        # Main app component
│   ├── index.css                     # Global styles & effects
│   └── index.js                      # Entry point
├── tailwind.config.js                # Tailwind configuration
├── package.json                      # Dependencies
└── README.md                         # This file
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/HammadAlamgir007/Hammadalamgir.git
cd Hammadalamgir
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

### **Environment Setup**

No environment variables required for basic setup. The portfolio runs entirely on the frontend. (For contact form functionality, ensure `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REDIRECT_URI`, and `GOOGLE_REFRESH_TOKEN` are appropriately configured).

## 🎨 **Customization Guide**

### **Update Personal Information**

1. **Profile Image**
   - Replace `src/assets/images/profile.png`
   - Update `public/favicon.png` for browser tab icon

2. **Personal Details**
   - Edit `src/pages/Home.jsx` for hero section
   - Update `src/pages/About_me.jsx` for bio
   - Modify `src/components/ContactForm.jsx` for contact info

3. **Skills**
   - Edit `src/components/Skills.jsx`
   - Update skill categories and levels
   - Add/remove technologies

4. **Projects**
   - Modify `src/pages/projects.jsx`
   - Add project cards with details
   - Update GitHub/demo links

5. **Services**
   - Edit `src/components/Services.jsx`
   - Customize service offerings

### **Theme Customization**

1. **Colors**
   - Edit `tailwind.config.js` for color palette
   - Modify `src/index.css` for effect colors

2. **Animations**
   - Adjust animation speeds in `src/index.css`
   - Modify Framer Motion variants in components

3. **Effects**
   - Toggle starfield in `src/App.js`
   - Adjust aurora intensity in `src/index.css`
   - Customize glassmorphism blur levels

## 📱 **Responsive Design**

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Two column grid
- **Desktop**: > 1024px - Three column grid
- **Large Desktop**: > 1440px - Optimized spacing

## 🎯 **Performance Optimizations**

- **Lazy Loading** - Components load on demand
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Compressed assets
- **CSS Purging** - Unused styles removed
- **Animation Performance** - GPU-accelerated transforms
- **will-change** - Optimized for smooth animations

## 🌐 **Browser Support**

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👤 **Author**

**Muhammad Hammad Alamgir**
- GitHub: [github.com/ihammadalamgir](https://github.com/ihammadalamgir)
- LinkedIn: [Hammad Alamgir](https://linkedin.com/in/ihammadalamgir)
- Email: hammadalamgir778@gmail.com

## 🙏 **Acknowledgments**

- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling framework
- **FontAwesome** - Icon library
- **Google Fonts** - Outfit font family
- **React Community** - Inspiration and resources

---

<div align="center">

**Built with ❤️ and ☕ by Muhammad Hammad Alamgir**

⭐ Star this repo if you find it helpful!

</div>
