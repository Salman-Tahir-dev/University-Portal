import { BookOpen, Target, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              About UniPortal
            </h1>
            <p className="text-lg text-slate-600">
              Discover how our platform is transforming academic excellence and student success.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
            <div className="flex gap-4 mb-4">
              <Target className="w-8 h-8 text-blue-700 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Our Mission</h2>
                <p className="text-slate-700">
                  UniPortal is dedicated to providing students with seamless access to world-class educational resources. We believe that technology should enhance learning, not complicate it. Our platform brings together comprehensive course catalogs, expert instructors, and personalized learning experiences in one unified space.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mb-12 bg-emerald-50 p-8 rounded-lg border border-emerald-200">
            <div className="flex gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-emerald-700 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Our Vision</h2>
                <p className="text-slate-700">
                  We envision a future where every student has equal access to quality education, regardless of their background. Through innovative technology and thoughtful design, UniPortal empowers learners to take control of their academic journey and achieve their full potential.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Value 1 */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Excellence</h3>
                <p className="text-slate-600">
                  We are committed to delivering the highest quality educational content and user experience.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Accessibility</h3>
                <p className="text-slate-600">
                  Education should be accessible to all. We design with inclusivity and ease of use in mind.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Innovation</h3>
                <p className="text-slate-600">
                  We continuously improve our platform with cutting-edge technology and user feedback.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">Community</h3>
                <p className="text-slate-600">
                  We foster a supportive community where students and instructors collaborate and grow together.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-8 rounded-lg border border-blue-200">
            <div className="flex gap-4 mb-4">
              <Users className="w-8 h-8 text-blue-700 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Our Team</h2>
                <p className="text-slate-700">
                  UniPortal is built by a dedicated team of educators, developers, and designers who are passionate about transforming education. With decades of combined experience in both academia and technology, we understand the unique needs of students and instructors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
