import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

import "./Header.css";
import SiteBar from "../SiteBar/SiteBar";

export default function Header() {
  const location = useLocation();
  let [openHeader, setOpenHeader] = useState(false);
  return (
    <div className="header">
      <h2>
        <Link className="header_logo" to={"/"}>
          Foydali Manbaa
        </Link>
      </h2>
      <nav className="nav">
        <ul className="nav_ul">
          <li>{/* <Link>Bosh sahifa</Link> */}</li>
          <li>
            <Link
              to={"/"}
              className={location.pathname === "/" ? "active" : ""}
            >
              Optik aniqlash
            </Link>
          </li>
          <li>
            <Link
              to={"/krillotin"}
              className={location.pathname === "/krillotin" ? "active" : ""}
            >
              Kiril & lotin
            </Link>
          </li>
          <li>
            <Link
              to={"/oqibberish"}
              className={location.pathname === "/oqibberish" ? "active" : ""}
            >
              Matin & audio
            </Link>
          </li>
          <li>
            <Link
              to={"/aloqa"}
              className={location.pathname === "/aloqa" ? "active" : ""}
            >
              Aloqa
            </Link>
          </li>
        </ul>
      </nav>
      <BiMenuAltLeft className="nav_icon" onClick={() => setOpenHeader(true)} />
      <SiteBar openHeader={openHeader} setOpenHeader={setOpenHeader} />
    </div>
  );
}
