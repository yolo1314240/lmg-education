import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { CourseCard } from "@/components/sections/course-card"
import { TeachersShowcase } from "@/components/sections/teachers-showcase"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Stats />
        <CourseCard />
        <TeachersShowcase />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
