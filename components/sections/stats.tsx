"use client"

import { Users, BookOpen, Award, Clock, GraduationCap, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { icon: Users, value: "10,000+", label: "在籍学生", color: "from-blue-500 to-cyan-500" },
  { icon: BookOpen, value: "50+", label: "精品课程", color: "from-[#FF6B6B] to-[#FFD93D]" },
  { icon: Award, value: "200+", label: "专业师资", color: "from-purple-500 to-pink-500" },
  { icon: GraduationCap, value: "5,000+", label: "毕业学员", color: "from-green-500 to-emerald-500" },
  { icon: Clock, value: "15年", label: "办学经验", color: "from-orange-500 to-amber-500" },
  { icon: Heart, value: "98%", label: "满意度", color: "from-rose-500 to-red-500" },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">用数字说话</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            15年来，我们始终坚持教育本质，用专业和爱心陪伴每一位学生的成长
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mx-auto w-16 h-16 md:w-20 md:h-20 mb-4">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="absolute inset-1 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center">
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
