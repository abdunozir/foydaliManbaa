import React from "react";

import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1 className="NotFound_title">404</h1>
      <p className="NotFound_desc">Sahifa topilmadi</p>
      <Link to={"/"} className="NotFound_btn">
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
