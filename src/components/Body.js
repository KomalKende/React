import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRes, setFilterRes] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //  console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); 
    setFilterRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

 
  return (listOfRestaurant.length === 0) ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input type="text" className="search-box" value={search} onChange={(e)=>{
            setSearch(e.target.value)
          }} />
          <button onClick={()=> {
            const filterRestaurants = listOfRestaurant.filter((res) => 
              res.info.name.toLowerCase().includes(search.toLowerCase()));
            setFilterRes(filterRestaurants);
          }}>Search</button>
        </div>

        <button
          onClick={() => {
            const TopResList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(TopResList);
          }}
        >
          Top Rating Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
