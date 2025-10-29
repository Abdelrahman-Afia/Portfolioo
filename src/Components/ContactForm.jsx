import React from "react";
import "./ContactForm.css";
import Phone from "../Assets/Phone.png";
import Email from "../Assets/Email.png";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h2>
          Say <span>Hi!</span>
        </h2>
        <div className="form-subtitle">
          <h3>
            Ready to Build Something <span>Remarkable</span>?
          </h3>
          <p className="description">
            Whether you have a specific project in mind, a question about my
            work, or just want to connect, I'm always open to a conversation.
            Let's discuss how we can bring your vision to life.
          </p>
          <p className="note">
            I'm looking forward to connecting! I personally read every message
            and will get back to you as soon as I can.
          </p>
        </div>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Name" className="form-input" />
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Phone Number" className="form-input" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-input" />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Message"
            className="form-input message-input"
          ></textarea>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <img src={Phone} alt="Phone" />
            <span>+201099608992</span>
          </div>
          <div className="contact-item">
            <img src={Email} alt="Email" />
            <span>contact@abdelrahmanafia.com</span>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
