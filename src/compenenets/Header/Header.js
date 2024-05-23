import { React, useState } from "react";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

import "./Header.css";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          onClick={() => setMenuOpened(true)}
          style={{
            background: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              span={"true"}
              smooth={true}
              activeClass="active"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programe"
              span={"true"}
              smooth={true}
            >
              programe
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              span={"true"}
              smooth={true}
            >
              wy us
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              span={"true"}
              smooth={true}
            >
              plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testemonials"
              span={"true"}
              smooth={true}
            >
              testemonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
