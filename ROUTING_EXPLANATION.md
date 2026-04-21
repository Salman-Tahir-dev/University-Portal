# University Portal SPA - Routing & Architecture Explanation

## Overview

The University Portal is a Single Page Application (SPA) built with React and Wouter, a lightweight routing library. The entire application runs in the browser without page reloads, providing a seamless user experience.

## How Routing Works in This App

### 1. **Routing Library: Wouter**

We use **Wouter** instead of React Router for its simplicity and lightweight nature. Wouter handles client-side routing, meaning all navigation happens in JavaScript without server requests.

**Key Features:**
- No page reloads on navigation
- URL updates in real-time
- Browser history management (back/forward buttons work)
- Dynamic route parameters with `useParams()`

### 2. **Route Structure**

All routes are defined in `client/src/App.tsx`:

```tsx
<Switch>
  <Route path={"/"} component={Home} />
  <Route path={"/about"} component={About} />
  <Route path={"/courses"} component={Courses} />
  <Route path={"/courses/:id"} component={CourseDetail} />
  <Route path={"/login"} component={Login} />
  <Route path={"/dashboard"} component={ProtectedRoute} />
  <Route path={"/404"} component={NotFound} />
  <Route component={NotFound} /> {/* Fallback for invalid routes */}
</Switch>
```

### 3. **Navigation Without Page Reloads**

We use Wouter's `<Link>` component and `useLocation()` hook instead of traditional `<a>` tags:

```tsx
// ✅ Correct - No page reload
import { Link } from "wouter";

<Link href="/courses">
  <Button>View Courses</Button>
</Link>

// ❌ Wrong - Causes page reload
<a href="/courses">View Courses</a>
```

### 4. **Dynamic Route Parameters**

The course detail page uses `useParams()` to extract the course ID from the URL:

```tsx
// File: client/src/pages/CourseDetail.tsx
import { useParams } from "wouter";

export default function CourseDetail() {
  const { id } = useParams(); // Extract :id from /courses/:id
  const course = coursesData.find(c => c.id === parseInt(id || "0"));
  
  return <div>{course?.name}</div>;
}
```

**Example:** When user clicks on a course, they navigate to `/courses/1`, and the component extracts `id=1` to fetch and display that specific course.

### 5. **Protected Routes (Authentication)**

The dashboard is protected - only logged-in users can access it. This is implemented with a `ProtectedRoute` wrapper component:

```tsx
// File: client/src/components/ProtectedRoute.tsx
export default function ProtectedRoute() {
  const { isLoggedIn } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      setLocation("/login"); // Redirect to login if not authenticated
    }
  }, [isLoggedIn, setLocation]);

  if (!isLoggedIn) return null;
  return <Dashboard />;
}
```

**Flow:**
1. User tries to access `/dashboard`
2. `ProtectedRoute` checks if `isLoggedIn` is true
3. If false → redirects to `/login`
4. If true → displays the Dashboard component

### 6. **Authentication System**

Authentication state is managed using React Context (`AuthContext`):

```tsx
// File: client/src/contexts/AuthContext.tsx
const { isLoggedIn, login, logout, studentName } = useAuth();

// Login stores state in localStorage
login(studentName); // Sets isLoggedIn=true, saves to localStorage

// Logout clears state
logout(); // Sets isLoggedIn=false, removes from localStorage
```

**Persistence:** Auth state is saved to `localStorage`, so users remain logged in even after closing the browser.

### 7. **Active Link Highlighting**

The navbar highlights the current page using conditional styling:

```tsx
// File: client/src/components/Navbar.tsx
const isActive = (path: string) => {
  if (path === "/" && location === "/") return true;
  if (path !== "/" && location.startsWith(path)) return true;
  return false;
};

<Link href="/courses">
  <span className={isActive("/courses") ? "text-blue-700 border-b-2 border-blue-700" : "text-slate-600"}>
    Courses
  </span>
</Link>
```

### 8. **404 Page Handling**

Invalid routes automatically display the 404 page using a fallback route:

```tsx
<Route path={"/404"} component={NotFound} />
<Route component={NotFound} /> {/* Catches all unmatched routes */}
```

When user navigates to `/invalid-route`, Wouter matches it against all routes, finds no match, and displays the `NotFound` component.

## User Flow Example

### Scenario: Student logs in and views a course

1. **User visits home page** (`/`)
   - Navbar shows: Home, About, Courses, Login
   - Home page displays welcome message and features

2. **User clicks "Explore Courses"**
   - Navigation to `/courses` (no page reload)
   - Navbar updates to highlight "Courses"
   - Courses page loads with 6 course cards

3. **User clicks "View Details" on Web Development course**
   - Navigation to `/courses/1` (dynamic route)
   - `useParams()` extracts `id=1`
   - Course detail page displays Web Development information

4. **User clicks "Login" in navbar**
   - Navigation to `/login`
   - Login form appears with demo options

5. **User clicks "Demo: Ahmed Hassan"**
   - `login("Ahmed Hassan")` is called
   - Auth state updates: `isLoggedIn=true`, `studentName="Ahmed Hassan"`
   - localStorage is updated
   - Automatic redirect to `/dashboard`

6. **Dashboard loads**
   - `ProtectedRoute` checks `isLoggedIn` (true)
   - Dashboard component renders
   - Navbar shows: Dashboard, Welcome message, Logout button

7. **User clicks "Logout"**
   - `logout()` is called
   - Auth state resets: `isLoggedIn=false`
   - localStorage is cleared
   - Redirect to `/login`

## Key Technologies

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework for building components |
| **Wouter** | Lightweight client-side routing library |
| **Context API** | State management for authentication |
| **localStorage** | Persistent storage for login state |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **shadcn/ui** | Pre-built accessible UI components |

## Files Structure

```
client/src/
├── App.tsx                 # Main router configuration
├── pages/
│   ├── Home.tsx           # Home page
│   ├── About.tsx          # About page
│   ├── Courses.tsx        # Courses list page
│   ├── CourseDetail.tsx   # Dynamic course detail page (uses useParams)
│   ├── Login.tsx          # Login page
│   ├── Dashboard.tsx      # Protected dashboard page
│   └── NotFound.tsx       # 404 page
├── components/
│   ├── Navbar.tsx         # Navigation bar with active link highlighting
│   └── ProtectedRoute.tsx # Protected route wrapper
├── contexts/
│   └── AuthContext.tsx    # Authentication state management
└── index.css              # Global styles
```

## Why No Page Reloads?

Traditional multi-page apps reload the entire page on navigation, which:
- Loses component state
- Causes flickering
- Feels slow

SPAs with client-side routing:
- Update only the necessary components
- Maintain smooth transitions
- Preserve state across navigation
- Provide instant feedback

## Summary

The University Portal demonstrates a complete SPA implementation with:
- ✅ Client-side routing (no page reloads)
- ✅ Dynamic route parameters (`/courses/:id`)
- ✅ Protected routes (authentication required)
- ✅ Active link highlighting
- ✅ 404 error handling
- ✅ Persistent authentication state
- ✅ Seamless user experience

All navigation happens in the browser using JavaScript, making the app feel fast and responsive.
