import React from 'react'
import {assets} from '../../assets/assets'

function Footer() {
  return (
    <div className='footer bg-gray-700 text-white flex px-7 py-7 pt-6 flex-col gap-5 mt-10 items-center'>
      <div className='footer-content w-[100%] grid grid-cols-3 gap-10'>
        <div className='footer-left flex flex-col items-start gap-5'>
          <img src={assets.logo} alt="logo"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quam atque sapiente dolores adipisci sequi deserunt libero corrupti ullam ducimus et nemo sed debitis, doloremque ratione quos hic tenetur minus.</p>
          <img src={assets.facebook_icon} alt="facebook-icon"/>
          <img src={assets.twitter_icon} alt="twitter-icon"/>
          <img src={assets.linkedin_icon} alt="linkedin-icon"/>
        </div>
        <div className='footer-center flex flex-col items-start gap-5'>
          <h2 className='text-2xl'>CONTENT</h2>
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </div>
        <div className='footer-right flex flex-col items-start gap-5'>
          <h2 className='text-2xl'>
            CONTACT-US
          </h2>
          <p>+1-222-155-4567</p>
          <a href="#">contact@tomato.com</a>
        </div>
        <div>
          Copyright@tomato.com-All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
