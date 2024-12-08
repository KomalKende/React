import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.map((itemmenu) => (
        <div key={itemmenu.card.info.id} className="p-2 text-left border-b-2 flex justify-between border-gray-300 border-solid m-4">
          <div className="w-10/12">
            <span className="font-bold">
                {itemmenu.card.info.name}
            </span>
            <span> - ₹ 
                {itemmenu.card.info.price ? itemmenu.card.info.price/100 : itemmenu.card.info.defaultPrice/100 }
            </span>
            <p className="text-xs my-2">{itemmenu.card.info.description}</p>
          </div>
          <div className="w-2/12">
          <div className="absolute">
          <button className="bg-white rounded-lg p-2 m-auto text-xs">Add +</button>
          </div>
          <img src={CDN_URL + itemmenu.card.info.imageId} className="w-full rounded-lg"/>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
