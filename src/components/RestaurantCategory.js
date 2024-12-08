import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data}) => {
const [showItem, setShowItem]= useState(false)

    // console.log(data)
function handleClick (){
    console.log("clicked")
    setShowItem(!showItem)
}

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg border-solid">
        <div className='flex justify-between cursor-pointer' onClick={handleClick} >
        <span className='font-bold'>{data.title} ({data.itemCards.length})</span>
        <span>▼</span>
        </div>
        <div>
            {
                showItem ? <ItemList item={data.itemCards} /> : ""
               
            }
        </div>
      </div>
    </div>
  )
}

export default RestaurantCategory
