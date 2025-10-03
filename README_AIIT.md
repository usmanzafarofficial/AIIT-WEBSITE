# AIIT Website - AI Institute of Technology

A cutting-edge, interactive website for the AI Institute of Technology (AIIT) featuring rich animations, 3D models, AI-based robots, and immersive visual experiences.

## 🚀 Features

- **3D Graphics & Animations**: Interactive 3D models using Three.js and React Three Fiber
- **AI Robot Gallery**: Showcase of different AI robots with detailed specifications
- **Particle Systems**: Dynamic particle effects and floating animations
- **Responsive Design**: Optimized for all device sizes
- **Performance Monitoring**: Real-time FPS tracking and optimization
- **Custom Animations**: Smooth transitions and micro-interactions
- **Modern UI/UX**: Futuristic design with AI-themed color palette

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Heroicons
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aiit-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🎨 Custom Styling

The website uses a custom AI-themed color palette:

- **Primary Blue**: `#0066ff` (ai-blue)
- **Cyan Accent**: `#00d4ff` (ai-cyan)
- **Purple Accent**: `#6f42c1` (ai-purple)
- **Dark Background**: `#0a0a0a` (ai-dark)
- **Gray Elements**: `#1a1a1a` (ai-gray)

Custom fonts:
- **Space Grotesk**: Primary headings and UI text
- **JetBrains Mono**: Code and technical specifications

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedBackground.tsx
│   ├── CustomCursor.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── AIFeatures.tsx
│   ├── RobotGallery.tsx
│   └── PerformanceMonitor.tsx
├── pages/              # Route-based page components
│   ├── Home.tsx
│   ├── Features.tsx
│   ├── Robots.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎮 Interactive Features

### 3D Robot Gallery
- Interactive 3D robot models
- Detailed specifications for each robot
- Smooth model transitions and animations

### Particle Systems
- Floating background particles
- Interactive particle effects
- Performance-optimized rendering

### Custom Cursor
- Magnetic cursor effects
- Context-aware cursor states
- Smooth following animations

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode with hot reload.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production with optimizations.

### `npm run eject`
Ejects from Create React App (irreversible).

## 🌐 Deployment

The website can be deployed to any static hosting service:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service.

Popular deployment options:
- **Netlify**: Automatic deployments from Git
- **Vercel**: Zero-config deployments
- **GitHub Pages**: Free hosting for GitHub repositories
- **AWS S3**: Scalable cloud hosting

## 🚀 Performance Optimization

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Asset Optimization**: Compressed images and optimized bundles
- **Performance Monitoring**: Real-time FPS and performance metrics

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

*Note: 3D features require WebGL support*

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎨 Credits

- **Design**: Custom AI-themed design system
- **3D Models**: Created with Three.js and React Three Fiber
- **Animations**: Framer Motion library
- **Icons**: Heroicons library

---

**AIIT - AI Institute of Technology**  
*Advancing the Future of Artificial Intelligence*