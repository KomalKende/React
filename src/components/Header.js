import { useContext, useState } from "react";
import React from "react";

import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnLogName, setBtnLogName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {LoggedInUser}= useContext(UserContext);
  console.log(LoggedInUser)

  return (
    <div className="flex justify-between bg-white shadow-md mb-2">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" className="w-40" />
      </div>
      <div className="flex items-center px-4">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to='/'>Home</Link></li>
          <li className="px-4"><Link to='/about'>About</Link></li>
          <li className="px-4"><Link to='/contact'>Contact</Link></li>
          <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button className="px-4 py-2 bg-green-200 rounded-lg" 
              onClick={() => {
                btnLogName === "Login"
                  ? setBtnLogName("Logout")
                  : setBtnLogName("Login");
              }}
            >
              {btnLogName}
            </button>
          </li>
          <li className="px-4">{LoggedInUser}</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
