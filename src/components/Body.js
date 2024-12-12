import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import UserContext from "../utils/UserContext";

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

    const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you are offline..!!<br></br> 
  Please check your internet connection.!</h1>

  // console.log(listOfRestaurant)
   const {LoggedInUser, setUserName} = useContext(UserContext)

 
  return (listOfRestaurant.length === 0) ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="search-container">
          <input type="text" className="border border-solid border-black px-2 py-1 m-2" value={search} onChange={(e)=>{
            setSearch(e.target.value)
          }} />
          <button className="px-4 py-2 bg-green-200 m-4 rounded-lg" onClick={()=> {
            const filterRestaurants = listOfRestaurant.filter((res) => 
              res.info.name.toLowerCase().includes(search.toLowerCase()));
            setFilterRes(filterRestaurants);
          }}>Search</button>
        </div>

        <button className="px-4 py-2 bg-slate-300 m-4 rounded-lg"
          onClick={() => {
            const TopResList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(TopResList);
          }}
        >
          Top Rating Restaurants
        </button>
        <div>
          <label>UserName: </label>
          <input type="text" className="border-1 border-black p-1 border-solid" value={LoggedInUser} onChange={(e)=> {setUserName(e.target.value)}} />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {filterRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
           
             <RestaurantCard resData={restaurant}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
