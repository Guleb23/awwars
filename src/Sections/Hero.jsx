import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const Hero = () => {

    useGSAP(() => {
        const splitTitle = SplitText.create(".hero-title", { type: "chars" });

        const tl = gsap.timeline({
            delay: 1
        });

        tl.fromTo(".hero-content",
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                ease: "power1.inOut"
            })

        tl.to(".hero-text-scroll", {
            duration: 0.7,
            clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
            ease: "circ.inOut"
        }, "-=0.3")

        tl.fromTo(splitTitle.chars,
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                ease: "power1.inOut",
                stagger: 0.05,

            }, "-=0.5")


        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-container",
                scrub: true,

                start: "1% top",
                end: "bottom top"
            }
        })

        heroTl.to(".hero-container", {
            scale: 0.9,
            rotate: 7,
            yPercent: 3,
            ease: "power1.inOut"
        })
    }, [])

    return (
        <section className='bg-main-bg'>
            <div className='hero-container'>
                <img src='/images/static-img.png' alt='hero-img' className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150' />

                <div className='hero-content'>
                    <div className='overflow-hidden'>
                        <h1 className='hero-title'>Freaking delicious</h1>
                    </div>
                    <div
                        style=
                        {{
                            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                        }}
                        className='hero-text-scroll'>
                        <div className='hero-subtitle'>
                            <h1>Protein + Caffine</h1>
                        </div>
                    </div>
                    <h2 className=''>
                        Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
                    </h2>
                    <button className='hero-button'>
                        <p>Chug a SPLYT</p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
