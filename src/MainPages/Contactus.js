import React from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k9ovxmg",
        "template_zmuoe5u",
        e.target,
        "user_2GqX8o5b0B5BzVsNMEkwg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Aww snap! Something Went Wrong!")
        }
      );
  }

  return (
    <Jumbotron>
      <p style={{fontWeight:"bold"}}> Have doubts ? Send us a text and we'll get back to you. </p><br/>
      <div style={{ textAlign: "center" }}>
      <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name{" "}</label>
      <input type="text" name="user_name" /><br/><br/>
      <label>Email{" "}</label>
      <input type="email" name="user_email" /><br/><br/>
      <label>Message{" "}</label>
      <textarea name="message" /><br/>
      <div style={{textAlign:"center"}}>
        <input type="submit" value="Send" style={{color:"green"}} />
      </div>
          <br /> </form>
      </div>
    </Jumbotron>
  );
}
