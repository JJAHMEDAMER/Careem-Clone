import React from 'react'
import { Button } from "./Button"

export const InfoCard = ({ imgURL, title, para, index }) => {
    return (
        <div className={`${index == 2 ? "bg-shape" : ""}`}>
            <div className={`flex flex-col gap-4 px-4 lg:px-64 md:px-36 ${index % 2 != 0 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center lg:justify-between`}>
                <img
                    src={imgURL}
                    alt="Office Image"
                    className='rounded-xl max-w-md'
                />
                <div className='flex flex-col gap-4 w-96'>
                    <h2 className='text-2xl font-semibold'>{title}</h2>
                    <p className='text-sm'>{para}</p>
                    <Button buttonColor={`${index == 2 ? "bg-white" : "bg-limeGreen"}`}/>
                </div>
            </div>
        </div>
    )
}
