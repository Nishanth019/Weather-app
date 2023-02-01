import React from 'react'

export default function TopButtons({setQuery}) {
    const cities = [
        {   id:1,
            title: "New York"
        },
        { 
            id:2,
            title: "London"
        },
        {
            id:3,
            title: "Delhi"
        },
        {
            id:4,
            title: "Tokyo"
        },
        {
            id:5,
            title: "Paris"
        }
    ]
  return (
        <div className="Tb flex items-center justify-around mt-6 mb-7 pt-6  ">
            {
                cities.map((city)=>(
                    
                    <button  key={city.id} onClick={()=>setQuery({q:city.title})} className="text-white text-lg font-medium hover:text-sky-400 abcd ">{city.title}</button>
                ))
            }
        </div>
  
  )
}
