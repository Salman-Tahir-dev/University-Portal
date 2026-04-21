import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, AlertCircle } from "lucide-react";

export default function Login() {
  const [studentName, setStudentName] = useState("");
  const [error, setError] = useState("");
  const { login, isLoggedIn } = useAuth();
  const [, setLocation] = useLocation();

  // Redirect if already logged in
  if (isLoggedIn) {
    setLocation("/dashboard");
    return null;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!studentName.trim()) {
      setError("Please enter your name");
      return;
    }

    // Simulate login
    login(studentName);
    setLocation("/dashboard");
  };

  const handleQuickLogin = (name: string) => {
    login(name);
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Student Login</h1>
            <p className="text-slate-600 mt-2">
              Sign in to access your personalized dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mb-6">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 h-auto"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-600">Or try as</span>
            </div>
          </div>

          {/* Quick Login Options */}
          <div className="space-y-2">
            <Button
              onClick={() => handleQuickLogin("Ahmed Hassan")}
              variant="outline"
              className="w-full border-slate-300 text-slate-900 hover:bg-slate-50"
            >
              Demo: Ahmed Hassan
            </Button>
            <Button
              onClick={() => handleQuickLogin("Fatima Al-Rashid")}
              variant="outline"
              className="w-full border-slate-300 text-slate-900 hover:bg-slate-50"
            >
              Demo: Fatima Al-Rashid
            </Button>
            <Button
              onClick={() => handleQuickLogin("Sara Khan")}
              variant="outline"
              className="w-full border-slate-300 text-slate-900 hover:bg-slate-50"
            >
              Demo: Sara Khan
            </Button>
          </div>

          {/* Info Message */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Demo Mode:</span> This is a simulated login. Enter any name or use the demo options above to access your dashboard.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-600 text-sm mt-6">
          This is a demonstration of the University Portal SPA
        </p>
      </div>
    </div>
  );
}
