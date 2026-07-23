"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ChevronDown, Phone, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    category: "报名相关",
    questions: [
      {
        q: "如何报名参加课程？",
        a: "您可以通过官网在线咨询、拨打400-888-8888或直接到校区咨询。我们会安排免费试听课程，满意后办理报名手续。",
      },
      {
        q: "报名需要哪些材料？",
        a: "报名需要提供学生身份证或户口本复印件、近期一寸照片2张、填写报名登记表并缴纳报名费用。",
      },
      {
        q: "可以中途插班吗？",
        a: "部分课程支持中途插班，我们会根据学生情况安排补课或调整学习计划。具体请咨询课程顾问。",
      },
    ],
  },
  {
    category: "课程相关",
    questions: [
      {
        q: "课程是如何设置的？",
        a: "我们根据学生年龄和基础水平设置不同阶段的课程，每个课程都有明确的教学目标和进度安排。详情请查看课程中心。",
      },
      {
        q: "班级人数是多少？",
        a: "为保证教学质量，我们采用小班教学，常规班级10-15人，VIP一对一课程可根据需求预约。",
      },
      {
        q: "可以试听课程吗？",
        a: "当然可以！我们提供免费试听课程，您可以通过官网或电话预约试听时间。",
      },
      {
        q: "课程费用是多少？",
        a: "不同课程的费用有所差异，具体请咨询课程顾问。我们经常有优惠活动，关注官网获取最新优惠信息。",
      },
    ],
  },
  {
    category: "师资相关",
    questions: [
      {
        q: "老师的资质如何？",
        a: "我们的老师都经过严格筛选，具有相关专业背景和丰富的教学经验。所有老师都持证上岗，定期接受培训考核。",
      },
      {
        q: "可以指定老师吗？",
        a: "部分课程支持指定老师，具体需根据老师的课程安排和时间协调。我们会尽量满足您的要求。",
      },
    ],
  },
  {
    category: "其他问题",
    questions: [
      {
        q: "有退款政策吗？",
        a: "开课前可全额退款，开课后根据课程进度退费。具体政策请咨询客服。",
      },
      {
        q: "有校区地址吗？",
        a: "我们在全国有20多个校区，具体地址请查看联系我们页面或咨询客服。",
      },
      {
        q: "有家长旁听课程吗？",
        a: "部分课程允许家长旁听，具体请咨询课程顾问。我们也定期举办家长开放日活动。",
      },
    ],
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-medium text-gray-900 dark:text-white pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 dark:text-gray-400 animate-in slide-in-from-top-2">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF9E6] dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#FF6B6B]/30 to-[#FFD93D]/30 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">常见问题</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              快速找到您关心的问题答案
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {faqs.map((section) => (
                <div key={section.category}>
                  <h2 className="text-2xl font-bold gradient-text mb-6">
                    {section.category}
                  </h2>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl divide-y divide-gray-200 dark:divide-gray-700">
                    {section.questions.map((item, index) => (
                      <FAQItem
                        key={index}
                        question={item.q}
                        answer={item.a}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">还有疑问？</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                没找到答案？联系我们获取帮助
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="tel:400-888-8888"
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D] items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  电话咨询
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  400-888-8888
                </p>
              </a>

              <a
                href="mailto:contact@lmg-edu.com"
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  邮件咨询
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  contact@lmg-edu.com
                </p>
              </a>

              <a
                href="/contact"
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  在线咨询
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  即时响应
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
