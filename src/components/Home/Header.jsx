import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
const Header = () => {
  return (
    <div className='h-[450px] max-w-[1480px] mx-auto px-[40px] relative'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/cChz2k6/rooms-suites-landing-banner1.jpg" alt="" className="object-cover"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/H29cN41/rooms-suites-landing-banner2-new.jpg" alt="" className="object-cover"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/XZ2dFvt/home-banner1.jpg" alt="" className="object-cover" /></SwiperSlide>
    
      </Swiper>
      <div className="w-36 h-36 rounded-full bg-white absolute -bottom-20 left-[640px] z-10">
        <img src="https://i.ibb.co/SQsjX8D/luxury-h-hotel-logo-vector-31948467.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
