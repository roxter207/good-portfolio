import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
import { useContext } from 'react';
import { ThemeContext } from '../../context';

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState();

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3pcglqg",
        "template_s3h8aql",
        formRef.current,
        "user_9gtH5ZYGxHRj7ArAxylqu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Have a Project? Let's discuss it today</h1>
          <div className="c-info">
            
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +91 785784570
            </div>
            <div className="c-info-item">
              <img src={email} alt="email" className="c-icon" />
              abc@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="address" className="c-icon" />
              Pune, India.
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium distinctio officia placeat facere. Voluptas, enim!
              Consectetur provident minima laboriosam eos facere, soluta
              praesentium illo, amet quo cupiditate blanditiis nemo atque.
            </p>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor : darkMode ? "#333" : "white", color: darkMode ? "white" : "black"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor : darkMode ? "#333" : "white", color: darkMode ? "white" : "black"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor : darkMode ? "#333" : "white", color: darkMode ? "white" : "black"}} type="email" placeholder="Email" name="user_email" />

            <textarea
              style={{backgroundColor : darkMode ? "#333" : "white", color: darkMode ? "white" : "black"}}
              name="message"
              placeholder="message"
              cols="30"
              rows="10"
            ></textarea>
            <button>Submit</button>
            {done && "Thank you, your query has been submitted!"}
          </form>
        </div>
      </div>
    </div>
  );
}
