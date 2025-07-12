import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const FlavorTitle = () => {

    useGSAP(() => {
        const firstSplit = SplitText.create(".first-text-split", { type: "chars" });
        const secondSplit = SplitText.create(".second-text-split", { type: "chars" });

        gsap.from(firstSplit.chars,

            {
                opacity: 0,
                y: 200,
                ease: "power1.inOut",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#flavor",
                    start: "top center",
                    onUpdate: (self) => {
                        if (window.smoother) {
                            window.smoother.scrollTrigger(self);
                        }
                    },
                }
            })

        gsap.to(".flavor-text-scroll",
            {
                clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
                ease: "power1.inOut",
                duration: 1,
                scrollTrigger: {
                    trigger: "#flavor",
                    start: "top 30%",
                    onUpdate: (self) => {
                        if (window.smoother) {
                            window.smoother.scrollTrigger(self);
                        }
                    },
                }
            })

        gsap.from(secondSplit.chars,

            {
                opacity: 0,
                y: 200,
                ease: "power1.inOut",
                stagger: 0.09,
                duration: 0.2,
                scrollTrigger: {
                    trigger: "#flavor",
                    start: "top 20%",
                    onUpdate: (self) => {
                        if (window.smoother) {
                            window.smoother.scrollTrigger(self);
                        }
                    },
                }
            })
    }, [])

    return (
        <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
            <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
                <h1>We have 6</h1>
            </div>

            <div
                style={{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                }}
                className="flavor-text-scroll"
            >
                <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
                    <h2 className="text-milk">freaking</h2>
                </div>
            </div>

            <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
                <h1>delicious flavors</h1>
            </div>
        </div>
    );
};

export default FlavorTitle
