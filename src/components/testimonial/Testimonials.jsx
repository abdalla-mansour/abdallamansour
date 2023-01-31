import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fade } from "react-reveal";
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="title-testimonials">
        <h2>Testimonials</h2>
      </div>
      <div className="container">
        <Fade bottom delay={200}>
          <div className="display">
            <Swiper
              slidesPerView={1}
              spaceBetween={35}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper">
                <div className="box">
                  <h4>Dr / Mansour Abdelrhim</h4>
                  <p className="para">
                    “If you want to create your own website, you will find the
                    one you prefer to share your ideas or run a store at acodiv
                    company, its owner, the programmer Abdalla, excellent sites,
                    good prices and respectable post-construction and delivery
                    service.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="box">
                  <h4>Dr / David Adel</h4>
                  <p className="para">
                    “Working with Abdalla is to give a good impression, I carry
                    out my project at a good cost, with excellent quality and
                    attention. Great service and recommended.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="box">
                  <h4>Lc / Shimaa Gomaa</h4>
                  <p className="para">
                    “Your work is very excellent in terms of design or The
                    appearance of the site or the colors are compatible with the
                    site.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div className="box">
                  <h4>Se / Hassan Abdo</h4>
                  <p className="para">
                    “I wanted to deal with you, and evaluate your appearance,
                    which means something beyond description.”
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Testimonials