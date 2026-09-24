import { SectionAnimation } from './_components/ui/SectionAnimation'
import Navbar from '@/app/_components/layout/Navbar'
import { Hero } from '@/app/_components/sections/Hero'
import Numbers from '@/app/_components/sections/Numbers'

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

      </main>
      
    </>
  )
}

export default Home