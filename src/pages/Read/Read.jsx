import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Read.css";

export default function Read() {
  let [src, setSrc] = useState(null);
  let [lang, setLang] = useState("en");
  let [text, setText] = useState(null);
  //   useEffect(() => {
  //     axios
  //       .get(`https://krillotinapp.herokuapp.com/read?lang=${lang}&text=${text}`)
  //       .then((res) => {
  //         console.log(res);
  //         setSrc(res.data);
  //         //   setResult(res.data.result);
  //       });
  //   });
  return (
    <div className="read">
      <div className="read_alert">
        <p>Quyidagi inputga matinni yozing va audioni yuklab oling!</p>
      </div>
      <div className="read_inputs">
        <select
          onChange={(e) => setLang(e.target.value)}
          className="read_select"
          name=""
          id=""
        >
          <option value="en" defaultValue>
            Tilni tanlang
          </option>
          <option value="en">Engliz tili</option>
          <option value="ru">Rus tili</option>
          <option value="fr">Frensus tili</option>
          <option value="de">German tili</option>
          <option value="es">Ispan tili</option>
          <option value="tr">Turk tili</option>
          <option value="ko">Korea tili</option>
          <option value="it">Italia tili</option>
          <option value="zh">Chinese tili</option>
        </select>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Matinni buyerga yozing..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        {text ? (
          <a
            href={`https://krillotinapp.herokuapp.com/read?lang=${lang}&text=${text}`}
          >
            Ovozni yuklab olish!
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
