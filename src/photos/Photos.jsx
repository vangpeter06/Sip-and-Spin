import React from 'react';
import './photos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import Img from '../assets/IMG_6454.jpeg';
import Img2 from '../assets/IMG_6454.jpeg';
import Img3 from '../assets/IMG_6455.jpeg';
import Img4 from '../assets/IMG_6457.jpeg';
import Img5 from '../assets/IMG_6459.jpeg';
import Img6 from '../assets/IMG_6460.jpeg';
import Img7 from '../assets/IMG_6461.jpeg';
import Img8 from '../assets/IMG_6463.jpeg';
import Img9 from '../assets/IMG_6464.jpeg';
import Img10 from '../assets/IMG_6466.jpeg';
import Img11 from '../assets/IMG_6467.jpeg';
import Img12 from '../assets/IMG_6468.jpeg';
import Img13 from '../assets/IMG_6469.jpeg';
import Img14 from '../assets/IMG_6470.jpeg';
import Img15 from '../assets/IMG_6472.jpeg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Photos = () => {
  return (
    <photo>
      <section id="gallery">
        <div className="container_photo">
          <h1>Gallery</h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="photo" src={Img} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img2} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img3} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img4} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img5} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img6} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img7} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img8} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img9} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img10} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img11} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img12} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img13} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img14} alt="Image" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="photo" src={Img15} alt="Image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </photo>
  );
}

export default Photos
