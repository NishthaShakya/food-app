import React from 'react'
import { assets } from '../../assets/assets'
function Header() {
  return (
    <header className="m-auto relative h-[34vw] bg-cover bg-center" style={{backgroundImage: `url(${assets.header_img})`}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
    <h2 className="text-3xl font-bold mb-2 animate-fade-in">Order Your Food Here</h2>
    <p className="text-lg mb-4 animate-fade-in">Choose from our diverse Menu</p>
    <button className=" hover:bg-custom-orange hover:text-white text-white font-bold py-2 px-4 rounded animate-fade-in">
      View Menu
    </button>
  </div>
</header>
  )
}

export default Header
