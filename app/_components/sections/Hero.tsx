import { BlueButton } from '../ui/BlueButton'
import { SimpleButton } from '../ui/SimpleButton'

export const Hero = () => {
  return (
    <>
      <section id='home' className="flex px-5 pt-20 h-screen bg-black">
        <div className='home-col-1 md:basis-2/3 flex flex-col justify-between sm:justify-evenly sm:py-0'>
          <div className='w-fit flex items-center gap-4 text-gray-400 text-sm bg-white/10 border rounded-2xl border-white/20 py-1.5 px-4'>
            <span className='circle h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_4px_rgba(59,130,246,0.6)]'></span>
            <p className='uppercase tracking-widest'>India&apos;s Premier Creative Studio</p>
          </div>
          <h1 className='text-6xl leading-16 sm:leading-25 md:text-8xl font-semibold'>We Craft Stories That Dominate<span className='block text-blue-400'>Every Screen.</span></h1>
          <p className='text-lg tracking-wide leading-6 text-gray-400 sm:w-[80%]'>From cinematic video production to bold brand design, social media domination, and seamless web experiences — we build the visual identity of tomorrow&apos;s brands.</p>
          <div className='flex flex-col gap-6 sm:flex-row sm:gap-5'>
            <BlueButton text='Start a Project ➜' className='' />
            <SimpleButton text='View our Work ➜' />
          </div>
        </div>

        <div className='home-col-2 hidden md:block text-white relative md:basis-1/3 text-sm h-dvh overflow-hidden'>
          <div className='animation-item left-0 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5' style={{ "--delay": "-0s" } as React.CSSProperties}>🎬 Video Editing</div>

          <div className='animation-item right-10 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5' style={{ "--delay": "-2s" } as React.CSSProperties}>🎥 Video Shooting</div>

          <div className='animation-item left-0 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5' style={{ "--delay": "-4s" } as React.CSSProperties}>🎨 Graphic Designing</div>

          <div className='animation-item right-10 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5 text-center' style={{ "--delay": "-6s" } as React.CSSProperties}>💻 Web Designing</div>

          <div className='animation-item left-0 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5 text-center' style={{ "--delay": "-8s" } as React.CSSProperties}>📱 Social Media Handling</div>

          <div className='animation-item right-10 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-1.5 text-center' style={{ "--delay": "-10s" } as React.CSSProperties}>📈 Grow Business</div>

        </div>
      </section>
    </>
  )
}
