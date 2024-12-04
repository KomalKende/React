import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogName, setBtnLogName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                btnLogName === "Login"
                  ? setBtnLogName("Logout")
                  : setBtnLogName("Login");
              }}
            >
              {btnLogName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
