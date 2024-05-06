import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { assets } from '../../assets/assets'

function Login({setShowLogin}) {

  const [CurrentState,setCurrentState] = useState("Sign Up")
  return (
    <div>
      <div>{CurrentState}</div>
      <img src= {assets.cross_icon} alt="" className='cursor-pointer' onClick={()=> {setShowLogin(false)}}/>
      <div>
        <input type="text" placeholder='Enter name' />
        <input type="password" placeholder='Enter Password' />
        <button type='submit' onClick={()=>{setShowLogin()}}>Login</button>
      </div>
    </div>
  )
}

export default Login
