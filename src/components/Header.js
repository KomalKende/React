import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnLogName, setBtnLogName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
