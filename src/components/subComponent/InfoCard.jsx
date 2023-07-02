import React from 'react'

export const InfoCard = ({ imgURL, imgAlt = null, title, para }) => {
    return (
        <div className='flex flex-col gap-3 flex-shrink-0 w-64'>
            <img
                src={imgURL}
                alt={imgAlt}
                className='rounded-3xl mb-5'
            />
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p className='font-light'>{para}</p>
            <button className='bg-white self-start px-4 py-2 font-semibold rounded-md text-sm flex-grow-0'>Read More</button>
        </div>
    )
}
