# 🌟 Gundabathina Annie Priyanka - Professional Portfolio (Glassmorphism Edition)

Welcome! This repository contains the source code for a premium, interactive personal portfolio website designed with a cutting-edge **Glassmorphism UI** theme.

This file serves as the master specification document. It is optimized for **GitHub Copilot / Copilot Workspace** to understand the professional background, sequential section requirements, and precise style guidelines to accurately generate the code for this repository.

---

## 📋 Professional Profile

**Name:** Gundabathina Annie Priyanka  
**Location:** Machavaram, Ponnur, Andhra Pradesh 522315  
**Phone:** +91 8019966051  
**Email:** anniepriyanka03@gmail.com  
**LinkedIn:** linkedin.com/in/annie-priyanka-gundabathina  

**Professional Summary:**  
Motivated Computer Science (AI/ML) student with a strong foundation in software development, data structures, and machine learning. Proficient in Java, Python, and SQL with hands-on experience in building scalable applications and deploying AI models. Familiar with SDLC, Agile methodologies, and CI/CD practices. Strong problem-solving and analytical skills with effective communication, teamwork abilities, and adaptability in fast-paced environments.

---

## 🗺️ Navigation Bar Structure (One-by-One Order)

The website must feature a fixed top navigation bar layout that links smoothly to the following seven sections in this exact order:

1. **Personal Details** (Hero & Summary)
2. **Education**
3. **Technical Skills**
4. **Projects**
5. **Coding Platforms**
6. **Achievements**
7. **Contact**

---

## 📌 Section Specifications

### 1. Personal Details (Hero Section)
- **Hero Background:** Full-width gradient with glassmorphism overlay
- **Content:**
  - Large, bold name heading: "Gundabathina Annie Priyanka"
  - Dynamic subtitle: "AI/ML Engineer | Full-Stack Developer | Problem Solver"
  - Professional summary (2-3 lines)
  - Call-to-action buttons: "View My Work" (links to Projects) & "Get In Touch" (links to Contact)
  - Social links: LinkedIn, GitHub, Email
- **Visual Style:** Hero image/gradient background with semi-transparent glass panel overlay

### 2. Education
- **Card Layout:** Single glass panel with timeline styling
- **Institution:** Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada
- **Degree:** B.Tech in Computer Science and Engineering (AIML)
- **Duration:** Sep 2023 – Present
- **CGPA:** 9.1
- **Visual:** Glass card with institution icon and achievement badge

### 3. Technical Skills
- **Layout:** 4-column grid (responsive to 2 columns on tablet, 1 on mobile)
- **Skill Categories with Details:**
  - **Languages:** C, Python, Java
  - **Databases:** MySQL
  - **Web Technologies:** HTML, CSS, Bootstrap
  - **Frameworks & Tools:** TensorFlow, Keras, OpenCV, Git
  - **Cloud & Platforms:** Google Earth Engine
  - **Technologies:** Machine Learning, NLP, Computer Vision
  - **Concepts:** SDLC, Agile, CI/CD, Application Resiliency, Debugging & Testing
  - **Software Engineering:** OOP, System Design Basics, Debugging, Code Optimization
- **Styling:** Each skill in a glassmorphic badge/chip with hover animation
- **Interactive:** Hover effect with slightly increased opacity and upward translation

### 4. Projects
- **Layout:** 3-column grid (responsive to 2 on tablet, 1 on mobile)
- **Project Cards:** Each with glassmorphism styling
- **Projects to Display:**

#### Project 1: CNN-Based Land Cover Classification using EuroSAT
- **Technologies:** Python, TensorFlow, Keras, Google Earth Engine
- **Highlights:**
  - Designed and developed a scalable image classification system using CNN architecture
  - Applied preprocessing, augmentation, batch normalization, and dropout for improved performance
  - Integrated with Google Earth Engine to classify Sentinel-2 imagery around Vijayawada
  - **Achievement:** 92% validation accuracy and performed vegetation area estimation
- **Visual:** Icon for computer vision/satellite imagery

#### Project 2: FIRAssist: BNS Section Prediction using NLP
- **Technologies:** Python, RoBERTa, NLP, Machine Learning
- **Highlights:**
  - Designed and implemented a scalable AI-based system for legal text classification
  - Implemented multi-label classification to handle overlapping legal sections
  - Evaluated performance using precision, recall, and F1-score
  - Built a web interface with text/voice input, confidence scores, and history tracking
- **Visual:** Icon for NLP/legal technology

#### Project 3: Quantum Path Optimiser
- **Technologies:** Quantum Algorithms, Qiskit, Python
- **Highlights:**
  - Developed a quantum-inspired model for shortest-path optimization
  - Used Qiskit simulations to compare quantum and classical performance
  - Demonstrated potential of quantum computing in logistics
  - Followed Agile-based development practices and version control using Git
- **Visual:** Icon for quantum computing/optimization

- **Card Features:** 
  - Project title with technology badges
  - Brief description (2-3 lines)
  - Key achievements highlighted
  - "View More" link/button for each project

### 5. Coding Platforms
- **Layout:** Achievement showcase in a horizontal scroll or card grid
- **Platforms to Feature:**
  - **GeeksforGeeks & LeetCode:** 300+ DSA problems solved
  - Display achievement badge with counter
  - Link to profiles if available

### 6. Achievements & Certifications
- **Two Subsections:**

**Certifications:**
- C, Python, Cyber Security, Linux (Cisco)
- Java Fundamentals (Infosys)
- Social Networks, Privacy and Security in OSM (NPTEL)
- Display as badge/ribbon elements in a grid

