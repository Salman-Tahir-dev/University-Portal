import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const coursesData = [
  {
    id: 1,
    name: "Web Development",
    instructor: "Ali",
    description: "Learn modern web development with React, Node.js, and responsive design principles.",
    students: 342,
  },
  {
    id: 2,
    name: "Data Science",
    instructor: "Sara",
    description: "Master data analysis, visualization, and machine learning fundamentals.",
    students: 287,
  },
  {
    id: 3,
    name: "Mobile App Development",
    instructor: "Ahmed",
    description: "Build native and cross-platform mobile applications for iOS and Android.",
    students: 215,
  },
  {
    id: 4,
    name: "Cloud Computing",
    instructor: "Fatima",
    description: "Explore AWS, Azure, and Google Cloud platforms for scalable applications.",
    students: 198,
  },
  {
    id: 5,
    name: "Artificial Intelligence",
    instructor: "Hassan",
    description: "Dive into AI concepts, neural networks, and practical machine learning projects.",
    students: 256,
  },
  {
    id: 6,
    name: "Cybersecurity",
    instructor: "Layla",
    description: "Learn security best practices, ethical hacking, and network protection strategies.",
    students: 167,
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Available Courses
          </h1>
          <p className="text-lg text-slate-600">
            Explore our comprehensive catalog of courses taught by expert instructors.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Course Header with Gradient */}
              <div className="h-2 bg-gradient-to-r from-blue-600 to-emerald-600"></div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {course.name}
                </h3>

                <p className="text-sm text-slate-600 mb-3">
                  <span className="font-semibold">Instructor:</span> {course.instructor}
                </p>

                <p className="text-slate-700 mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Students Count */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{course.students} students enrolled</span>
                </div>

                {/* View Details Button */}
                <Link href={`/courses/${course.id}`}>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
