import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Clock, BookOpen } from "lucide-react";

const coursesData = [
  {
    id: 1,
    name: "Web Development",
    instructor: "Ali",
    description: "Learn modern web development with React, Node.js, and responsive design principles.",
    fullDescription: "This comprehensive course covers everything you need to become a proficient web developer. Starting with HTML, CSS, and JavaScript fundamentals, you'll progress to advanced topics including React for frontend development, Node.js for backend services, and database integration. You'll build real-world projects and learn best practices for creating responsive, accessible, and performant web applications.",
    duration: "12 weeks",
    level: "Intermediate",
    students: 342,
    schedule: "Mon, Wed, Fri - 10:00 AM to 11:30 AM",
    prerequisites: "Basic programming knowledge",
    topics: [
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React Fundamentals",
      "Node.js & Express",
      "Database Design",
      "RESTful APIs",
      "Deployment & DevOps",
    ],
  },
  {
    id: 2,
    name: "Data Science",
    instructor: "Sara",
    description: "Master data analysis, visualization, and machine learning fundamentals.",
    fullDescription: "Become a data scientist by learning how to extract insights from data. This course covers statistical analysis, data visualization, and machine learning algorithms. You'll work with popular tools like Python, Pandas, NumPy, and scikit-learn to analyze real datasets and build predictive models.",
    duration: "10 weeks",
    level: "Intermediate",
    students: 287,
    schedule: "Tue, Thu - 2:00 PM to 3:30 PM",
    prerequisites: "Python programming, Basic statistics",
    topics: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Statistical Methods",
      "Data Visualization",
      "Machine Learning",
      "Predictive Modeling",
      "Big Data Tools",
    ],
  },
  {
    id: 3,
    name: "Mobile App Development",
    instructor: "Ahmed",
    description: "Build native and cross-platform mobile applications for iOS and Android.",
    fullDescription: "Learn to develop mobile applications for both iOS and Android platforms. This course covers native development with Swift and Kotlin, as well as cross-platform frameworks like React Native and Flutter.",
    duration: "14 weeks",
    level: "Advanced",
    students: 215,
    schedule: "Mon, Wed - 1:00 PM to 2:30 PM",
    prerequisites: "Object-oriented programming",
    topics: [
      "Swift & Kotlin",
      "Mobile UI/UX",
      "React Native",
      "Flutter",
      "Mobile APIs",
      "Testing & Debugging",
      "App Store Deployment",
    ],
  },
  {
    id: 4,
    name: "Cloud Computing",
    instructor: "Fatima",
    description: "Explore AWS, Azure, and Google Cloud platforms for scalable applications.",
    fullDescription: "Master cloud computing platforms and learn how to build scalable, reliable applications in the cloud. This course covers AWS, Azure, and Google Cloud services.",
    duration: "8 weeks",
    level: "Advanced",
    students: 198,
    schedule: "Sat, Sun - 3:00 PM to 4:30 PM",
    prerequisites: "Linux basics, Networking fundamentals",
    topics: [
      "Cloud Architecture",
      "AWS Services",
      "Azure Services",
      "Google Cloud",
      "Containerization",
      "Serverless Computing",
      "Cost Optimization",
    ],
  },
  {
    id: 5,
    name: "Artificial Intelligence",
    instructor: "Hassan",
    description: "Dive into AI concepts, neural networks, and practical machine learning projects.",
    fullDescription: "Explore the frontiers of artificial intelligence and machine learning. This course covers neural networks, deep learning, and practical AI applications.",
    duration: "12 weeks",
    level: "Advanced",
    students: 256,
    schedule: "Tue, Thu - 4:00 PM to 5:30 PM",
    prerequisites: "Linear algebra, Calculus, Python",
    topics: [
      "Neural Networks",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Reinforcement Learning",
      "AI Ethics",
      "Deployment",
    ],
  },
  {
    id: 6,
    name: "Cybersecurity",
    instructor: "Layla",
    description: "Learn security best practices, ethical hacking, and network protection strategies.",
    fullDescription: "Protect systems and data from cyber threats. This course covers security principles, ethical hacking, and defensive strategies.",
    duration: "10 weeks",
    level: "Intermediate",
    students: 167,
    schedule: "Mon, Fri - 11:00 AM to 12:30 PM",
    prerequisites: "Networking basics, Linux",
    topics: [
      "Security Fundamentals",
      "Cryptography",
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Incident Response",
      "Compliance",
    ],
  },
];

export default function CourseDetail() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === parseInt(id || "0"));

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            The course you're looking for doesn't exist.
          </p>
          <Link href="/courses">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/courses">
            <Button variant="ghost" className="flex items-center gap-2 text-blue-700 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
          <p className="text-lg opacity-90">
            Taught by <span className="font-semibold">{course.instructor}</span>
          </p>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                About This Course
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {course.fullDescription}
              </p>
            </div>

            {/* Topics */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {course.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-200"
                  >
                    <BookOpen className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-900">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Prerequisites
              </h3>
              <p className="text-slate-700">{course.prerequisites}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Course Info Card */}
            <div className="bg-white border-2 border-blue-700 rounded-lg p-6 sticky top-20">
              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Course Details
              </h3>

              {/* Duration */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-slate-600">Duration</span>
                </div>
                <p className="font-semibold text-slate-900">{course.duration}</p>
              </div>

              {/* Level */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <p className="text-sm text-slate-600 mb-2">Level</p>
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </div>
              </div>

              {/* Students */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-slate-600" />
                  <span className="text-sm text-slate-600">Enrolled</span>
                </div>
                <p className="font-semibold text-slate-900">
                  {course.students} students
                </p>
              </div>

              {/* Schedule */}
              <div className="mb-6">
                <p className="text-sm text-slate-600 mb-2">Schedule</p>
                <p className="font-semibold text-slate-900 text-sm">
                  {course.schedule}
                </p>
              </div>

              {/* Enroll Button */}
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 h-auto">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
