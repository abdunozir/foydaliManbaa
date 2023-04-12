import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./Contact.css";

export default function Contact() {
  let [message, setMessage] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    text: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ism kiritilishi shart"),
    email: Yup.string()
      .email("Email hato kiritildi")
      .required("Email kiritilishi shart"),
    text: Yup.string().required("Forma bo'sh bo'lmasligi kerak"),
  });
  return (
    <div className="boglanish">
      <h1 className="boglanish__title">Aloqa</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Handle form submission
          axios
            .post("https://opensourcecontact.herokuapp.com", {
              userName: values.name,
              botToken: "6101599477:AAEsUKJ-hdU-mbGmCj-JtE_7qKakiAFfwZ0",
              chatId: "1283821462",
              message: values.text,
              contact: values.email,
            })
            .then((res) => {
              setMessage(true);

              setTimeout(() => {
                setMessage(false);
              }, 2000);

              values.email = "";
              values.name = "";
              values.text = "";
            })
            .catch((err) => {
              console.log("err Send");
              console.log(err);
            });
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="boglanish__inputName"
                placeholder={"Ismingiz..."}
              />
              {errors.name && touched.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email manzilingiz..."
                className="boglanish__inputEmail"
              />
              {errors.email && touched.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div>
              <textarea
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
                placeholder="Habaringiznini yozing..."
                className="boglanish_inputTextField"
              />
              {errors.text && touched.text && (
                <div className="error">{errors.text}</div>
              )}
            </div>
            <button
              className="boglanish_submitBtn"
              type="submit"
              disabled={isSubmitting}
            >
              {message ? "Habar yuborildi :)" : "Habar Yuborish"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
