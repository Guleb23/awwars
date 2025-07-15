import React, { useRef, useState } from 'react'
import { cards } from '../Constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Respect = () => {

    const videoRef = useRef([]);

    useGSAP(() => {

        gsap.set(".testimonials-section", {
            marginTop: "-70vh"
        })


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "200% top",
                scrub: true,

            }
        })
        tl.to(".testimonials-section .first-title", {
            xPercent: 70
        }, "<").to(".testimonials-section .second-title", {
            xPercent: 25
        }, "<").to(".testimonials-section .three-title", {
            xPercent: -50
        }, "<")

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "10% top",
                end: "200% top",
                scrub: 1.5,
                pin: true
            }
        })

        pinTl.from(".vd-card", {
            yPercent: 150,
            stagger: 0.5,
            ease: "power1.inOut"
        })
    }, [])


    const handlePlay = (index) => {
        const video = videoRef.current[index];
        video.play();


    }
    const handlePause = (index) => {
        const video = videoRef.current[index];
        video.pause();

    }
    return (
        <section className='testimonials-section'>
            <div className='absolute size-full flex flex-col items-center pt-[5vw]'>
                <h1 className='text-black first-title'>Whats</h1>
                <h1 className='text-light-brown second-title'>Everyone</h1>
                <h1 className='text-black three-title'>Talking</h1>
            </div>
            <div className='pin-box'>
                {
                    cards.map((video, index) => (
                        <div
                            onMouseEnter={() => handlePlay(index)}
                            onMouseLeave={() => handlePause(index)}
                            className={`vd-card ${video.rotation} ${video.translation}`}
                            key={index}>
                            <video
                                ref={(el) => { videoRef.current[index] = el }}
                                src={video.src}
                                playsInline
                                muted
                                loop
                                className='size-full object-cover' />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Respect
