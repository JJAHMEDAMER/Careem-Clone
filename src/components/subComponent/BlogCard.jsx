import React from 'react'
import { Button } from './Button'

export const BlogCard = ({ imgURL, imgAlt = null, title, para }) => {
    return (
        <div className='flex flex-col gap-3 flex-shrink-0 w-64 lg:w-72'>
            <img
                src={imgURL}
                alt={imgAlt}
                className='rounded-2xl mb-5'
            />
            <h2 className='text-xl lg:text-3xl font-semibold'>{title}</h2>
            <p className='font-light'>{para}</p>
            <Button buttonColor='bg-white' />
        </div>
    )
}