**Workshops & Hackathons:**
- AI Workshop (Be10x)
- Flutter Workshop (GDG)
- NIT AP Hackathon
- Amaravati Quantum Valley Hackathon (VRSEC)
- Extracurricular: NSS Volunteer, RapidML Event Organizer

- **Layout:** Two-column layout on desktop, single column on mobile
- **Styling:** Each item in a subtle glass panel with icon

### 7. Contact Section
- **Layout:** Centered contact information with contact form (optional)
- **Contact Details:**
  - Email: anniepriyanka03@gmail.com
  - Phone: +91 8019966051
  - LinkedIn: linkedin.com/in/annie-priyanka-gundabathina
- **Form Fields (if included):**
  - Name
  - Email
  - Subject
  - Message
  - Submit button (glass-styled)
- **Social Media Links:** GitHub, LinkedIn, Email, Resume Download

---

## 🎨 Theme Specification: Glassmorphism UI

To achieve a true modern frosted-glass visual architecture, all layout surfaces (navigation bars, feature/skill cards, timeline blocks, and form containers) must implement specific translucent blending configurations over a vibrant background.

### Master CSS Blueprint for Copilot Generation

When generating or editing styles in `css/style.css`, use the following definitions as your foundational layout rules:

```css
:root {
    /* Vivid, deep gradient variables to maximize glass visibility */
    --bg-gradient-start: #0f172a; /* Dark slate */
    --bg-gradient-end: #1e1b4b;   /* Deep indigo accent */
    
    /* Pure Glass Structural Tones */
    --glass-bg: rgba(255, 255, 255, 0.06);
    --glass-border: rgba(255, 255, 255, 0.12);
    --glass-highlight: rgba(255, 255, 255, 0.2);
    --glass-shadow: rgba(0, 0, 0, 0.35);
    
    /* Typography & Accents */
    --text-primary: #f8fafc;
    --text-muted: #cbd5e1;
    --accent-color: #38bdf8;       /* Electric sky blue */
    --accent-success: #34d399;     /* Emerald green for badges */
}

/* Base body layout setup */
body {
    background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
    background-attachment: fixed;
    color: var(--text-primary);
    min-height: 100vh;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* Core Glass Card Utility */
.glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(16px) saturate(120%);
    -webkit-backdrop-filter: blur(16px) saturate(120%);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 var(--glass-shadow);
    color: var(--text-primary);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Interactive hover-state variant */
.glass-panel-interactive:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--glass-highlight);
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5);
    transform: translateY(-4px);
}

/* Navigation Bar Styling */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--glass-border);
    padding: 1rem 2rem;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

nav a:hover {
    color: var(--accent-color);
}

/* Section spacing */
section {
    padding: 4rem 2rem;
    margin-top: 6rem;
}

/* Heading styles */
h1, h2, h3 {
    color: var(--text-primary);
    font-weight: 700;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
}

/* Badge/Chip styling for skills and technologies */
.badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(56, 189, 248, 0.2);
    border: 1px solid var(--accent-color);
    border-radius: 20px;
    color: var(--accent-color);
    font-size: 0.875rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    transition: all 0.3s ease;
}

.badge:hover {
    background: rgba(56, 189, 248, 0.4);
    transform: scale(1.05);
}

/* Grid layouts */
.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

@media (max-width: 768px) {
    .grid-3 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .grid-3 {
        grid-template-columns: 1fr;
    }
}

/* Button styling */
button, .btn {
    padding: 0.75rem 1.5rem;
    background: var(--accent-color);
    color: #0f172a;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

button:hover, .btn:hover {
    background: #38bdf8;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.4);
}
```

---

## 📁 Project Structure

```
portfolio1/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Glassmorphism theme styles
├── js/
│   └── script.js          # Navigation and interactivity
├── assets/
│   ├── images/            # Portfolio images and icons
│   └── resume.pdf         # Downloadable resume
├── README.md              # This file
└── .gitignore
```

---

## 🚀 Key Features

✨ **Glassmorphism Design:** Premium frosted-glass UI with modern aesthetics  
🎨 **Responsive Layout:** Fully responsive across all device sizes  
🔗 **Smooth Navigation:** Fixed navbar with smooth scroll to sections  
⚡ **Interactive Elements:** Hover effects and smooth transitions throughout  
📱 **Mobile Optimized:** Touch-friendly navigation and layouts  
🎯 **SEO Friendly:** Semantic HTML structure  

---

## 🛠️ Technologies Used

- **HTML5:** Semantic markup
- **CSS3:** Glassmorphism effects, gradients, animations
- **JavaScript:** Smooth scrolling, navigation interaction
- **Responsive Design:** Mobile-first approach with media queries

---

## 📝 Notes for Implementation

1. **Color Consistency:** All sections must use the CSS variables defined in `:root`
2. **Glassmorphism Integrity:** Every interactive element should use the `.glass-panel` or `.glass-panel-interactive` classes
3. **Responsive Breakpoints:** 
   - Desktop: 1024px and above
   - Tablet: 768px to 1023px
   - Mobile: Below 768px
4. **Accessibility:** Include proper ARIA labels and semantic HTML
5. **Performance:** Optimize images and use CSS transforms for animations

---

## 📞 Contact

For any inquiries or opportunities:
- **Email:** anniepriyanka03@gmail.com
- **Phone:** +91 8019966051
- **LinkedIn:** linkedin.com/in/annie-priyanka-gundabathina

---

**Last Updated:** 2026-06-23  
**Version:** 1.0 - Specification Document
