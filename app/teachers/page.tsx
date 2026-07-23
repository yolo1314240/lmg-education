import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Mail, Award, Users, Star, MessageCircle } from "lucide-react"

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
    rating: 4.9,
    reviews: 1280,
    gradient: "from-blue-500 to-cyan-500",
    specialties: ["奥数辅导", "思维训练", "竞赛指导"],
    bio: "15年数学教学经验，曾获得全国优秀教师称号。擅长启发式教学，培养学生数学思维。",
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
    rating: 4.8,
    reviews: 980,
    gradient: "from-[#FF6B6B] to-[#FFD93D]",
    specialties: ["口语提升", "应试辅导", "留学准备"],
    bio: "12年英语教学经验，剑桥大学TESOL认证。外教一对一授课，沉浸式学习体验。",
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
    rating: 5.0,
    reviews: 850,
    gradient: "from-purple-500 to-pink-500",
    specialties: ["Scratch", "Python", "C++"],
    bio: "清华大学计算机博士，NOIP金牌教练。10年编程教育经验，培养多名学生获得编程竞赛奖项。",
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
    rating: 4.9,
    reviews: 620,
    gradient: "from-green-500 to-emerald-500",
    specialties: ["绘画基础", "创意设计", "作品集辅导"],
    bio: "中央美院视觉设计专业，8年艺术教育经验。获得多项国际设计奖项，作品被多家画廊收藏。",
  },
  {
    id: 5,
    name: "刘文涛",
    title: "科学实验导师",
    subject: "STEAM教育",
    avatar: "👨‍🔬",
    experience: "9年",
    education: "中科院 物理硕士",
    achievement: "科技创新辅导员",
    students: "2500+",
    rating: 4.8,
    reviews: 580,
    gradient: "from-orange-500 to-amber-500",
    specialties: ["物理实验", "科学探索", "项目制作"],
    bio: "中科院物理硕士，9年STEAM教育经验。擅长通过趣味实验培养学生科学兴趣。",
  },
  {
    id: 6,
    name: "周小敏",
    title: "语文素养讲师",
    subject: "阅读写作",
    avatar: "👩‍🏫",
    experience: "11年",
    education: "北师大 中文系",
    achievement: "优秀班主任",
    students: "3500+",
    rating: 4.9,
    reviews: 920,
    gradient: "from-indigo-500 to-violet-500",
    specialties: ["经典阅读", "写作训练", "文学素养"],
    bio: "北师大中文系毕业，11年语文教学经验。擅长阅读写作指导，培养学生文学素养。",
  },
]

export default function TeachersPage() {
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
              <span className="gradient-text">师资团队</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              200+专业师资，每一位都是经过严格筛选的优秀教育者
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">专业教师</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">10年+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">平均教龄</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">好评率</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">持证上岗</div>
              </div>
            </div>
          </div>
        </section>

        {/* Teachers Grid */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Teacher Header */}
                  <div className={`h-32 bg-gradient-to-br ${teacher.gradient} relative`}>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                      <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-5xl shadow-lg">
                        {teacher.avatar}
                      </div>
                    </div>
                  </div>

                  {/* Teacher Content */}
                  <div className="pt-16 pb-6 px-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-[#FF6B6B] font-medium mb-3">{teacher.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {teacher.education}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200 dark:border-gray-800 mb-4">
                      <div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {teacher.experience}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">经验</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {teacher.students}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">学生</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          {teacher.rating}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">评分</div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {teacher.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {teacher.bio}
                    </p>

                    {/* Achievement Badge */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-[#FF6B6B]">
                      <Award className="w-4 h-4" />
                      <span>{teacher.achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">加入我们的团队</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              我们正在寻找热爱教育的优秀人才，一起为学生创造更好的学习体验
            </p>
            <a
              href="mailto:hr@lmg-edu.com"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] text-white font-semibold hover:shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>申请加入</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
