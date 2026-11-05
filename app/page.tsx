import { SectionAnimation } from './_components/ui/SectionAnimation'
import Navbar from '@/app/_components/layout/Navbar'
import { Hero } from '@/app/_components/sections/Hero'
import Numbers from '@/app/_components/sections/Numbers'
import About from '@/app/_components/sections/About'
import Services from '@/app/_components/sections/Services'
import Packages from '@/app/_components/sections/Packages'
import Process from '@/app/_components/sections/Process'
import Contact from '@/app/_components/sections/Contact'
import Footer from './_components/layout/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>

      <main>

        <SectionAnimation>
          <Hero/>
        </SectionAnimation>

        {/* When we have real data then this section will show our project count, customer review etc. */}
        {/* <SectionAnimation>
          <Numbers/>
        </SectionAnimation> */}

        <SectionAnimation>
          <About/>
        </SectionAnimation>

        <SectionAnimation>
          <Services/>
        </SectionAnimation>

        <SectionAnimation>
          <Packages/>
        </SectionAnimation>

        <Process/>

        <SectionAnimation>
          <Contact/>
        </SectionAnimation>
        
      </main>

      <Footer/>
      
    </>
  )
}

export default Home