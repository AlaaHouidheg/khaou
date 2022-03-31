import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getcours } from "../../../JS/Actions/Cours";
import Navbar from "../Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Courses.css";

function Courses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcours());
  }, []);
  const cours = useSelector((state) => state.coursReducer.coursList);
  return (
    <div className="courses">
      <Navbar />
      <h1 className="heading">
        {" "}
        <span> our famous </span> courses{" "}
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div class="containercours">
          <div class="cardsc grid-row">
            {cours
              ? cours.map((el) => (
                  <SwiperSlide className="slide">
                    <div class="card1cours">
                      <div class="card-top">
                        <img src={el.photo} alt="" />
                      </div>
                      <div class="card-info">
                        <h2>{el.nameCours}</h2>
                      </div>
                      <div class="card-bottom flex-row">
                        <Link to={`/cours/${el._id}`}>
                          {" "}
                          <button className="btnsuccess read-more">
                            Read More
                          </button>
                        </Link>

                        <a href="#" class="buttoncours btn-yellow">
                          {el.isFree == "free" ? (
                            <div class="pricecoursfree">{el.isFree}</div>
                          ) : (
                            <div class="pricecoursprice">{el.price}dt</div>
                          )}
                        </a>
                      </div>
                    </div>

                    {/* <div class="grid-box">
                  <div class="boxcours">
                    <figure class="imagecours">
                      <img src={el.photo} alt="" />
                    </figure>
                    <div class="namecours">
                      <h1 class="">{el.nameCours}</h1>
                    </div>
                    <div class="descrcours">
                      <p>{el.description}</p>
                    </div>
                    <div class="basbox">
                      <button className="btnsuccess">Read More</button>
                      {el.isFree == "free" ? (
                        <div class="pricecoursfree">{el.isFree}</div>
                      ) : (
                        <div class="pricecoursprice">{el.price}dt</div>
                      )}
                    </div>
                  </div>
                </div> */}
                  </SwiperSlide>
                ))
              : null}
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Courses;
