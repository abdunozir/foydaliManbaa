import axios from "axios";
import React, { useEffect, useState } from "react";

import "./KrilLotin.css";

export default function KrilLotin() {
  let [lang, setLang] = useState("lotin");
  let [result, setResult] = useState(null);
  let [text, setText] = useState(null);
  useEffect(() => {
    if (text) {
      axios
        .post("https://krillotinapp.herokuapp.com/kirillotin", {
          lang: lang,
          text: text,
        })
        .then((res) => {
          console.log(res);
          setResult(res.data.result);
          console.log(`${res.data.result}`);
        });
    }
  }, [text, lang]);
  function changeText(e) {
    setText(`${e.target.value}`);
    console.log(e.target.value);
    if (e.target.value.length === 0) {
      setResult(null);
    }
  }

  function handleSelect(e) {
    setLang(e.target.value);
  }
  return (
    <div className="kirillotin">
      <div className="kirillotin_alert">
        <p>
          Quyidagi formaga yozishingiz bilan jonliravishta kirildan lotinga yoki
          lotindan kirilga o'girib boriladi.
        </p>
      </div>
      <div className="kirillotin_content_wrapper">
        <div className="kirillotin_inputs">
          <select
            onChange={(e) => handleSelect(e)}
            className="changeType_select"
            name=""
            id=""
          >
            <option value="lotin" defaultValue>
              Lotindan
            </option>
            <option value="kiril">Kirildan</option>
          </select>
          <textarea
            name=""
            placeholder="shuyerga yozing..."
            id=""
            cols="30"
            rows="10"
            onChange={changeText}
          ></textarea>
        </div>
        <div className="kirillotin_result">
          <h2>{lang === "lotin" ? "Kirilga" : "Lotinga"}</h2>
          <div className="kirillotin_result-context">
            <div
              dangerouslySetInnerHTML={{
                __html: result,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
