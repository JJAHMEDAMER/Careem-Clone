import React from 'react'
import { InfoCard } from './subComponent/InfoCard'
import rightArrow from "../assets/arrow_right.png"

export const Blog = () => {
    const blogs = [
        {
            imgURL: "https://upload-cdn.careem.com/Frame_26897_1_bb6a03ba30.png",
            title: "Stanford MBA students visit Careem",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum porro, vitae, quisquam numquam explicabo aperiam eaque repellat ut ullam",
        },
        // {
        //     imgURL: "https://upload-cdn.careem.com/Frame_26897_2_b7f6585029.png",
        //     title: "3 ways our software engineers use AI in their daily work",
        //     para: "Lorem ipsum dolor sit amet consectetur numquam explicabo aperiam eaque repellat ut ullam",
        // }
    ]
    return (
        <section className='bg-shape text-gray-800'>
            <div className='flex items-center justify-between px-4 mb-4'>
                <h1 className='text-3xl font-bold'>Our Blog</h1>
                <div className='flex items-center gap-2'>
                    <p>View all</p>
                    <img src={rightArrow} alt="" className='w-7' />
                </div>
            </div>
            <div className='flex gap-2 pl-4 w-96'>
                {
                    blogs.map((item, index) => (
                        <InfoCard
                            key={index}
                            imgURL={item.imgURL}
                            title={item.title}
                            para={item.para}
                        />
                    ))
                }
            </div>
        </section>
    )
}
