import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  Target,
  Eye,
  Heart,
  Trophy,
  Calendar,
  Building2,
  Users,
  Sparkles,
} from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: "2010", event: "LMG教育成立，开启教育征程" },
    { year: "2013", event: "首家校区落成，学员突破1000人" },
    { year: "2016", event: "拓展线上教育，开启O2O模式" },
    { year: "2019", event: "获得年度最佳教育机构奖项" },
    { year: "2022", event: "全国校区突破20家，服务学员超万人" },
    { year: "2025", event: "成为行业领先的教育品牌" },
  ]

  const values = [
    {
      icon: Target,
      title: "使命",
      description: "点燃学习热情，成就未来梦想，让每个学生都能发现潜能、实现自我价值。",
      color: "from-[#FF6B6B] to-[#FFD93D]",
    },
    {
      icon: Eye,
      title: "愿景",
      description: "成为最受信赖的教育品牌，用专业和爱心陪伴每一位学生的成长。",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "价值观",
      description: "以学生为中心，追求卓越，持续创新，用爱心和责任成就未来。",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const honors = [
    { icon: Trophy, title: "年度最佳教育机构", year: "2019-2024连续六年" },
    { icon: Building2, title: "诚信办学单位", year: "2020年认证" },
    { icon: Users, title: "家长满意品牌", year: "2023年评选" },
    { icon: Sparkles, title: "科技创新奖", year: "2024年获得" },
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF9E6] dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#FF6B6B]/30 to-[#FFD93D]/30 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">关于LMG</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              用专业与爱心，陪伴每一位学生的成长之路
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((item, index) => (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800"
                >
                  <div
                    className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} items-center justify-center mb-6`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section id="history" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">发展历程</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                从创立到成长，每一步都见证着我们的进步
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FF6B6B] to-[#FFD93D] hidden md:block"></div>

                {milestones.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } mb-12 last:mb-0`}
                  >
                    <div className="w-full md:w-1/2 p-6">
                      <div
                        className={`p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg ${
                          index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                        }`}
                      >
                        <div className="text-3xl font-bold gradient-text mb-2">
                          {item.year}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.event}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFD93D] border-4 border-white dark:border-gray-800"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Honors */}
        <section id="honors" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">荣誉资质</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                专业认证，值得信赖
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {honors.map((item) => (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:shadow-xl transition-shadow"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-[#FF6B6B]" />
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Environment Gallery */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">校园环境</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                优美的学习环境，完善的教学设施
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["🏫 教学楼", "📚 图书馆", "💻 电脑教室", "🎨 美术室", "🎵 音乐室", "⚽ 运动场"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-2xl bg-gradient-to-br from-[#FF6B6B]/20 to-[#FFD93D]/20 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-6xl hover:scale-105 transition-transform cursor-pointer"
                  >
                    {item.split(" ")[0]}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
