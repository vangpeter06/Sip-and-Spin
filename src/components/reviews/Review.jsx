import React from "react";
import "./review.css";
import Logo from "../../assets/logo.png";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Logo,
    name: "Peter Vang",
    review:
      "Very friendly workers. Very clean area. Would recommend everyone who wants to stop by just for some fun or drinks.",
  },
  {
    avatar: Logo,
    name: "Person name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo voluptatem quis earum laboriosam in itaque delectus officiis, eius voluptate rem, distinctio akdfjk asijfdik asoidfhik sdoihfik aspoifdhnik saeoiefhiosnfg architecto non? Delectus at error officia id veniam?",
  },
  {
    avatar: Logo,
    name: "Person name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. te rem, distinctio architecto non? Delectus at error officia id veniam?",
  },
];
const Review = () => {
  return (
    <section id="reviews">
      <h2>Reviews From Customer</h2>

      <Swiper
        className="container reviews__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="review">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Review;
