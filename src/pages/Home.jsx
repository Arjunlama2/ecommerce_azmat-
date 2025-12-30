import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

function Home() {
const [data, setData]=useState()
useEffect(()=>{
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>setData(json))
},[])


    return (
       <>
       
       <div className='grid gap-3 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 mx-12'>

  
       {
        data?.map((el)=>{
return <Card data={el}/>
        })
       }
            </div>
       </>
    )
}

export default Home