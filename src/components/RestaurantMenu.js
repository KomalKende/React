import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemcards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(itemcards);

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold py-2 text-orange-500">{name}</h1>
      <h4 className="text-md py-1">{cuisines.join(", ")}</h4>
      <h3 className="text-md py-1">{costForTwoMessage}</h3>
      <h2 className="text-md font-bold text-orange-500 py-2 my-2" >Menu</h2>
      <ul>
        {itemcards.map((item) => (
          <li key={item.card.info.id} className="pl-4 mb-2">
           - {item.card.info.name} - <span>Rs.{item.card.info.price / 100}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
