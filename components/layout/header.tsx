"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, GraduationCap } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "首页", href: "/" },
  { name: "关于我们", href: "/about" },
  { name: "课程中心", href: "/courses" },
  { name: "师资团队", href: "/teachers" },
  { name: "新闻动态", href: "/news" },
  { name: "案例合作", href: "/partners" },
  { name: "招生信息", href: "/admissions" },
  { name: "校园生活", href: "/campus-life" },
  { name: "常见问题", href: "/faq" },
  { name: "联系我们", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <span className="text-2xl md:text-3xl font-bold gradient-text">
                lmg
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            <GraduationCap className="hidden sm:block w-6 h-6 text-[#FF6B6B]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                  pathname === item.href
                    ? "text-[#FF6B6B]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#FF6B6B] hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="切换主题"
              >
                <Sun className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="菜单"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === item.href
                    ? "text-[#FF6B6B] bg-gray-100 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#FF6B6B] hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
