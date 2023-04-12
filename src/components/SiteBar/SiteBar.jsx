import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./SiteBar.css";

export default function SiteBar({ openHeader, setOpenHeader }) {
  const location = useLocation();
  return (
    <div
      className="SiteNav"
      onClick={() => setOpenHeader(false)}
      id={`${openHeader ? "" : "closeHeade"}`}
    >
      <ul className="SiteNav_ul">
        <li>
          <Link
            onClick={() => setOpenHeader(false)}
            className="SiteNav_logo"
            to={"/"}
          >
            foydali Manbaa
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            onClick={() => setOpenHeader(false)}
            className={location.pathname === "/" ? "active" : ""}
          >
            Optik aniqlash
          </Link>
        </li>
        <li>
          <Link
            to={"/krillotin"}
            onClick={() => setOpenHeader(false)}
            className={location.pathname === "/krillotin" ? "active" : ""}
          >
            Kiril & lotin
          </Link>
        </li>
        <li>
          <Link
            to={"/oqibberish"}
            onClick={() => setOpenHeader(false)}
            className={location.pathname === "/oqibberish" ? "active" : ""}
          >
            Matin & audio
          </Link>
        </li>
        <li>
          <Link
            to={"/aloqa"}
            onClick={() => setOpenHeader(false)}
            className={location.pathname === "/aloqa" ? "active" : ""}
          >
            Aloqa
          </Link>
        </li>
      </ul>
    </div>
  );
}
