import React, { useRef } from 'react'
import FlavorTitle from '../Components/FlavorTitle'
import FlavorSlider from '../Components/FlavorSlider'

const Flavor = () => {


    return (
        <section id='flavor' className='flavor-section'>
            <div className='h-fill flex lg:flex-row flex-col items-center relative'>
                <div className='lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0'>
                    <FlavorTitle />
                </div>
                <div className='h-full'>
                    <FlavorSlider />
                </div>
            </div>
        </section>
    )
}

export default Flavor
