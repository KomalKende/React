import {CDN_URL} from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
      <div>
        <div className="res-card">
          <img
            className="res-logo"
            src={CDN_URL +
              cloudinaryImageId} alt="res-logo"
          />
          <h3>{name}</h3>
          <p>{cuisines.join(", ")}</p>
          <p>{avgRating} Stars</p>
          <div className="costtime">
            <div>
              <p>{costForTwo} </p>
            </div>
            <div>
              <p>{sla?.slaString} </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default RestaurantCard;