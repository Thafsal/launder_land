import React, { useState } from "react";
import "./ContactPage.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger} from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Send the form data to your backend or email service
  };

  return (
    <div>
      <div className="formcarry-container">
        <h2>Contact Us</h2>
        <form className="formcarry-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            cols="30" rows="10"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
        <section className="contact">
          <div className="container contact__container">
            <div className="contact__wrapper">
              <a
                href="mailto:afreedht@gmail.com"
                target="__bank"
                rel="noreferrer noopener"
              >
                <MdEmail />
              </a>
              <a
                href="https://wa.me/+919544216529"
                target="__bank"
                rel="noreferrer noopener"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                href="https://m.me/thafsal.afreedh.9"
                target="__bank"
                rel="noreferrer noopener"
              >
                <BsMessenger />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
