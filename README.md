# 🎓 UniPortal — University Course Portal

A modern, responsive university course management portal built with React, TypeScript, and Vite. Students can browse courses, view course details, log in to their accounts, and track their academic progress from a personalized dashboard.

---


## 📸 Screenshots

| Home | Courses | Dashboard |
|------|---------|-----------|
| Hero section with CTA | Course catalog grid | Enrolled courses + stats |

---

## ✨ Features

- 🏠 **Home Page** — Hero section with feature highlights and call-to-action
- 📚 **Course Catalog** — Browse all available courses with instructor info and enrollment numbers
- 🔍 **Course Detail** — Individual course pages with full descriptions
- 🔐 **Authentication** — Login system with protected routes and persistent session via localStorage
- 📊 **Student Dashboard** — Personalized view showing enrolled courses, progress bars, stats (hours, certificates, avg progress), and quick actions
- 🌗 **Theme Support** — Light/dark mode via `next-themes`
- 📱 **Fully Responsive** — Mobile-friendly layout using Tailwind CSS
- 🗺️ **Map Integration** — Google Maps support via `Map.tsx` component
- ⚡ **Fast & Modern** — Powered by Vite 7 with React 19

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| UI Components | Radix UI + shadcn/ui |
| Routing | Wouter |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Charts | Recharts |
| Icons | Lucide React |
| Server | Express.js |

---

## 📁 Project Structure

```
university_portal/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── ui/              # Reusable shadcn/ui components
│       │   ├── Navbar.tsx       # Top navigation bar
│       │   ├── ProtectedRoute.tsx  # Auth guard for dashboard
│       │   ├── ErrorBoundary.tsx
│       │   └── Map.tsx          # Google Maps component
│       ├── contexts/
│       │   ├── AuthContext.tsx  # Login/logout state management
│       │   └── ThemeContext.tsx # Light/dark theme
│       ├── hooks/               # Custom React hooks
│       ├── pages/
│       │   ├── Home.tsx         # Landing page
│       │   ├── Courses.tsx      # Course catalog
│       │   ├── CourseDetail.tsx # Individual course page
│       │   ├── Dashboard.tsx    # Student dashboard
│       │   ├── Login.tsx        # Login page
│       │   └── NotFound.tsx     # 404 page
│       ├── App.tsx              # Root component + routing
│       └── main.tsx             # Entry point
├── server/
│   └── index.ts                 # Express server
├── shared/
│   └── const.ts                 # Shared constants
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/university-portal.git

# Navigate into the project
cd university-portal

# Install dependencies
npm install --legacy-peer-deps
# or
pnpm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔐 Demo Login

To access the student dashboard, log in with any name on the Login page. Authentication is handled client-side with localStorage persistence.

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production server |
| `npm run preview` | Preview production build |
| `npm run check` | TypeScript type checking |
| `npm run format` | Format code with Prettier |

---

## 🗺️ Pages & Routes

| Route | Page | Auth Required |
|-------|------|---------------|
| `/` | Home | ❌ |
| `/courses` | Course Catalog | ❌ |
| `/courses/:id` | Course Detail | ❌ |
| `/about` | About | ❌ |
| `/login` | Login | ❌ |
| `/dashboard` | Student Dashboard | ✅ |

---

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Click **Deploy**

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

Made with ❤️ by **Salman Tahir**

- GitHub: [@ySalman Tahir](https://github.com/Salman-Tahir-dev)

---

> ⭐ If you found this project helpful, please give it a star!
