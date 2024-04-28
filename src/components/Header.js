import React from 'react'
import Logo from './Logo'
import { GoSearch } from "react-icons/go";
import { FaUserCircle  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className='h-full flex items-center px-4  container mx-auto justify-between'>
        <div className=''>
         <Link to={"/"}> <Logo w={90} h={50}/></Link>
        </div>

        <div className=' hidden  md:flex   w-full justify-between max-w-sm items-center  border rounded-full pl-2 focus-within:shadow'>
         <input className='w-full outline-none ' type='text' placeholder='user search item'/>
         <div className='text-lg w-13 px-4 h-7 bg-red-500 flex items-center rounded-r-full'>
         <GoSearch />
         </div>
      </div>

      <div className='flex items-center  gap-6'>

      <div className='text-3xl   cursor-pointer   '>
      <FaUserCircle />
      </div>

      <div className='text-3xl cursor-pointer relative'>
     <span> <FaCartShopping /></span>
     <div className=' p-1 text-white   w-5  h-5 flex items-center bg-red-500 rounded-full justify-center absolute  -top-2   -right-3'>
      <p className='text-sm' >0</p>
     </div>
      </div>
       
       <div>
       <Link to={"login"}> <button className='px-3 py-1 rounded-full bg-rose-500 hover:bg-red-600'> Login</button></Link>
       </div>
      </div>

      </div>
     
    </header>
  )
}

export default Header
