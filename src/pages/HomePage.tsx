import Hero from '../components/home/Hero'
import ServicesSection from '../components/home/ServicesSection'
import WhyChooseUsSection from '../components/home/WhyChooseUsSection'
import StatsSection from '../components/home/StatsSection'
import CoverageSection from '../components/home/CoverageSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <CoverageSection />
    </>
  )
}
