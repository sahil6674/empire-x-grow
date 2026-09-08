import Navbar from '@/app/_components/Navbar'
import { ArrowRight, Clapperboard } from 'lucide-react'

const Home = () => {
  return (
    <>
      <Navbar/>

      <section className="home flex gap-10 px-5 h-screen">
        <div className='home-col-1 basis-2/3 flex flex-col justify-evenly'>
          <div className='w-fit flex items-center gap-2 text-gray-400 text-sm bg-white/10 border rounded-2xl border-white/20 py-1.5 px-4'>
            <span className='circle h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_4px_rgba(59,130,246,0.6)]'></span>
            <p className='uppercase'>India&apos;s Premier Creative Studio</p>
          </div>
          <h1 className='text-8xl font-semibold'>We Craft Stories That Dominate<span className='block text-blue-400'>Every Screen.</span></h1>
          <p className='text-lg text-gray-400 w-[80%]'>From cinematic video production to bold brand design, social media domination, and seamless web experiences — we build the visual identity of tomorrow&apos;s brands.</p>
          <div>
            <button className='text-sm px-5 py-2 bg-blue-600'>Start a Project <ArrowRight className='inline h-2 border rounded-full'/></button>
            <button>View our Work <ArrowRight/></button>
          </div>
        </div>

        <div className='home-col-2 text-gray-400 flex flex-col basis-1/3 text-sm justify-evenly pr-10'>
          <div className='self-start inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5 w-50'><Clapperboard className='inline h-4'/> Video Production</div>
          <div className='self-end inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5 w-50'><Clapperboard className='inline h-4'/> Video Editing</div>
          
          <div className='self-start inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5 w-50'><Clapperboard className='inline h-4'/> Graphic Designing</div>
          <div className='self-end inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5 w-50 text-center'><Clapperboard className='inline h-4'/> Web Dev</div>

          <div className='self-start inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5 w-50 text-center'><Clapperboard className='inline h-4'/> Video Production</div>
          <div className='self-end inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5 w-50 text-center'><Clapperboard className='inline h-4'/> Video Production</div>

        </div>
      </section>
    </>
  )
}

export default Home