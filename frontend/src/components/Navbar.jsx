import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {Link, NavLink} from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext'

const Navbar = () => {
    const {setShowSearch ,getCartCount}= useContext(Shopcontext)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <Link to='/'><img src={ assets.logo } className='w-36' alt="logo" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink  to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink  to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink  to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink  to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search} className='w-5 cursor-pointer' alt="search" />
            <div className='group relative'>
                <img src={assets.profile} className='w-6 cursor-pointer' alt="profile" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 p-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <div className='relative'>
            <Link to="/cart" classname="relative">
                <img src={assets.cart} className='w-8 min-w-8' alt="cart" />
                <p className='absolute right-[-2px] bottom-[-1px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[12px]'>{getCartCount()}</p>
            </Link>
            </div>
        
        </div>
        
      
    </div>
  )
}

export default Navbar
