import { useAuth } from "@/contexts/AuthContext";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";

const enrolledCourses = [
  {
    id: 1,
    name: "Web Development",
    instructor: "Ali",
    progress: 65,
    nextClass: "Tomorrow at 10:00 AM",
  },
  {
    id: 3,
    name: "Mobile App Development",
    instructor: "Ahmed",
    progress: 42,
    nextClass: "Wednesday at 1:00 PM",
  },
  {
    id: 5,
    name: "Artificial Intelligence",
    instructor: "Hassan",
    progress: 28,
    nextClass: "Thursday at 4:00 PM",
  },
];

export default function Dashboard() {
  const { studentName, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, {studentName}!
          </h1>
          <p className="text-lg opacity-90">
            Here's your personalized learning dashboard
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {/* Stat 1: Enrolled Courses */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600">
                Enrolled Courses
              </h3>
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">
              {enrolledCourses.length}
            </p>
          </div>

          {/* Stat 2: Average Progress */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600">
                Avg. Progress
              </h3>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">
              {Math.round(
                enrolledCourses.reduce((sum, c) => sum + c.progress, 0) /
                  enrolledCourses.length
              )}
              %
            </p>
          </div>

          {/* Stat 3: Hours Completed */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600">
                Hours Completed
              </h3>
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">42.5</p>
          </div>

          {/* Stat 4: Certificates */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600">
                Certificates
              </h3>
              <Award className="w-5 h-5 text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-slate-900">1</p>
          </div>
        </div>

        {/* Enrolled Courses Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Your Enrolled Courses
            </h2>
            <Link href="/courses">
              <Button variant="outline" className="border-slate-300">
                Browse More Courses
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Course Header */}
                <div className="h-2 bg-gradient-to-r from-blue-600 to-emerald-600"></div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {course.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Instructor: <span className="font-semibold">{course.instructor}</span>
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700">
                        Progress
                      </span>
                      <span className="text-sm font-bold text-blue-700">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Next Class */}
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-4">
                    <p className="text-xs text-slate-600 mb-1">Next Class</p>
                    <p className="text-sm font-semibold text-slate-900">
                      {course.nextClass}
                    </p>
                  </div>

                  {/* View Course Button */}
                  <Link href={`/courses/${course.id}`}>
                    <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/courses">
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 h-auto">
                Explore New Courses
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full border-slate-300"
            >
              Download Certificate
            </Button>
            <Button
              variant="outline"
              className="w-full border-slate-300"
            >
              View Performance Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
