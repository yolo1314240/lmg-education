import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "联系电话",
    content: "400-888-8888",
    sub: "工作日 9:00-18:00",
  },
  {
    icon: Mail,
    title: "电子邮箱",
    content: "contact@lmg-edu.com",
    sub: "24小时内回复",
  },
  {
    icon: MapPin,
    title: "总部地址",
    content: "北京市朝阳区教育园区88号",
    sub: "欢迎到访咨询",
  },
  {
    icon: Clock,
    title: "营业时间",
    content: "周一至周日 9:00-20:00",
    sub: "节假日不休",
  },
]

const branches = [
  { name: "朝阳校区", address: "朝阳区建国路88号" },
  { name: "海淀校区", address: "海淀区中关村大街100号" },
  { name: "西城校区", address: "西城区金融街35号" },
  { name: "东城校区", address: "东城区王府井大街68号" },
  { name: "丰台校区", address: "丰台区丽泽商务区" },
  { name: "通州校区", address: "通州区万达广场" },
]

export default function ContactPage() {
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
              <span className="gradient-text">联系我们</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              我们随时为您提供帮助
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white dark:bg-gray-900 -mt-10 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <item.icon className="w-8 h-8 text-[#FF6B6B] mb-4" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-900 dark:text-white font-medium mb-1">
                    {item.content}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  在线留言
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        您的姓名
                      </label>
                      <input
                        type="text"
                        placeholder="请输入姓名"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        联系电话
                      </label>
                      <input
                        type="tel"
                        placeholder="请输入手机号"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      placeholder="请输入邮箱"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      咨询内容
                    </label>
                    <textarea
                      rows={5}
                      placeholder="请描述您的咨询内容..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/50 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <span>发送留言</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  校区位置
                </h2>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      地图加载中...
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                      北京市朝阳区教育园区88号
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branch Locations */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">各大校区</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                全市20+校区，就近选择
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {branch.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {branch.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-12 bg-gradient-to-br from-[#FF6B6B] to-[#FFD93D]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              关注我们
            </h2>
            <p className="text-white/90 mb-6">
              通过社交媒体获取最新动态和教育资讯
            </p>
            <div className="flex items-center justify-center space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <span className="text-xl">💬</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <span className="text-xl">📱</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                <span className="text-xl">🎵</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
