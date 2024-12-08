import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

    const itemcards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
    c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

      // console.log(categories)

    return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold py-2 text-orange-500">{name}</h1>
      <h4 className="text-md py-1">{cuisines.join(", ")}</h4>
      <h3 className="text-md py-1">{costForTwoMessage}</h3>
      {
        categories.map((category)=> 
        (<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>))
      }
      
    </div>
  );
};

export default RestaurantMenu;
