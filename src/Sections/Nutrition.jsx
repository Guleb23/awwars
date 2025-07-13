import React, { useEffect, useState } from 'react'
import { nutrientLists } from '../Constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
import { SplitText } from 'gsap/all'

const Nutrition = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const [lists, setLists] = useState(nutrientLists);

    useEffect(() => {
        if (isMobile) {
            setLists(nutrientLists.slice(0, 3));
        } else {
            setLists(nutrientLists);
        }
    }, [isMobile]);
    useGSAP(() => {
        const titleSplit = SplitText.create(".nutrition-title", { type: "chars" });
        const paragraphSlit = SplitText.create(".nutr-par", { type: "lines" });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top top",
                end: isMobile ? "10% top" : "15% top",
                scrub: true,
                markers: true
            }
        });
        tl.from(titleSplit.chars,
            {
                x: isMobile ? -500 : -1000,
                ease: "power1.inOut",
                stagger: 0.1,
            })

        tl.to(".nutrition-text-scroll",
            {
                clipPath: "polygon(100% 0, 0% 0, 0% 100%, 100% 100%)",
                opacity: 1,
                duration: 1
            })


        tl.from(paragraphSlit.lines, {
            x: isMobile ? -500 : 500,
            stagger: 0.2
        })
    }, [])


    return (
        <section className="nutrition-section">
            <img
                src="/images/slider-dip.png"
                alt=""
                className="w-full object-cover"
            />

            <img src="/images/big-img.png" alt="" className="big-img" />

            <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
                <div className="relative inline-block md:translate-y-20">
                    <div className="general-title relative flex flex-col justify-center items-center gap-24">
                        <div className="overflow-hidden place-self-start">
                            <h1 className="nutrition-title">It still does</h1>
                        </div>
                        <div
                            style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                            }}
                            className="nutrition-text-scroll place-self-start"
                        >
                            <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                                <h2 className="text-milk-yellow">Body Good</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex md:justify-center items-center translate-y-5">
                    <div className="md:max-w-xs max-w-md">
                        <p className="text-lg md:text-right text-balance font-paragraph nutr-par">
                            Milk contains a wide array of nutrients, including vitamins,
                            minerals, and protein, and this is lactose free
                        </p>
                    </div>
                </div>

                <div className="nutrition-box">
                    <div className="list-wrapper">
                        {lists.map((nutrient, index) => (
                            <div key={index} className="relative flex-1 col-center">
                                <div>
                                    <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                                    <p className="font-paragraph text-sm mt-2">up to</p>
                                    <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                                        {nutrient.amount}
                                    </p>
                                </div>

                                {index !== lists.length - 1 && (
                                    <div className="spacer-border" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nutrition
