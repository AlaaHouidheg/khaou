import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  
  return (
    <div>
      <Navbar />
      <div className="Home">
        <div class="content">
          <h3>
            <span>the best</span> courses you will find find here!
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            laborum ut minus corrupti dolorum dolore assumenda iste voluptate
            dolorem pariatur.
          </p>
          <button className="join">
            {" "}
            <span>Join for free</span>
          </button>
          <div class="icons">
            <a href="#" class="fb">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" class="twitter">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" class="insta">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="#" class="git">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="#" class="yt">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <img src="Sans.png" />
        <div class="title">
          <div className="image">
            <h3>
              <span>All-In-One</span> Cloud Software.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              laborum ut minus corrupti dolorum dolore assumenda iste voluptate
              dolorem pariatur.
            </p>
          </div>
        </div>
      </div>
      <div class="card-area">
        <div class="card-section">
          <div class="card">
            <div class="flip-card">
              <div class="flip-card__container">
                <div class="card-front">
                  <div class="card-front__tp card-front__tp--city">
                    <img src="note.png" />
                  </div>

                  <div class="card-front__bt">
                    <p class="card-front__text-view card-front__text-view--city">
                      Details
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="inside-page">
              <div class="inside-page__container">
                <h3 class="inside-page__heading inside-page__heading--city">
                  Online Billing, Invoicing and Contracts
                </h3>
                <p class="inside-page__text">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="flip-card">
              <div class="flip-card__container">
                <div class="card-front">
                  <div class="card-front__tp card-front__tp--beach">
                    <img src="calen.png" />
                  </div>

                  <div class="card-front__bt">
                    <p class="card-front__text-view card-front__text-view--beach">
                      Details
                    </p>
                  </div>
                </div>
                <div class="card-back"></div>
              </div>
            </div>

            <div class="inside-page">
              <div class="inside-page__container">
                <h3 class="inside-page__heading inside-page__heading--beach">
                  Easy Scheduling and Attendance Tracking
                </h3>
                <p class="inside-page__text">
                  Schedule and reserve classrooms at one campus or multiple
                  campuses. Keep detailed records of student attendance
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="flip-card">
              <div class="flip-card__container">
                <div class="card-front">
                  <div class="card-front__tp card-front__tp--ski">
                    <img src="users.png" />
                  </div>

                  <div class="card-front__bt">
                    <p class="card-front__text-view card-front__text-view--ski">
                      Details
                    </p>
                  </div>
                </div>

                <div class="card-back"></div>
              </div>
            </div>

            <div class="inside-page">
              <div class="inside-page__container">
                <h3 class="inside-page__heading inside-page__heading--ski">
                  Customer Tracking
                </h3>
                <p class="inside-page__text">
                  Automate and track emails to individuals or groups. Skilline’s
                  built-in system helps organize your organization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container1">
        <div className="image1">
          <h3>
            <span>Tools </span> For Teachers And Learners
          </h3>
          <p>
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>

        <div className="title1">
          <img src="fillete.png" />
        </div>
      </div>
      <div className="features">
        <h1>
          <span>Features</span> Courses
        </h1>
      </div>
      <div className="cardeducation">
        <a href="#" className="cardd education">
          <div className="overlay"></div>
          <div className="circle">
            <img src="calcul.png" />
          </div>
          <p>Math</p>
        </a>

        <a href="#" className="cardd credentialing">
          <div className="overlay"></div>
          <div className="circle">
            <img src="devlop.png" />
          </div>
          <p>Development</p>
        </a>

        <a href="#" className="cardd wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src="sience.png" />
          </div>
          <p>Sience</p>
        </a>

        <a href="#" className="cardd human-resources">
          <div className="overlay"></div>
          <div className="circle">
            <img src="mark.png" />
          </div>
          <p>Marketing</p>
        </a>
      </div>
    </div>
  );
}

export default Home;
