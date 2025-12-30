import React from 'react'
import { useNavigate } from 'react-router'
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { RiZoomInFill } from "react-icons/ri";

function Card({ data }) {
    const navigate = useNavigate()
    return (
        <div className='w-[270px]  group shadow-2xl relative' >
            <div className='bg-[#F6F7FB] flex justify-center items-center px-5  '>
                <img src={data.image} alt="" className='w-[178px] aspect-square object-cover mt-5  ' />
            </div>

            <div className='flex flex-col items-center justify-center gap-5 mt-8 text-[#151875] 
            group-hover:bg-[#2F1AC4] group-hover:text-white'>
                <p className='text-[#FB2E86] text-2xl group-hover:text-white line-clamp-1'>{data.title}</p>
                <p className=' '>{data.category}</p>
                <p className=''>$ {data.price}</p>
            </div>

            <div className='hidden gap-5 absolute top-1 left-5 cursor-pointerz-3 group-hover:flex'>
                <CiShoppingCart />
                <FaRegHeart />
                <RiZoomInFill />
            </div>

        
                <button className='bg-green-400 px-8 py-2 rounded-sm hidden group-hover:block
                 absolute top-48 left-20 cursor-pointer' onClick={()=>navigate(`/${data.id}`)}>View</button>

         

        </div>
    )
}

export default Card