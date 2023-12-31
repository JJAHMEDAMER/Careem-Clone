import React from 'react'
import { BlogCard } from './subComponent/BlogCard'
import rightArrow from "../assets/arrow_right.png"

export const Blog = () => {
    const blogs = [
        {
            imgURL: "https://upload-cdn.careem.com/Frame_26897_1_bb6a03ba30.png",
            title: "Stanford MBA students visit Careem",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum porro, vitae, quisquam numquam explicabo aperiam eaque repellat ut ullam",
        },
        {
            imgURL: "https://upload-cdn.careem.com/Frame_26897_2_b7f6585029.png",
            title: "3 ways our software engineers use AI in their daily work",
            para: "Lorem ipsum dolor sit amet consectetur numquam explicabo aperiam eaque repellat ut ullam",
        },
        {
            imgURL: 'https://upload-cdn.careem.com/Frame_26897_3_2d3be98c80.png',
            title: "Careem Chapter 3",
            para: "Lorem ipsum dolor sit amet consectetur numquam explicabo aperiam eaque repellat ut ullam",
        }
    ]
    return (
        <section className='bg-shape text-gray-800'>
            <div className='px-4 lg:px-64 mt-6'>

                <div className='flex items-center justify-between  mb-4'>
                    <h1 className='text-3xl font-bold'>Our Blog</h1>
                    <div className='flex items-center gap-2'>
                        <p>View all</p>
                        <img src={rightArrow} alt="" className='w-7' />
                    </div>
                </div>

                <div className='w=full flex gap-4 lg:gap-12 overflow-x-auto overflow-y-hidden scroll-smooth hide-scroll-bar'>
                    {
                        blogs.map((item, index) => (
                            <BlogCard
                                key={index}
                                imgURL={item.imgURL}
                                title={item.title}
                                para={item.para}
                            />
                        ))
                    }
                </div>
                
            </div>
        </section>
    )
}
