import { SectionAnimation } from './_components/ui/SectionAnimation'
import Navbar from '@/app/_components/layout/Navbar'
import { Hero } from '@/app/_components/sections/Hero'
import Numbers from '@/app/_components/sections/Numbers'
import Services from '@/app/_components/sections/Services'
import Packages from '@/app/_components/sections/Packages'
import Process from '@/app/_components/sections/Process'
import Contact from '@/app/_components/sections/Contact'

const Home = () => {
  return (
    <>
      <Navbar/>

      <main>

        <SectionAnimation>
          <Hero/>
        </SectionAnimation>

        <SectionAnimation>
          <Numbers/>
        </SectionAnimation>

        <SectionAnimation>
          <Services/>
        </SectionAnimation>

        <SectionAnimation>
          <Packages/>
        </SectionAnimation>

        <SectionAnimation>
          <Process/>
        </SectionAnimation>

        <SectionAnimation>
          <Contact/>
        </SectionAnimation>
      </main>
      
    </>
  )
}

export default Home