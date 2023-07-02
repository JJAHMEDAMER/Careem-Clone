import React from 'react'
import { Button } from './subComponent/Button'

export const InfoSection = () => {
    return (
        <section className='flex flex-col gap-16 text-gray-800'>
            <div className='flex flex-col gap-4 px-4 md:px-36'>
                <img
                    src="https://upload-cdn.careem.com/About_us_updt_48b263b2f9.png"
                    alt="Office Image"
                    className='rounded-xl'
                />
                <h2 className='text-2xl font-semibold'>About us</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet iusto aspernatur accusamus illum doloremque, consequatur dolorem, numquam ipsa quos reprehenderit atque iure? Exercitationem, deleniti quam!</p>
                <Button />
            </div>
            <div className='bg-shape'>
                <div className='flex flex-col gap-4 px-4 md:px-36'>
                    <img
                        src='https://upload-cdn.careem.com/Captain_homepage_582e60a230.png '
                        alt="Office Image"
                        className='rounded-xl'
                    />
                    <h2 className='text-2xl font-semibold'>Captains</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eos quasi. Officiis ex quod iusto aspernatur  deleniti quam!</p>
                    <Button buttonColor='bg-white'/>
                </div>
            </div>
            <div className='flex flex-col gap-4 px-4 md:px-36'>
                <img
                    src='https://upload-cdn.careem.com/Engineering_at_careem_jpg_362a4b3399.png'
                    alt="Office Image"
                    className='rounded-xl'
                />
                <h2 className='text-2xl font-semibold'>Engineering at Careem</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eos quasi. Officiis ex quod iusto aspernatur accusamus illum doloremque, consequatur dolorem, numquam ipsa quos reprehenderit atque iure? Exercitationem, deleniti quam!</p>
                <Button />
            </div>
            <div className='flex flex-col gap-4 px-4 md:px-36'>
                <img
                    src='https://upload-cdn.careem.com/Our_social_impact_jpg_827fcf5f72.png' alt="Office Image"
                    className='rounded-xl'
                />
                <h2 className='text-2xl font-semibold'>Our social Impact</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eos quasi. Officiis ex quod iusto aspernatur accusamus illum doloremque, consequatur dolorem, numquam ipsa quos reprehenderit atque iure? Exercitationem, deleniti quam!</p>
                <Button />
            </div>
        </section>
    )
}
