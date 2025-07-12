import React from 'react'

const FlavorCard = ({ name, color, rotation }) => {
    return (
        <div className={`${rotation || ""} relative z-30 lg:w-[50%] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none`}>
            <img src={`/images/${color}-bg.svg`} className='absolute bottom-0' />
            <img src={`/images/${color}-drink.webp`} className='drinks' />
            <img src={`/images/${color}-elements.webp`} className='elements' />
            <h1>{name}</h1>

        </div>
    )
}

export default FlavorCard
