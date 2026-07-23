import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Building2, Globe, GraduationCap, Award } from "lucide-react"

const partners = [
  { name: "北京大学", type: "高校合作", logo: "🎓", description: "产学研合作项目" },
  { name: "清华大学", type: "高校合作", logo: "🏛️", description: "教育研究合作" },
  { name: "中科院", type: "科研机构", logo: "🔬", description: "STEAM课程研发" },
  { name: "新东方", type: "教育机构", logo: "📚", description: "课程资源共享" },
  { name: "好未来", type: "教育机构", logo: "💡", description: "技术合作交流" },
  { name: "微软中国", type: "企业合作", logo: "💻", description: "编程教育支持" },
]

const cases = [
  {
    title: "与北京大学联合开设AI思维课程",
    category: "产学研合作",
    result: "培养500+学员",
    icon: "🤝",
    gradient: "from-[#FF6B6B] to-[#FFD93D]",
  },
  {
    title: "携手微软推进少儿编程教育",
    category: "企业合作",
    result: "覆盖20+校区",
    icon: "💻",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "与中科院共建科学实验室",
    category: "科研合作",
    result: "服务3000+学生",
    icon: "🔬",
    gradient: "from-purple-500 to-pink-500",
  },
]

export default function PartnersPage() {
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
              <span className="gradient-text">案例合作</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              携手优秀机构，共建教育生态
            </p>
          </div>
        </section>

        {/* Success Cases */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">合作案例</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                与优秀伙伴共同创造教育价值
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {cases.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} items-center justify-center text-3xl mb-6`}>
                    {item.icon}
                  </div>
                  <div className="text-xs text-[#FF6B6B] font-medium mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {item.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Institutions */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">合作机构</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                与行业领先机构建立长期合作关系
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{partner.logo}</div>
                  <div className="font-bold text-gray-900 dark:text-white mb-1">
                    {partner.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    {partner.type}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {partner.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cooperation Areas */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">合作领域</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D] items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">产学研合作</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  与高校联合开展教育研究和课程开发
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">企业合作</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  与知名企业共建实习实训基地
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">国际合作</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  与海外教育机构开展交流项目
                </p>
              </div>

              <div className="text-center p-6">
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">行业联盟</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  加入教育联盟，共享行业资源
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              欢迎合作洽谈
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              如果您有兴趣与LMG教育建立合作关系，欢迎联系我们
            </p>
            <a
              href="mailto:partner@lmg-edu.com"
              className="inline-block px-8 py-4 rounded-full bg-white text-[#FF6B6B] font-semibold hover:shadow-xl transition-all"
            >
              partner@lmg-edu.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
