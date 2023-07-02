import React from 'react'
import { Button } from "./Button"

export const InfoCard = ({ imgURL, title, para, index }) => {
    return (
        <div className={`${index == 2 ? "bg-shape" : ""} w-full`}>
            <div className={`flex flex-col justify-center items-center gap-4 px-4 lg:px-64 md:px-36 ${index % 2 != 0 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center lg:justify-between`}>
                <img
                    src={imgURL}
                    alt="Office Image"
                    className='rounded-xl sm:max-w-md'
                />
                <div className='flex flex-col gap-4 sm:w-96'>
                    <h2 className='text-2xl font-semibold'>{title}</h2>
                    <p className='text-sm'>{para}</p>
                    <Button buttonColor={`${index == 2 ? "bg-white" : "bg-limeGreen"}`}/>
                </div>
            </div>
        </div>
    )
}
