import React from 'react'
import hamburger from "../assests/hamburger.png"
import home_Logo from "../assests/home_logo.jpg"
import profile from "../assests/profile.png"
import search from "../assests/search.png"
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=> {
    dispatch(toggleMenu());
  }

  return (
    <div className='flex justify-between'>
      <div className='flex ml-2 align-middle'>
        <img onClick={toggleMenuHandler} className='h-16 w-18 ' src={hamburger} alt="hamburger" />
        <img className='mt-1 h-14 w-18' src={home_Logo} alt="icon" />
      </div>
      <div className='mt-3'>
        <input placeholder='Search' className='w-[36rem] h-11 rounded-l-3xl border-[1px] px-6 text-[1rem] border-gray-300 focus:outline-none focus:ring focus:ring-gray-100' type="text"/>
        <button className='w-16 h-[2.7rem] pb-[2.8px] rounded-r-3xl border-[1px] border-gray-300 bg-gray-50 hover:bg-gray-100' ><img className='w-4 h-4 ml-5' src={search} alt="" /></button>
      </div>
      <div className='mr-10'>
        <img className='w-9 h-9 m-3' src={profile} alt="" />
        <img src="./ass " alt="" />
      </div>
    </div>
  )
}

export default Header
