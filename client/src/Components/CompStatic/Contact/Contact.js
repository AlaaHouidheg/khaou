import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <h1 className="heading">
        {" "}
        <span> Contact </span>Us{" "}
      </h1>
      <div class="icons-containercontact">
        <div class="iconscontact">
          <i class="fas fa-clock"></i>
          <h3>opening hours :</h3>
          <p>07am to 6pm</p>
        </div>

        <div class="iconscontact">
          <i class="fas fa-phone"></i>
          <h3>phone :</h3>
          <p>95 837 488</p>
        </div>

        <div class="iconscontact">
          <i class="fas fa-envelope"></i>
          <h3> email : </h3>
          <p>khaoula@gmail.com</p>
        </div>

        <div class="iconscontact">
          <i class="fas fa-map"></i>
          <h3>address :</h3>
          <p>Gabes , Mtorech</p>
        </div>
      </div>
      <div class="rowcontact">
        <div class="imagecontact">
          <img src="contact-img.png" alt="" />
        </div>
        <div className="formcontact">
          <h3>send us a message</h3>
          <input type="text" placeholder="name" class="boxcontact" />
          <input type="email" placeholder="email" class="boxcontact" />
          <textarea
            name=""
            class="boxcontact"
            placeholder="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="send message" class="btncontact" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
