import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = ["全部", "机构动态", "行业资讯", "活动通知", "教学成果"]

const news = [
  {
    id: 1,
    title: "LMG教育荣获2024年度最佳教育机构称号",
    category: "机构动态",
    date: "2024-12-15",
    readTime: "3分钟",
    image: "🏆",
    excerpt: "在刚刚结束的2024年度教育行业评选中，LMG教育凭借优质的教学服务和良好的口碑，荣获年度最佳教育机构称号。",
    gradient: "from-[#FF6B6B] to-[#FFD93D]",
  },
  {
    id: 2,
    title: "2025年春季招生正式启动",
    category: "活动通知",
    date: "2024-12-10",
    readTime: "2分钟",
    image: "📝",
    excerpt: "LMG教育2025年春季招生现已启动，新增多门精品课程，欢迎家长咨询报名。",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "我校学生在全国编程竞赛中斩获佳绩",
    category: "教学成果",
    date: "2024-11-28",
    readTime: "4分钟",
    image: "🥇",
    excerpt: "在刚刚结束的全国青少年信息学奥林匹克竞赛中，我校参赛选手表现优异，共获得5金8银的优异成绩。",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "教育专家谈：如何培养孩子的学习兴趣",
    category: "行业资讯",
    date: "2024-11-20",
    readTime: "5分钟",
    image: "💡",
    excerpt: "著名教育专家张教授做客LMG教育，分享关于培养孩子学习兴趣的独到见解和实践经验。",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "LMG教育举办第五届校园文化艺术节",
    category: "机构动态",
    date: "2024-11-15",
    readTime: "3分钟",
    image: "🎭",
    excerpt: "为期一周的第五届校园文化艺术节圆满落幕，学生们展示了精彩的才艺作品。",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    title: "新增机器人课程受学生热捧",
    category: "机构动态",
    date: "2024-11-08",
    readTime: "2分钟",
    image: "🤖",
    excerpt: "最新开设的机器人工程课程受到学生和家长的一致好评，目前已有近千名学生报名学习。",
    gradient: "from-indigo-500 to-violet-500",
  },
]

export default function NewsPage() {
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
              <span className="gradient-text">新闻动态</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              了解LMG教育的最新动态和教育行业资讯
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-2 overflow-x-auto py-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    cat === "全部"
                      ? "bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 max-w-5xl mx-auto">
              {news.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className={`md:w-72 h-48 md:h-auto bg-gradient-to-br ${item.gradient} flex items-center justify-center text-6xl`}>
                      {item.image}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      {/* Meta */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="px-2 py-1 rounded-full bg-[#FF6B6B]/10 text-[#FF6B6B]">
                          {item.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FF6B6B] transition-colors">
                        {item.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center text-[#FF6B6B] font-medium">
                        <span>阅读更多</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-12">
              <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                上一页
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg ${
                    page === 1
                      ? "bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] text-white"
                      : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                下一页
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
