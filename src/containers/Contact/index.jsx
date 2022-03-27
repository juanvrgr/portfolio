import React, { useState } from "react";
import emailjs from "emailjs-com";
import { StyledContact } from "../styled/StyledContact";
import strings from "./language.js";

export default function Contact({ language }) {
  const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_USER } = process.env;

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  function isEmail(string) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(string).toLowerCase());
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(REACT_APP_SERVICE, REACT_APP_TEMPLATE, e.target, REACT_APP_USER)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setForm({
      from_name: "",
      from_email: "",
      message: "",
    });
  }

  async function handleChange(e) {
    await setForm({ ...form, [e.target.name]: e.target.value });
    if (!isEmail(form.from_email)) {
      return (document.querySelector(".sendMail").disabled = true);
    }
    if (form.from_name.length < 3) {
      return (document.querySelector(".sendMail").disabled = true);
    }
    if (!form.message) {
      return (document.querySelector(".sendMail").disabled = true);
    }
    document.querySelector(".sendMail").disabled = false;
  }

  return (
    <StyledContact id="Contact">
      <span className="openTag">{"<Contact>"}</span>
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder={strings[language].name}
          className="inputName"
          onChange={handleChange}
          value={form.from_name}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          className="email"
          onChange={handleChange}
          value={form.from_email}
        />
        <textarea
          name="message"
          placeholder={strings[language].message}
          className="message"
          onChange={handleChange}
          value={form.message}
        />
        <input
          type="submit"
          value={strings[language].send}
          className="sendMail"
          disabled={true}
        />
      </form>
      <span className="closedTag">{"</Contact>"}</span>
      <span className="closedMainTag">{"</Portfolio>"}</span>
    </StyledContact>
  );
}
