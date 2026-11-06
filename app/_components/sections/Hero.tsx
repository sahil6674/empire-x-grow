import { BlueButton } from '../ui/BlueButton'
import { SimpleButton } from '../ui/SimpleButton'
import Link from 'next/link'

export const Hero = () => {
  return (
    <>
      <section id='home' className="flex px-5 pt-20 h-screen bg-black">
        <div className='home-col-1 md:basis-2/3 flex flex-col justify-between sm:justify-evenly sm:py-0'>
          <div className='w-fit flex items-center gap-4 text-amber-500 text-sm bg-white/10 border rounded-2xl border-amber-500 py-1.5 px-4'>
            <span className='circle h-2 w-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_4px_rgba(245,158,11,0.6)]'></span>
            <p className='uppercase tracking-widest'>DIGITAL SOLUTIONS FOR YOUR BUSINESS</p>
          </div>
          <h1 className='md:leading-16 text-5xl md:text-6xl font-semibold'>We Turn Your Ideas into Strategy and Your Strategy into <span className='md:text-7xl text-amber-500'>Success.</span></h1>
          <p className='text-lg tracking-wide leading-6 text-gray-400 sm:w-[80%]'>From video shoots and editing to designing, social media, ads, websites and software, EmpireXGrow gives your business everything it needs to get noticed, get leads and grow, all under one roof.</p>
          <div className='flex flex-col gap-6 sm:flex-row sm:gap-5'>
            <Link href="#contact">
              <BlueButton text='Start a Project ➜' />
            </Link>
            <Link href="#contact">
              <SimpleButton text='View our Work ➜' />
            </Link>
          </div>
        </div>

        <div className='home-col-2 hidden md:block text-white relative md:basis-1/3 text-sm h-dvh overflow-hidden'>
          <div className='animation-item left-0 inline-block bg-white/10 backdrop-blur-md border border-amber-500 rounded-2xl px-6 py-1.5' style={{ "--delay": "-0s" } as React.CSSProperties}>🎬 Video Editing</div>

          <div className='animation-item right-10 inline-block bg-white/10 backdrop-blur-md border border-amber-500 rounded-2xl px-6 py-1.5' style={{ "--delay": "-2s" } as React.CSSProperties}>🎥 Video Shooting</div>

          <div className='animation-item left-0 inline-block bg-white/10 backdrop-blur-md border border-amber-500 rounded-2xl px-6 py-1.5' style={{ "--delay": "-4s" } as React.CSSProperties}>🎨 Graphic Designing</div>

          <div className='animation-item right-10 inline-block bg-white/10 backdrop-blur-md border border-amber-500 rounded-2xl px-6 py-1.5 text-center' style={{ "--delay": "-6s" } as React.CSSProperties}>💻 Website & Software</div>

          <div className='animation-item left-0 inline-block bg-white/10 backdrop-blur-md border border-amber-500 rounded-2xl px-6 py-1.5 text-center' style={{ "--delay": "-8s" } as React.CSSProperties}>📱 Social Media Handling</div>

          <div className='animation-item right-10 inline-block bg-white/10 backdrop-blur-md border border-amber-500 rounded-2xl px-6 py-1.5 text-center' style={{ "--delay": "-10s" } as React.CSSProperties}>📈 Google & Meta Ads</div>

        </div>
      </section>
    </>
  )
}
