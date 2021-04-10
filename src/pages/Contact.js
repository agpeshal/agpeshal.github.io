import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <h1> Please Connect me on </h1>
      <div className="contact__icons">
        <a
          href="https://www.facebook.com/peshal.agarwal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="mailto:peshala48@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.instagram.com/peshal.agarwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/peshal-agarwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        {/* <a
          href="https://github.com/agpeshal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a> */}
      </div>
    </div>
  );
};
