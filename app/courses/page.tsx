import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BookOpen, Clock, Users, Star, Filter, Search, Play } from "lucide-react"

const categories = [
  { name: "全部", count: 50 },
  { name: "编程教育", count: 12 },
  { name: "语言学习", count: 10 },
  { name: "学科辅导", count: 15 },
  { name: "艺术培养", count: 8 },
  { name: "STEAM教育", count: 5 },
]

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
    tags: ["零基础", "趣味性强", "小班教学"],
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
    tags: ["外教授课", "口语专项", "随时预约"],
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
    tags: ["思维拓展", "竞赛培养", "名师执教"],
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
    tags: ["创意启发", "材料全包", "作品展示"],
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
    tags: ["动手实践", "竞赛指导", "器材赠送"],
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
    tags: ["经典导读", "写作训练", "能力提升"],
  },
  {
    id: 7,
    title: "Python进阶编程",
    category: "编程教育",
    level: "高级",
    age: "12-18岁",
    duration: "18周",
    students: 890,
    rating: 4.9,
    price: "¥5,980",
    image: "🐍",
    description: "深入学习Python，掌握算法与数据结构",
    gradient: "from-yellow-500 to-orange-500",
    tags: ["算法学习", "项目实战", "竞赛辅导"],
  },
  {
    id: 8,
    title: "日语零基础入门",
    category: "语言学习",
    level: "初级",
    age: "全年龄",
    duration: "12周",
    students: 1340,
    rating: 4.7,
    price: "¥3,280",
    image: "🇯🇵",
    description: "从五十音图开始，系统学习日语基础",
    gradient: "from-pink-500 to-rose-500",
    tags: ["零基础", "小班教学", "文化体验"],
  },
  {
    id: 9,
    title: "科学实验探索",
    category: "STEAM教育",
    level: "初级",
    age: "6-12岁",
    duration: "10周",
    students: 1780,
    rating: 4.9,
    price: "¥3,480",
    image: "🔬",
    description: "趣味科学实验，培养探索精神",
    gradient: "from-teal-500 to-cyan-500",
    tags: ["动手实验", "安全材料", "知识拓展"],
  },
]

export default function CoursesPage() {
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
              <span className="gradient-text">课程中心</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              50+精品课程，满足不同年龄段和兴趣爱好的学习需求
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索课程..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/50"
              />
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 overflow-x-auto py-4 scrollbar-hide">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    cat.name === "全部"
                      ? "bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat.name}
                  <span className="ml-1 text-xs opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Course Image/Icon */}
                  <div className={`h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-7xl">{course.image}</div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-medium">
                      {course.category}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-gray-900 font-medium">
                        <Play className="w-5 h-5" />
                        <span>试听课程</span>
                      </button>
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

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

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
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                      <div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mr-1">
                          适合
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {course.age}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-[#FF6B6B]">
                        {course.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
