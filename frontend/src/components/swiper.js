// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
const CustomSwiper = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "bullets",
          bulletActiveClass: "bullet-active",
        }}
        spaceBetween={2}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="slide">
          <img
            src="https://res.cloudinary.com/dbumvyukj/image/upload/v1725870937/jpmrxgxfnyv8fg9iopqc.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://res.cloudinary.com/dbumvyukj/image/upload/v1725870934/ai1jpwgrbqs1hsxtdlk2.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src="https://res.cloudinary.com/dbumvyukj/image/upload/v1725870939/jqexfekpcd0shfe00mh7.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div class="swiper-pagination"></div>
    </div>
  );
};

export default CustomSwiper;
