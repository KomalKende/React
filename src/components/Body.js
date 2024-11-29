import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData';
import { useState } from 'react';
  
const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
      <div className="body">
        <div className="filter">
         
          <button onClick={()=> {
            const TopResList = listOfRestaurant.filter((res)=> (
              res.info.avgRating>4
            ))
            setListOfRestaurant(TopResList)
          }}>Top Rating Restaurants</button>
        </div>
        <div className="res-container">
          {
            listOfRestaurant.map((restaurant)=>
            (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )
            )
          }       
        </div>
      </div>
    );
  };

  export default Body;