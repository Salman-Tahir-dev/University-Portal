import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Icon */}
        <div className="mb-6 flex justify-center">
          <div className="bg-red-100 p-6 rounded-full">
            <AlertCircle className="w-16 h-16 text-red-600" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-slate-900 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link href="/">
            <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center gap-2 py-2 h-auto">
              <Home className="w-4 h-4" />
              Go to Home
            </Button>
          </Link>
          <Link href="/courses">
            <Button variant="outline" className="w-full border-slate-300 flex items-center justify-center gap-2 py-2 h-auto">
              <ArrowLeft className="w-4 h-4" />
              Browse Courses
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-900 mb-3">Need Help?</h3>
          <div className="space-y-2 text-sm">
            <Link href="/">
              <span className="text-blue-700 hover:text-blue-800 cursor-pointer">
                • Return to Home
              </span>
            </Link>
            <Link href="/about">
              <span className="text-blue-700 hover:text-blue-800 cursor-pointer">
                • Learn About Us
              </span>
            </Link>
            <Link href="/courses">
              <span className="text-blue-700 hover:text-blue-800 cursor-pointer">
                • View All Courses
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
