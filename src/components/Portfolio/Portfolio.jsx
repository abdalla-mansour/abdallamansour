import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/project/cold.PNG";
import img2 from "../../assets/project/drink.PNG";
import img3 from "../../assets/project/drone.PNG";
import img4 from "../../assets/project/KFC.PNG";
import img5 from "../../assets/project/modal.PNG";
import img6 from "../../assets/project/model.PNG";
import img7 from "../../assets/project/nft.PNG";
import img8 from "../../assets/project/summer.PNG";
import img9 from "../../assets/project/watch.PNG";
import img10 from "../../assets/project/work.PNG";
import { BsCloudFog2 } from "react-icons/bs"
import { Fade } from "react-reveal";
import "./portfolio.css";

const portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="title-portfolio">
        <h2>Portfolio</h2>
      </div>
      <div className="container">
        <Fade bottom delay={200}>
          <div className="display">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img6} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">Life Style</h1>
                    <a href={img6} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img2} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">Juice</h1>
                    <a href={img2} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img3} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">Drone</h1>
                    <a href={img3} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img4} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">KFC</h1>
                    <a href={img4} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img5} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">Model</h1>
                    <a href={img5} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img1} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">Relationship</h1>
                    <a href={img1} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img7} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">ETH</h1>
                    <a href={img7} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img8} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">Fashion</h1>
                    <a href={img8} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img9} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">Watch</h1>
                    <a href={img9} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper">
                <div class="porjects__content swiper-slide">
                  <img src={img10} alt="projects" class="projects__img" />
                  <div>
                    <h1 class="projects__title">Modern</h1>
                    <a href={img10} download class="projects__button">
                      View demo <BsCloudFog2 className="i" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default portfolio;