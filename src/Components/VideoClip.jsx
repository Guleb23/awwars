import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const VideoClip = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    useGSAP(() => {
        if (!isMobile) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".vd-pin-section",
                    start: "top top",
                    end: "150%",
                    scrub: 1.5,
                    pin: true
                }
            })

            tl.to(".video-box", {
                clipPath: "circle(100% at 50% 50%)",
                ease: "power1.inOut"
            })
        }
    }, [])
    return (
        <section className='vd-pin-section -mt-[20%]'>
            <div style={{ clipPath: isMobile ? "circle(100% at 50% 50%)" : "circle(6% at 50% 50%)" }} className='size-full video-box'>
                <video src='/videos/pin-video.mp4' playsInline muted loop autoPlay />

                <div className='abs-center md:scale-100 scale-200'>
                    <img src='/images/circle-text.svg' className='spin-circle' />
                    <div className='play-btn'>
                        <img src='/images/play.svg' className='size-[3vw] ml-[.5vw]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoClip
