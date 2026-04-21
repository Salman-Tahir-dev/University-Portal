import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <BookOpen className="w-12 h-12 text-blue-700" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Welcome to UniPortal
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Your gateway to academic excellence. Explore courses, access personalized learning resources, and manage your academic journey all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/courses">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-2 px-6 py-2 h-auto">
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="px-6 py-2 h-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Why Choose UniPortal?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Comprehensive Courses
              </h3>
              <p className="text-slate-600">
                Browse a wide range of courses taught by expert instructors across various disciplines.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Expert Instructors
              </h3>
              <p className="text-slate-600">
                Learn from experienced faculty members dedicated to your academic success.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Personalized Dashboard
              </h3>
              <p className="text-slate-600">
                Track your progress and access your enrolled courses from a personalized dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-slate-600 mb-6">
          Sign in to access your personalized dashboard and enrolled courses.
        </p>
        <Link href="/login">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2 h-auto">
            Sign In Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
