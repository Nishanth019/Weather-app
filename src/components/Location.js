import React from 'react'

export default function Location({weather:{dt,country,name,timezone}}) {
  
  return (<>
    <div className=" location1 flex items-center justify-center my-6">
      <p className="text-white text-3xl font-medium">
         {`${name}, ${country}`}
      </p>
      </div></>
  )
}
