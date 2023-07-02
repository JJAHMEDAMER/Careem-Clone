import React from 'react'
import googlePlay from "../assets/google-play.webp"
import directAndroid from "../assets/apk-download.webp"

import facebookIcon from "../assets/facebook.png"
import instagramIcon from "../assets/instagram.png"
import linkedinIcon from "../assets/linkedin.png"
import twitterIcon from "../assets/twitter.png"


export const Footer = () => {
  return (
    <footer className='mx-auto text-center mb-8'>
      <div className='mb-4 flex flex-col justify-center items-center gap-2'>
        <img src={googlePlay} alt="googlePlay" className='w-40' />
        <img src={directAndroid} alt="directAndroid" className='w-40' />
      </div>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold text-green'>Services</h1>
        <ul className='font-semibold text-gray-800'>
          <li>GO</li>
          <li>Eat</li>
          <li>Get</li>
          <li>Pay</li>
          <li>Careem Plus</li>
        </ul>
      </div>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold text-green'>Partners</h1>
        <ul className='font-semibold text-gray-800'>
          <li>Lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>amet</li>
        </ul>
      </div>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold text-green'>Join Our Team</h1>
        <ul className='font-semibold text-gray-800'>
          <li>Lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>amet</li>
        </ul>
      </div>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold text-green'>About Us</h1>
        <ul className='font-semibold text-gray-800'>
          <li>Lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
          <li>amet</li>
        </ul>
      </div>
      <div>
        <div className='flex gap-12 mb-2'>
          <img src={facebookIcon} alt="facebook" />
          <img src={twitterIcon} alt="twitter" />
          <img src={linkedinIcon} alt="linkedin" />
          <img src={instagramIcon} alt="instagram" />
        </div>
        <div className='mb-14'>
          <ul className='flex gap-16 text-xs font-semibold'>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='text-xs'>
          <p className='mb-2'>All rights reserved. Careem</p>
          <p>2023</p>
        </div>
      </div>
    </footer>
  )
}
