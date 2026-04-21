import { Link, useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut, BookOpen } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const { isLoggedIn, logout, studentName } = useAuth();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <BookOpen className="w-6 h-6 text-blue-700" />
            <span className="font-bold text-lg text-blue-700">UniPortal</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <span
              className={`transition-colors font-medium ${
                isActive("/")
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-slate-600 hover:text-blue-700"
              }`}
            >
              Home
            </span>
          </Link>

          <Link href="/about">
            <span
              className={`transition-colors font-medium ${
                isActive("/about")
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-slate-600 hover:text-blue-700"
              }`}
            >
              About
            </span>
          </Link>

          <Link href="/courses">
            <span
              className={`transition-colors font-medium ${
                isActive("/courses")
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-slate-600 hover:text-blue-700"
              }`}
            >
              Courses
            </span>
          </Link>

          {/* Auth Section */}
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <span className="text-slate-600 hover:text-blue-700 transition-colors font-medium">
                  Dashboard
                </span>
              </Link>
              <div className="text-sm text-slate-600">
                Welcome, <span className="font-semibold text-blue-700">{studentName}</span>
              </div>
              <Button
                onClick={logout}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
