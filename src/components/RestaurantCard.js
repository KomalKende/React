import { useContext } from 'react';
import {CDN_URL} from '../utils/constants';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
    const { resData } = props;
    const {LoggedInUser} = useContext(UserContext)
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
      <div>
        <div className="m-2 p-4 w-[280px] border border-solid border-slate-200 rounded-lg hover:shadow-lg ">
          <img
            className=""
            src={CDN_URL +
              cloudinaryImageId} alt="res-logo"
          />
          <h3 className='text-lg font-bold py-2 text-orange-500'>{name}</h3>
          <p className='text-sm py-2'>{cuisines.join(", ")}</p>
          <p className='text-sm py-2'>{avgRating} Stars</p>
          <div className="costtime">
            <div>
              <p className='text-sm py-2'>{costForTwo} </p>
            </div>
            <div>
              <p className='text-sm py-2'>{sla?.slaString} </p>
            </div>
            <div>
              <h5>User - {LoggedInUser}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  };

  
  export default RestaurantCard;