import React from 'react'
import { useNavigate } from 'react-router'

function Card({ data }) {
const navigate=useNavigate()
    return (
        <div className='h-[361px] w-[270px]' onClick={()=>navigate(`/${data.id}`)}>
            <div className='bg-[#F6F7FB] flex justify-center items-center'>
                <img src={data.image} alt="" className='h-[178px] aspect-square' />
            </div>

            <div className='flex  flex-col items-center gap-5 mt-2 text-[#151875]'>
                <p className='text-[#FB2E86] text-2xl'>{data.title}</p>
                <p className=''>{data.category}</p>
                <p className=''>$ {data.price}</p>
            </div>
        </div>
    )
}

export default Card