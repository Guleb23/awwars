
import NavBar from './Components/NavBar'
import Hero from './Sections/Hero'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Messages from './Sections/Messages'
import Flavor from './Sections/Flavor'
import { useGSAP } from '@gsap/react'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <main>
      <NavBar />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>

          <Hero />
          <Messages />
          <Flavor />
          <div id='next' className='h-screen overflow-hidden'>

          </div>
        </div>
      </div>

    </main>
  )
}

export default App
