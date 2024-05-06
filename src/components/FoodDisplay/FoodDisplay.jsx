import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

function FoodDisplay({category}) {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2 className='px-12 py-2 mt-4 mb-4' style={{fontSize:'24px', fontWeight: 'bold', color: 'black', fontFamily:'Outfit'}}>Top Dishes near you</h2>
      <div className='food-list-display px-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5' style={{marginTop: '30px'}}>
        {food_list.map((item,index)=>{
          return <FoodItem key={index} id={item._id}  image={item.image} name={item.name} description={item.description} price={item.price}/>
        })}
      </div>
      
    </div>
  )
}

export default FoodDisplay
