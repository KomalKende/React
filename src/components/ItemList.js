import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  // console.log(item);

  const dispatch = useDispatch()

  const handleAddItem = (itemmenu) => {
    //dispatch an action

    dispatch(addItem(itemmenu))

  }

  return (
    <div className="container">
      {item.map((itemmenu) => (
        <div
          key={itemmenu.card.info.id}
          className="p-2 text-left border-b-2 flex justify-between border-gray-300 border-solid m-4"
        >
          <div className="w-9/12 p-4">
            <span className="font-bold">{itemmenu.card.info.name}</span>
            <span>
              {" "}
              - ₹
              {itemmenu.card.info.price
                ? itemmenu.card.info.price / 100
                : itemmenu.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs my-2">{itemmenu.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="bg-white shadow-lg rounded-lg p-2 m-auto text-xs border-1 border-grey-500 font-bold
               text-green-500" onClick={() => handleAddItem(itemmenu)}>
                Add +
              </button>
            </div>
            <div className="bg-white rounded-lg">
              <img
                src={CDN_URL + itemmenu.card.info.imageId}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
