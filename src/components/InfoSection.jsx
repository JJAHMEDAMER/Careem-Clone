import React from 'react'
import { InfoCard } from './subComponent/InfoCard'

export const InfoSection = () => {
    const info = [
        {
            imgURL: 'https://upload-cdn.careem.com/About_us_updt_48b263b2f9.png',
            title: "About us",
            para: 'Lorem ipsum dolor sit amet iusto aspernatur accusamus illum doloremque, consequatur dolorem, numquam ipsa quos reprehenderit atque iure? Exercitationem, deleniti quam!'
        },
        {
            imgURL: 'https://upload-cdn.careem.com/Captain_homepage_582e60a230.png',
            title: "Captains",
            para: 'Lorem ipsum dolor sit amet iusto aspernatur accusamus illum doloremque, consequatur dolorem, numquam ipsa quos reprehenderit atque iure? Exercitationem, deleniti quam!'
        },
        {
            imgURL: 'https://upload-cdn.careem.com/Engineering_at_careem_jpg_362a4b3399.png',
            title: "Engineering at Careem",
            para: 'Lorem ipsum dolor sit amet iusto aspernatur accusamus illum doloremque, consequatur dolorem, numquam ipsa quos reprehenderit atque iure? Exercitationem, deleniti quam!'
        },
        {
            imgURL: 'https://upload-cdn.careem.com/Our_social_impact_jpg_827fcf5f72.png',
            title: "Our social Impact",
            para: 'Lorem ipsum dolor sit amet iusto aspernatur accusamus illum doloremque, consequatur dolorem, numquam ipsa quos reprehenderit atque iure? Exercitationem, deleniti quam!'
        }
    ]

    return (
        <section className='flex flex-col gap-16 text-gray-800'>
            {
                info.map((item, index) => <InfoCard key={index} index={index} imgURL={item.imgURL} title={item.title} para={item.para} />)
            }
        </section>
    )
}
