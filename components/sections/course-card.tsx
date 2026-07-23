"use client"

import { motion } from "framer-motion"
import { BookOpen, Clock, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "少儿编程启蒙",
    category: "编程教育",
    level: "初级",
    age: "6-12岁",
    duration: "12周",
    students: 2340,
    rating: 4.9,
    price: "¥3,980",
    image: "🎮",
    description: "通过游戏化学习，让孩子在快乐中掌握编程思维",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "英语口语提升",
    category: "语言学习",
    level: "中级",
    age: "10-18岁",
    duration: "16周",
    students: 1890,
    rating: 4.8,
    price: "¥4,680",
    image: "🗣️",
    description: "外教一对一，沉浸式学习环境，快速提升口语能力",
    gradient: "from-[#FF6B6B] to-[#FFD93D]",
  },
  {
    id: 3,
    title: "数学思维训练",
    category: "学科辅导",
    level: "进阶",
    age: "8-16岁",
    duration: "20周",
    students: 3200,
    rating: 5.0,
    price: "¥5,280",
    image: "🧮",
    description: "培养逻辑思维，掌握解题方法，提升数学能力",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "艺术创想工坊",
    category: "艺术培养",
    level: "初级",
    age: "5-14岁",
    duration: "8周",
    students: 1560,
    rating: 4.9,
    price: "¥2,980",
    image: "🎨",
    description: "激发创造力，培养审美能力，让孩子自由表达",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "机器人工程",
    category: "STEAM教育",
    level: "进阶",
    age: "10-16岁",
    duration: "24周",
    students: 980,
    rating: 4.9,
    price: "¥6,980",
    image: "🤖",
    description: "动手实践，学习机械结构、编程和电子知识",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    title: "阅读写作进阶",
    category: "语文素养",
    level: "中级",
    age: "8-14岁",
    duration: "16周",
    students: 2100,
    rating: 4.8,
    price: "¥3,680",
    image: "📚",
    description: "精读经典，学习写作技巧，提升语文综合能力",
    gradient: "from-indigo-500 to-violet-500",
  },
]

export function CourseCard() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">热门课程</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            精心设计的课程体系，满足不同年龄段和兴趣爱好的学习需求
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/courses/${course.id}`}>
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Course Image/Icon */}
                  <div className={`h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-7xl">{course.image}</div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-medium">
                      {course.category}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#FF6B6B] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Course Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mr-1">
                          适合
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {course.age}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-[#FF6B6B]">
                          {course.price}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FF6B6B] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center space-x-2 px-8 py-3 rounded-full border-2 border-[#FF6B6B] text-[#FF6B6B] font-semibold hover:bg-[#FF6B6B] hover:text-white transition-all duration-300"
          >
            <span>查看全部课程</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
