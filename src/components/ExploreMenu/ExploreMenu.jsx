import React from 'react';
import {menu_list} from '../../assets/assets';
import { useState } from 'react';

function ExploreMenu() {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <h2 className='px-12 py-2 mt-4 mb-4' style={{fontSize:'24px', fontWeight: 'bold', color: 'black', fontFamily:'Outfit'}}>What's in your mind?</h2>
      <div className='flex flex-row gap-4 justify-between text-center m-8'>
        {menu_list.map((item,index)=>{
          return (
            <div key={index} className={`cursor-pointer ${selectedItem === index ? 'zoom' : ''}`}
            onClick={() => handleItemClick(index)}>
              <img src={item.menu_image} alt="menu-list"/>
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
