 import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'
 
 const AllProducts = () => {

  const [openUploadProduct,setOpenUploadProduct]= useState(false)

   return (
     <div>
       <div className='bg-gray-100 py-2 px-4 flex justify-between  items-center'>
        <h2 className='font-bold text-lg'> All Products  </h2>
        <button className='border-2 border-red-500 py-2 px-2 rounded-full hover:bg-red-600 hover:text-white transition-all ' onClick={()=>setOpenUploadProduct(true)}> Upload Product</button>

       </div>

       {
        openUploadProduct && (
          <UploadProduct onclose={()=>setOpenUploadProduct(false)}/>

        )
       }



       
     </div>
   )
 }
 
 export default AllProducts
 