import React, { useState } from 'react'
import Logo from './Logo'
import { GoSearch } from "react-icons/go";
import { FaUserCircle  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import { store } from '../store/store';
import ROLE from '../common/role';


const Header = () => {

  const dispatch= useDispatch()

  const navigate =useNavigate()

  const user =useSelector(state=>state?.user?.user)

  const [menuDisplay,setMenuDisplay] = useState(false)

  console.log("user",user);

  const handleLogout= async()=>{
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method: SummaryApi.logout_user.method,
      credentials:'include'
    })

    const data = await fetchData.json();

    console.log(data);

    if(data.success){
      toast.success(data.message)
      navigate('/login')

      dispatch(setUserDetails(null))

    }

    if(data.error){
      toast.error(data.message)
    }

   

  }



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

     <div className='relative group flex justify-center'>

      {

        user?._id && (

          <div className='text-3xl   cursor-pointer    ' onClick={()=>setMenuDisplay(preve=>!preve)}>

         {
          user?.profilePic ? (
            <img src= {user?.profilePic} className='w-10 rounded-full h-10' alt={user?.name}/>
          ): (
            <FaUserCircle />

          )
        }
      
         </div>

        )
      }
        
         {
          menuDisplay && (

            <div className=' absolute bg-white bottom-0 top-11 h-fit shadow-lg p-2'>
          <nav>
            {
              user?.role===ROLE.ADMIN &&(
                <Link to ={'/admin-panel/all-users'} className='whitespace-nowrap hover:bg-slate-100 p-2 hidden md:block' onClick={()=>setMenuDisplay(preve=>!preve)}>Admin Panel</Link>
         

              )
            }

            
            </nav>
         </div>

          )
         }
         
      </div>

      <div className='text-3xl cursor-pointer relative'>
     <span> <FaCartShopping /></span>
     <div className=' p-1 text-white   w-5  h-5 flex items-center bg-red-500 rounded-full justify-center absolute  -top-2   -right-3'>
      <p className='text-sm' >0</p>
     </div>
      </div>
       
       <div>

        {
          user?._id?(
            <button onClick={handleLogout} className='px-3 py-1 rounded-full bg-rose-500 hover:bg-red-600'>Logout</button>
          ):(
            // <button className='px-3 py-1 rounded-full bg-rose-500 hover:bg-red-600'>LogIn</button>
            <Link to={"login"}> <button className='px-3 py-1 rounded-full bg-rose-500 hover:bg-red-600'> Login</button></Link>
      
          )
        }
        </div>
      </div>

      </div>
     
    </header>
  )
}

export default Header
