import Link from "next/link"
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

const footerLinks = {
  关于: [
    { name: "机构简介", href: "/about" },
    { name: "使命愿景", href: "/about#mission" },
    { name: "发展历程", href: "/about#history" },
    { name: "荣誉资质", href: "/about#honors" },
  ],
  课程: [
    { name: "课程中心", href: "/courses" },
    { name: "热门课程", href: "/courses#hot" },
    { name: "试听课程", href: "/courses#trial" },
    { name: "课程表", href: "/courses#schedule" },
  ],
  师资: [
    { name: "师资团队", href: "/teachers" },
    { name: "明星教师", href: "/teachers#star" },
    { name: "教学成果", href: "/teachers#results" },
  ],
  服务: [
    { name: "招生信息", href: "/admissions" },
    { name: "常见问题", href: "/faq" },
    { name: "联系我们", href: "/contact" },
    { name: "校园生活", href: "/campus-life" },
  ],
}

const socialLinks = [
  { name: "微信", icon: "message-circle", href: "#" },
  { name: "微博", icon: "twitter", href: "#" },
  { name: "抖音", icon: "video", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
              <GraduationCap className="w-8 h-8 text-[#FFD93D]" />
              <span className="text-2xl font-bold text-white">lmg</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              LMG教育致力于提供优质教育服务，点燃学习热情，成就未来梦想。
              让每个学生都能发现潜能，实现自我价值。
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-[#FFD93D]" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-[#FFD93D]" />
                <span>contact@lmg-edu.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-[#FFD93D]" />
                <span>北京市朝阳区教育园区88号</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#FFD93D] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} LMG教育. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                隐私政策
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                服务条款
              </Link>
              <div className="flex items-center space-x-1 text-gray-500">
                <span>京ICP备</span>
                <span>12345678号</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
