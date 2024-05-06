import React, { useState } from "react";
import { assets } from "../../assets/assets";

function FoodItem({ id, name, price, description, image }) {

  const[itemCount,setitemCount] = useState(0)

  return (
    <div className="single-food-list relative overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer bg-custom-white rounded-2xl shadow-md">
      <div className="h-48 overflow-hidden relative">
        <img src={image} alt="foodImages" className="w-full h-full object-cover" />
        {
          (itemCount=== 0) ? <img src={assets.add_icon_white} onClick={()=> setitemCount(pre=>pre+1)} alt="add" className="add absolute right-1 bottom-2 w-8  cursor-pointer" />:
          <div className="item-count-container bg-white gap-1 p-1 flex items-center absolute right-1 bottom-2 rounded-3xl">
            <img src={assets.remove_icon_red} onClick={()=> setitemCount(pre=>pre-1)}  className="remove-green w-7" />
             <p className='item-count-number'>{itemCount}</p>
             <img src={assets.add_icon_green} onClick={()=> setitemCount(pre=>pre+1)}  className="add-green w-7" />
          </div>
        }
      </div>
      <div className="p-4">
      <div className="flex justify-between mb-2">
          <p className="text-lg font-bold text-gray-800">{name}</p>
          <p className="text-lg font-bold text-gray-800">₹{price}</p>
          <img src={assets.rating_starts} alt="Rating" className="h-4 w-auto mr-1" />
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
