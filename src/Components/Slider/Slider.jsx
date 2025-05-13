import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import slide1Img from "../../assets/gift-box-open.jpg";
import slide2Img from "../../assets/person-preparing-cyber-monday-package.jpg";
import slide3Img from "../../assets/close-up-mystery-box.jpg";
import slide4Img from "../../assets/colorful-wooden-box-is-placed-wooden-stool-this-art-piece.jpg";
import slide5Img from "../../assets/modern-stationary-collection-arrangement.jpg";
import slide6Img from "../../assets/5374800.jpg";


const Slider = () => {
  return (
    <div className="mt-8 mb-24">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Navigation, Autoplay]}
        className="mySwiper h-[400px] w-[750px] rounded-2xl"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-11/12 w-full   bg-cover bg-center rounded-2xl "
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(17, 17, 17, 0)), url(${slide1Img})`,
            }}
          >
            <div className="absolute bottom-4  flex items-center justify-center text-center p-6">
              <div className="text-white space-y-4" data-aos="fade-up">
                <h2 className="text-5xl font-bold">
                  Discover New Surprises Monthly
                </h2>
                <p className="text-lg">
                  Curated just for you. Every month. Every time.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-11/12 w-full   bg-cover bg-center rounded-2xl "
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(17, 17, 17, 0)), url(${slide2Img})`,
            }}
          >
            <div className="absolute bottom-4  flex items-center justify-center text-center p-6">
              <div className="text-white space-y-4" data-aos="fade-up">
                <h2 className="text-5xl font-bold">
                  Tailored Boxes for Every Passion
                </h2>
                <p className="text-lg">
                  From tech to wellness.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide>
          <div
            className="relative h-11/12 w-full   bg-cover bg-center rounded-2xl "
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(17, 17, 17, 0)), url(${slide3Img})`,
            }}
          >
            <div className="absolute bottom-4  flex items-center justify-center text-center p-6">
              <div className="text-white space-y-4" data-aos="fade-up">
                <h2 className="text-5xl font-bold">
                  Flexible Subscriptions, Endless Joy
                </h2>
                <p className="text-lg">
                  Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 4 */}
        <SwiperSlide>
          <div
            className="relative h-11/12 w-full   bg-cover bg-center rounded-2xl "
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(17, 17, 17, 0)), url(${slide4Img})`,
            }}
          >
            <div className="absolute bottom-4  flex items-center justify-center text-center p-6">
              <div className="text-white space-y-4" data-aos="fade-up">
                <h2 className="text-5xl font-bold">
                  Support Local, Unbox Happiness
                </h2>
                <p className="text-lg">
                  Celebrate local creators with every box you receive.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 5 */}
        <SwiperSlide>
          <div
            className="relative h-11/12 w-full   bg-cover bg-center rounded-2xl "
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(17, 17, 17, 0)), url(${slide5Img})`,
            }}
          >
            <div className="absolute bottom-4  flex items-center justify-center text-center p-6">
              <div className="text-white space-y-4" data-aos="fade-up">
                <h2 className="text-5xl font-bold">
                  A Box for Every Interest
                </h2>
                <p className="text-lg">
                  Tech, wellness, books, and more — choose what excites you.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 6 */}
        <SwiperSlide>
          <div
            className="relative h-11/12 w-full   bg-cover bg-center rounded-2xl "
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(17, 17, 17, 0)), url(${slide6Img})`,
            }}
          >
            <div className="absolute bottom-4  flex items-center justify-center text-center p-6">
              <div className="text-white space-y-4" data-aos="fade-up">
                <h2 className="text-5xl font-bold">
                  Skip, Pause, or Cancel Anytime
                </h2>
                <p className="text-lg">
                 You’re in full control of your subscription journey.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slider;
