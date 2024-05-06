import React, { useState } from 'react'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'


function Home() {

  const [category,SetCategory] = useState('All');

  return (
    <div>
      <Header/>
      <ExploreMenu/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
