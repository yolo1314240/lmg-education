"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Link from "next/link"

const teachers = [
  {
    id: 1,
    name: "张明华",
    title: "首席数学讲师",
    subject: "数学思维",
    avatar: "👨‍🏫",
    experience: "15年",
    education: "北京大学 数学硕士",
    achievement: "全国优秀教师",
    students: "5000+",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "李雪婷",
    title: "英语教学总监",
    subject: "英语口语",
    avatar: "👩‍🏫",
    experience: "12年",
    education: "剑桥大学 TESOL认证",
    achievement: "TEFL高级认证",
    students: "4000+",
    gradient: "from-[#FF6B6B] to-[#FFD93D]",
  },
  {
    id: 3,
    name: "王建国",
    title: "编程教育专家",
    subject: "少儿编程",
    avatar: "👨‍💻",
    experience: "10年",
    education: "清华大学 计算机博士",
    achievement: "NOIP金牌教练",
    students: "3000+",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    name: "陈思雅",
    title: "艺术创意导师",
    subject: "美术设计",
    avatar: "👩‍🎨",
    experience: "8年",
    education: "中央美院 视觉设计",
    achievement: "国际设计奖项",
    students: "2000+",
    gradient: "from-green-500 to-emerald-500",
  },
]

export function TeachersShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">精英师资团队</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            严选优秀师资，每一位老师都经过层层筛选，只为给学生最好的教育
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/teachers/${teacher.id}`}>
                <div className="h-full bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                  {/* Avatar */}
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${teacher.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-5xl">
                      {teacher.avatar}
                    </div>
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-[#FF6B6B] font-medium mb-3">
                    {teacher.title}
                  </p>

                  {/* Info */}
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>{teacher.subject}</span>
                    </div>
                    <div>{teacher.education}</div>
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between text-xs">
                        <span>{teacher.experience}经验</span>
                        <span>{teacher.achievement}</span>
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
            href="/teachers"
            className="inline-flex items-center space-x-2 px-8 py-3 rounded-full border-2 border-[#FF6B6B] text-[#FF6B6B] font-semibold hover:bg-[#FF6B6B] hover:text-white transition-all duration-300"
          >
            <span>认识更多老师</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
