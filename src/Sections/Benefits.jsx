import React from 'react'
import ClipTitle from '../Components/ClipTitle'
import { titles } from '../Constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import VideoClip from '../Components/VideoClip'

const Benefits = () => {

    useGSAP(() => {

        const split = SplitText.create(".top_paragraph", { type: "lines" })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 60%",
                endTrigger: ".vd-pin-section",
                end: "40% bottom",
                scrub: true

            }
        })

        gsap.from(split.lines, {
            x: -500,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 60%",
                end: "20% 70%",
                scrub: true
            }
        })

        tl.to(".animated-title", {
            clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
            opacity: 1,
            stagger: 0.5,
            ease: "circ.inOut"
        })

    }, [])

    return (
        <section className='benefit-section '>
            <div className='container mx-auto pt-20'>
                <div className='col-center '>
                    <p className='top_paragraph'>Unlock the Advantages:
                        <br />Explore the Key Benefits of Choosing SPYLT
                    </p>
                </div>
                <div className='mt-20 col-center'>
                    {titles.map((item, index) => (
                        <ClipTitle key={index}
                            title={item.title}
                            color={item.color}
                            bg={item.bg}
                            className={item.className}
                            borderColor={item.borderColor}
                        />
                    ))}
                </div>

                <div className='md:mt-0 mt-10'>
                    <p>And much more...</p>
                </div>
            </div>
            <div className='relative overlay-box'>
                <VideoClip />
            </div>
        </section>
    )
}

export default Benefits
