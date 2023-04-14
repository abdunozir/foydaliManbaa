import React, { useState } from "react";
import Tesseract from "tesseract.js";

import "./ExtractText.css";

export default function ExtractText() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);
  let [lang, setLang] = useState("eng");
  let [audioLang, setAudioLang] = useState("en");
  let [changed, setChanged] = useState(false);

  const handleFileInputChange = (event) => {
    setChanged(true);
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    Tesseract.recognize(URL.createObjectURL(file), lang, {
      logger: (m) => console.log(m),
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        setText(result);
        setChanged(false);
      });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setChanged(true);
    setImage(URL.createObjectURL(file));
    Tesseract.recognize(URL.createObjectURL(file), lang, {
      logger: (m) => {},
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        setText(result);
        setChanged(false);
      });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="ExtractText">
      <div className="extractText_alert">
        <p>
          Tasvir (rasm) fayllardan matnni yuqori aniqlik bilan ajratib olish
          uchun dastlab tilni tanlang hamda forma orqali kerakli faylni tanlang
          va tasvirda ishtirok etgan matnlarni qayta javob sifatida oling.
        </p>
      </div>
      <div className="ExtractText_wrapper">
        <div className="extractText_inputField">
          {/* <p>Matinni aniqroq ajratib olish uchun tilni tanlang!</p> */}
          <select
            onChange={(e) => {
              setLang(e.target.value);
              let lng = e.target.value;
              if (lng === "eng") {
                setAudioLang("en");
              } else if (lng === "uzb") {
                setAudioLang("en");
              } else if (lng === "rus") {
                setAudioLang("ru");
              } else if (lng === "tur") {
                setAudioLang("tr");
              }
            }}
          >
            <option value={"eng"} defaultValue>
              Tilni tanlang
            </option>
            <option value={"eng"}>engliz tili</option>
            <option value={"uzb"}>O'zbek tili</option>
            <option value={"rus"}>Rus tili</option>
            <option value={"tur"}>Turk tili</option>
          </select>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="extracter_inputField_wrapper extracter_inputField_wrappers"
          >
            {!image ? (
              <>
                <label className="label" htmlFor="file">
                  Buyerga bosing va rasmni yuklang yoki sudrab tashlang!
                </label>
                <input
                  accept=".jpg, .jpeg, .png, image/*"
                  className="fileInput"
                  id="file"
                  type="file"
                  onChange={handleFileInputChange}
                />
              </>
            ) : (
              <div>
                <img className="image" src={image} alt="Selected file" />
                <button
                  onClick={() => {
                    setImage(null);
                    setChanged(false);
                    setText(null);
                  }}
                  className="extracter_delBtn"
                >
                  O'chirish
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="extractText_result_wrapper">
          <h2>Natija buyerda ko'rinadi:</h2>
          <div
            title="kopiya qilish uchun ustiga bosing"
            className="extractText_result extracter_inputField_wrappers"
          >
            {changed ? "Loading..." : ""}
            {text && (
              <>
                {text.data.text.split("\n").map((el, i) => {
                  return (
                    <p className="texts" key={i}>
                      <>{el}</>
                    </p>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
      {text ? (
        <a
          className="extractText_voice"
          href={`https://krillotinapp.herokuapp.com/read?lang=${audioLang}&text=${text.data.text}`}
        >
          Ovozni yuklab olish!
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
