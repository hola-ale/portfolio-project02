import React from "react";
import "./Home.css";
import MailchimpFormContainer from "../Mailchimp/Mailchimp";

export default function Home() {
  return (
    <div className="curved">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,0L48,21.3C96,43,192,85,288,133.3C384,181,480,235,576,234.7C672,235,768,181,864,144C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <h1>Welcome to Aloha Hair</h1>
      <p>Your place to take care of your hair</p>
      <MailchimpFormContainer />
      <svg
        className="svg-margin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 316"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,272C672,288,768,288,864,245.3C960,203,1056,117,1152,69.3C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
