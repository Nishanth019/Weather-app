import React from 'react'
import { useState } from 'react'
import { UilSearch , UilLocationPoint } from '@iconscout/react-unicons'
export default function Inputs({setQuery , units , setUnits}) {
  const [city, setCity] = useState("")
  const handleSearch = (e) =>{
    e.preventDefault();
    if(city!==""){
    setQuery({q:city})
    }
    setCity("");
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  const handleLocation = (e) =>{
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((position)=>{
      setQuery({lat:position.coords.latitude,lon:position.coords.longitude})
    })
  }
  const handleUnitsChange = (e) =>{
    e.preventDefault();
    const selectedUnit = e.target.name;
    if(selectedUnit !== units){
      setUnits(e.target.name)
    }
   
  }

  return (
    <div className="flex flex-row justify-center ">
        <div className="flex flex-row justify-center items-center  space-x-4">
            <input type="text"  onKeyDown={handleKeyDown} value={city} onChange={(e)=>setCity(e.target.value)} placeholder="search for city..." className="text-md  font-light p-2 focus:outline-none capitalize placeholder:lowercase w-3/4 rounded-md" />
            <UilSearch onClick={handleSearch} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            <UilLocationPoint onClick={handleLocation} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button onClick={handleUnitsChange} name="metric" className="text-white text-lg font-medium text-white cursor-pointer transition ease-out hover:scale-125">°C</button>
                <div className="m-1 mb-2 text-white">|</div>
                <button  onClick={handleUnitsChange}  name="imperial" className="text-white text-lg font-medium text-white cursor-pointer transition ease-out hover:scale-125">°F</button>
            </div>
        </div>
    </div>
  )
}
