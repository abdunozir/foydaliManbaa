import React, { useState } from "react";

import "./ChangeType.css";

export default function ChangeType() {
  let [firstFileType, setFirstFileType] = useState(null);
  let [changing, setChanging] = useState(false);

  function handleSelect(e) {
    setFirstFileType(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="changeType">
      <h2 className="changeType_title" onClick={() => setChanging(true)}>
        {changing ? "O'zgartirilmoqda...." : "O'zgartir"}
      </h2>
      <div className="changeType_wrapper">
        <div className="changeType_inputs">
          <select
            onChange={(e) => handleSelect(e)}
            className="changeType_select"
            name=""
            id=""
          >
            <option value="png" defaultValue>
              Qaysi fayl turidan
            </option>
            <option value="png">png</option>
            <option value="jpg">jpg</option>
            <option value="pdf">pdf</option>
            <option value="docs">docs</option>
            <option value="docs">docs</option>
          </select>
          <input type="file" id="changeType_inputfile" />
          {firstFileType ? (
            <label className="changeType_input" htmlFor="file">
              Buyerga bosing va faylni yuklang!
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="changeType_output">
          <select
            onChange={(e) => handleSelect(e)}
            className="changeType_select"
            name=""
            id=""
          >
            <option value="png" defaultValue>
              Qaysi fayl turiga
            </option>
            <option value="png">png</option>
            <option value="jpg">jpg</option>
            <option value="pdf">pdf</option>
            <option value="docs">docs</option>
            <option value="docs">docs</option>
          </select>
          <h2>Natija shuyerda ko'rinadi...</h2>
        </div>
      </div>
    </div>
  );
}
