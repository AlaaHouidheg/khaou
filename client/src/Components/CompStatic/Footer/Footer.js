import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/cours">Our courses</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online education</h4>
            <ul>
              <li>
                <Link to="#">Marketing</Link>
              </li>
              <li>
                <Link to="#">Sience</Link>
              </li>
              <li>
                <Link to="#">Development</Link>
              </li>
              <li>
                <Link to="#">Math</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div>
              <ul>
                <li>
                  <ion-icon name="call-outline"></ion-icon>95 837 488
                </li>
                <li>
                  <ion-icon name="at-outline"></ion-icon>{" "}
                  Khaoula.ajroudi@gmail.com
                </li>
              </ul>
            </div>
            <div className="social-links">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
