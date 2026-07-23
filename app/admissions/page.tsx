import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FileText, Calendar, User, Phone, Mail, CheckCircle } from "lucide-react"

const steps = [
  { num: 1, title: "在线咨询", desc: "通过官网或电话咨询课程信息" },
  { num: 2, title: "预约试听", desc: "预约免费试听课程" },
  { num: 3, title: "能力评估", desc: "专业老师进行学习评估" },
  { num: 4, title: "制定方案", desc: "个性化学习方案设计" },
  { num: 5, title: "办理入学", desc: "完成报名手续，开始学习" },
]

const programs = [
  { name: "春季班", period: "3-6月", status: "报名中", color: "from-green-500 to-emerald-500" },
  { name: "暑期班", period: "7-8月", status: "即将开放", color: "from-blue-500 to-cyan-500" },
  { name: "秋季班", period: "9-12月", status: "即将开放", color: "from-orange-500 to-amber-500" },
  { name: "寒假班", period: "1-2月", status: "即将开放", color: "from-purple-500 to-pink-500" },
]

export default function AdmissionsPage() {
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 mb-6">
              <CheckCircle className="w-4 h-4 text-[#FF6B6B]" />
              <span className="text-sm font-medium text-[#FF6B6B]">2025春季班火热招生中</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">招生信息</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              加入LMG教育，开启精彩学习之旅
            </p>
          </div>
        </section>

        {/* Enrollment Periods */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">招生期次</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {programs.map((program) => (
                <div
                  key={program.name}
                  className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.color} rounded-t-2xl`}></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {program.name}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    {program.period}
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    program.status === "报名中"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                  }`}>
                    {program.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Process */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">报名流程</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                简单五步，轻松入学
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.num} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] flex items-center justify-center text-white font-bold mr-6">
                    {step.num}
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">报名须知</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-[#FF6B6B]" />
                  所需材料
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    学生身份证/户口本复印件
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    近期一寸照片2张
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    填写报名登记表
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    缴纳报名费用
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-[#FF6B6B]" />
                  招生对象
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    年龄：5-18岁青少年
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    对学习有浓厚兴趣
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    身体健康，无不良嗜好
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    家长支持配合教育
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              立即咨询报名
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>admission@lmg-edu.com</span>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-white text-[#FF6B6B] font-semibold hover:shadow-xl transition-all"
            >
              在线咨询
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
