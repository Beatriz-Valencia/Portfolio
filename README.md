# 🌐 Beatriz Conchado Portfolio

### ✨ A modern and minimal personal portfolio built with React & Vite

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

---

## 🪞 Overview

This is my **personal portfolio website**, designed and developed to showcase my professional background, selected projects, and contact information.

It combines **frontend architecture**, **component-driven design**, and **responsive layouts**, all powered by **React** and **Vite**.

## 💡 Features

- 🎨 **Responsive Design** – Adapts to all screen sizes  
- ⚡ **Fast Builds** – Thanks to Vite’s optimized bundler  
- 💬 **Animated Text** – Effects using `TextType`  
- 🗂️ **Project Grid & Detail Pages** – Auto-rendered from a data source  
- 📨 **Contact Form** – Email-based direct messaging  
- 🧭 **Navigation Bar** – SPA navigation using React Router  
- 🧩 **Global Context** – `ProjectReducer` pattern for project state  


---

## ⚙️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React, Vite, JavaScript (ES6+), CSS3 |
| **Animations** | ReactBits TextType |
| **Routing** | React Router DOM |
| **State Management** | React Context + Reducer |
| **UI/UX** | Responsive Grid Design, Flexbox, CSS Variables |
| **Build & Deploy** | Vite + Vercel |
| **Version Control** | Git & GitHub |

---

## 🧠 Architecture

```text
src/
├── components/
│   ├── Button/
│   ├── Header/
│   ├── Input/
│   ├── Projects/
│   │   ├── ProjectCard.jsx
│   │   └── ProjectDetail.jsx
│   └── TextAnimations/
│       └── TextType/
├── context/
│   └── ProjectContext/
│       ├── ProjectReducer.js
│       └── ProjectState.jsx
├── pages/
│   ├── Home.jsx
│   ├── Profile.jsx
│   ├── Projects.jsx
│   └── Connect.jsx
├── assets/
│   └── images & media
├── App.jsx
└── main.jsx
```

The app uses **React Router** for dynamic routing and a global **ProjectProvider** for centralized state management.

---


## 🚀 Installation & Setup

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/Beatriz-Valencia/Portfolio.git

# Move into the folder
cd <Portfolio>

# Install dependencies
npm install

# Dependencies runtime
npm i react react-dom react-router-dom react-icons gsap

# Run the development server
npm run dev
```
Then visit http://localhost:5173/
 in your browser. 

## 🧩 Component Reusability 

Each component handles one clear responsibility and can be easily reused across the app.

### 1. Button (components/Button)

Props: type, label, onClick, className, disabled

👍 Reusable and simple.

### 2. Input (components/Input)

Props: name, label, type, required, value, onChange, placeholder

👍 Encapsulates label, input, and styling in a consistent component.

### 3. ProjectCard (components/Projects/ProjectCard)

👍 Clickable card with image and title.

### 4. ProjectDetail

👍 Dynamic rendering by id, showing images, videos, and technology icons using react-icons.



## 🌐 Live Demo

🔗 Visit the live site: https://beatrizconchadopeiro.com

## 🧩 Context Management

This project uses React Context API combined with a Reducer pattern to handle state globally and efficiently.

### Structure:

-ProjectState.jsx → Initializes the context provider and dispatches actions

-ProjectReducer.js → Defines logic for state transitions (GET_PROJECTS)

-ProjectContext → Provides global state access to all components like Projects and ProjectDetail

This approach centralizes data flow, avoids prop drilling, and keeps the code modular — ideal for scaling future features.


## 🧭 Navigation Flow
#### -Route "/" or "/home": Landing page with animated introduction (TextType effect)
#### -Route "/projects": Displays a responsive grid of all projects
#### -Route "/project/:id": Dynamic project detail page with video, images, and tech stack
#### -Route "/profile": Professional background and career overview
#### -Route "/connect": Contact form connected to default mail client


## 🖥️ UI & Design Highlights

🧱 Grid & Flexbox Layouts for responsiveness

🎨 CSS Variables for theming (--white, --black, --blue, --brown)

✨ Fluid typography using clamp() for scalable text sizes

💫 Animations for smooth, subtle transitions

🧭 Accessible navigation bar with consistent UX

📱 Mobile-first design, optimized for all breakpoints


## ⚡ Performance & Accessibility

⚙️ Vite for lightning-fast builds and instant HMR

🧩 Code-splitting via React Router to optimize page load

🔍 Semantic HTML & ARIA attributes for accessibility

📏 Responsive units (vw, svh, clamp) for precise control

✅ Lightweight dependency footprint and modular imports

## 🧑‍💻 Author

#### Beatriz Conchado Peiró
#### Full Stack Developer | IT Project Manager

🌍 Portfolio: https://beatrizconchadopeiro.com

💼 LinkedIn: https://www.linkedin.com/in/beatriz-conchado-peiro-a0276880/

---
⭐️ If you like this project, consider give it a star on GitHub — it really helps and means a lot 🌟 Thanks for reading!