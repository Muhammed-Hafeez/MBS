import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
// import swiperData from "../data/SwiperData.json"
import { useEffect, useState } from "react";
import { getSwiperImages } from "../services/cms/swiper";
const CustomSwiper = () => {
  const [swiperData, setSwiperData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getSwiperImages();
      setSwiperData(response.data);
    })();
  }, []);
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
        className="swiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {swiperData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="slide">
              <img src={data.image} alt={data.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CustomSwiper;
