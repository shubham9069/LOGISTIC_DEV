import React from 'react'
import './growing.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper";
import { image5,image6,image7,image8,image9,image10,image11,image12 } from '../assest';


const Slider = () => {
  return (
    <>  
        <div className="slider padding4rem">
    <Swiper 

        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay]}
 
        className="mySwiper"
      >
        <SwiperSlide> <img src={image5}/></SwiperSlide>
        <SwiperSlide><img src={image6}/></SwiperSlide>
        <SwiperSlide><img src={image7}/></SwiperSlide>
        <SwiperSlide><img src={image8}/></SwiperSlide>
        <SwiperSlide><img src={image9}/></SwiperSlide>
        <SwiperSlide><img src={image10}/></SwiperSlide>
        <SwiperSlide><img src={image11}/></SwiperSlide>
        <SwiperSlide><img src={image12}/></SwiperSlide>
        
      </Swiper>
      </div>
    </>
  )
}

export default Slider