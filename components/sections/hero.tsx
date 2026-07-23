"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF9E6] dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        {/* Decorative Gradients */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#FF6B6B]/30 to-[#FFD93D]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#4ECDC4]/20 to-[#FF6B6B]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#FFD93D]/10 to-[#FF6B6B]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B6B]/10 to-[#FFD93D]/10 border border-[#FF6B6B]/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              2025年度最佳教育机构
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900 dark:text-white">点燃学习热情</span>
            <br />
            <span className="gradient-text">成就未来梦想</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            LMG教育致力于为每一位学生提供优质的教育资源和学习体验，
            让学习变得有趣、高效、有温度。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/courses"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] text-white font-semibold text-lg shadow-lg shadow-[#FF6B6B]/30 hover:shadow-xl hover:shadow-[#FF6B6B]/40 transition-all duration-300 hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>探索课程</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-lg hover:border-[#FF6B6B] hover:text-[#FF6B6B] transition-all duration-300"
            >
              了解更多
            </Link>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            <div>
              <div className="text-3xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                在读学生
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                精品课程
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                好评率
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gray-400"
          />
        </div>
      </motion.div>
    </section>
  )
}
