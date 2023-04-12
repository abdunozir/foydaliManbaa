import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        Dasturchi:{" "}
        <Link to={"https://t.me/mrabduvaliev"}>Abduvaliev Abdunozir</Link>
      </p>
    </div>
  );
}
