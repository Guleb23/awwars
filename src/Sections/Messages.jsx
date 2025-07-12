import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const Messages = () => {

    useGSAP(() => {
        const firstMes = SplitText.create(".first-message", { type: "words" })
        const secondMes = SplitText.create(".second-message", { type: "words" })
        const paragraph = SplitText.create("#paragraph",
            {
                type: "words, lines",
                linesClass: "paragraph-line"
            })

        const tl = gsap.timeline();
        tl.to(firstMes.words,
            {
                color: "#faeade",
                stagger: 1,
                scrollTrigger: {
                    trigger: ".message-content",
                    scrub: true,
                    start: "top center",
                    end: "center center",

                }
            }
        )
        tl.to(".msg-text-scroll",
            {
                clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",

                scrollTrigger: {
                    trigger: ".message-content",
                    scrub: true,
                    start: "30% center",
                    end: "center center",


                }
            }
        )

        tl.to(secondMes.words,
            {
                color: "#faeade",
                stagger: 1,
                scrollTrigger: {
                    trigger: ".message-content",
                    scrub: true,
                    start: "center center",
                    end: "80% center",

                }
            }
        )

        tl.from(paragraph.lines,

            {
                opacity: 0,
                y: 100,
                stagger: 0.5,

                scrollTrigger: {
                    trigger: ".message-content",
                    start: "center center",
                    end: "80% center",
                    scrub: true,

                }
            })


    }, [])

    return (
        <section className='message-content'>
            <div className='container mx-auto flex-center relative'>
                <div className='w-full h-full'>
                    <div className='msg-wrapper'>
                        <h1 className='first-message'>
                            stir up your
                            fearless past and
                        </h1>
                        <div className='msg-text-scroll'
                            style=
                            {{
                                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                            }}>
                            <div className='bg-light-brown md:pbl5 pb-3 px-5'>
                                <h1 className='text-red-brown'>
                                    FUEL UP
                                </h1>
                            </div>
                        </div>
                        <h1 className='second-message'>
                            your future with every
                            gulp of Perfect Protein
                        </h1>
                    </div>

                    <div className='flex-center md:mt-20 mt-10'>
                        <div className='max-w-md px-10 flex-center overflow-hidden'>
                            <p id='paragraph'>
                                Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Messages
