import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Heart, Users, Trophy, Sparkles } from "lucide-react"

const activities = [
  {
    title: "科技节",
    description: "展示学生科技创新成果，激发探索精神",
    icon: "🔬",
    date: "每年5月",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "艺术节",
    description: "书画、音乐、舞蹈表演，展现艺术才华",
    icon: "🎭",
    date: "每年10月",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "运动会",
    description: "田径比赛、团体项目，增强体质和团队精神",
    icon: "🏃",
    date: "每年4月",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "读书节",
    description: "阅读分享、作文比赛，培养阅读习惯",
    icon: "📚",
    date: "每年9月",
    gradient: "from-orange-500 to-amber-500",
  },
]

const gallery = [
  { category: "课堂瞬间", items: ["📖", "✍️", "🎯", "🔢"] },
  { category: "校园活动", items: ["🎪", "🎨", "🎵", "⚽"] },
  { category: "成果展示", items: ["🏆", "🎓", "🌟", "💯"] },
]

const stories = [
  {
    title: "小明的故事",
    subtitle: "从编程小白到竞赛冠军",
    content: "小明6年级开始学习编程，通过两年的系统学习，在NOIP竞赛中获得省级一等奖。",
    avatar: "👦",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "小华的蜕变",
    subtitle: "英语口语从不敢开口到自信表达",
    content: "小华刚来时英语基础薄弱，经过一年的外教口语训练，现在已经能够自信地与外教交流。",
    avatar: "👧",
    gradient: "from-[#FF6B6B] to-[#FFD93D]",
  },
]

export default function CampusLifePage() {
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
              <span className="gradient-text">校园生活</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              丰富多彩的校园活动，让学习更有趣
            </p>
          </div>
        </section>

        {/* Annual Activities */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">年度活动</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                精彩活动全年不断
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
                >
                  <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.gradient} items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                    {activity.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {activity.description}
                  </p>
                  <div className="text-xs text-[#FF6B6B] font-medium">
                    {activity.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">校园相册</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                记录美好瞬间
              </p>
            </div>

            {gallery.map((section) => (
              <div key={section.category} className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {section.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-2xl bg-gradient-to-br from-[#FF6B6B]/20 to-[#FFD93D]/20 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-5xl hover:scale-105 transition-transform cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Stories */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">成长故事</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                见证每一位学生的蜕变
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {stories.map((story) => (
                <div
                  key={story.title}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${story.gradient} flex items-center justify-center text-3xl flex-shrink-0`}>
                      {story.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {story.title}
                      </h3>
                      <p className="text-sm text-[#FF6B6B] mb-3">{story.subtitle}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {story.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">快乐成长</h3>
                <p className="text-white/80 text-sm">
                  让学习成为快乐的事情
                </p>
              </div>
              <div>
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">团队协作</h3>
                <p className="text-white/80 text-sm">
                  培养合作精神和沟通能力
                </p>
              </div>
              <div>
                <Trophy className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">追求卓越</h3>
                <p className="text-white/80 text-sm">
                  鼓励学生不断超越自我
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
