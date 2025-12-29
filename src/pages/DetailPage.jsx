import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function DetailPage() {
    
    const [data, setData]=useState()
    const {id}=useParams()

    useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())            
                .then(json=>setData(json))
    },[])
    
   

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-6">
        
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={data?.image}
            alt={data?.title}
            className="w-72 h-72 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{data?.title}</h1>

          <p className="text-gray-500 text-sm capitalize">
            Category: {data?.category}
          </p>

          <p className="text-gray-700">{data?.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-green-600">
              ${data?.price}
            </span>

            <span className="text-sm text-gray-600">
              ⭐ {data?.rating.rate} ({data?.rating.count} reviews)
            </span>
          </div>

          <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailPage