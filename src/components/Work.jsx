import React from 'react';
import Img1 from '../assets/คริสมาส.png'
import Img2 from '../assets/templat.png'
import Img3 from '../assets/ร้านค้าเสื้อผ้า.png'
import Img4 from '../assets/blog.png'
import Img5 from '../assets/book.png'
import Img6 from '../assets/port1.png'
import Img7 from '../assets/shop1.png'
import Img8 from '../assets/shop2.png'
import Img9 from '../assets/weed.png'
import Img10 from '../assets/port2.png'
import Img11 from '../assets/port3.png'






import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../work.css';



const Work = () => {


  return <div className='text-center ss:text-[80px] center mb-1 ' id='work'>
        <div className='pb-16'>MY PROJECT</div>
      <Swiper className="mySwiper ">
        <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img11} alt="" /></SwiperSlide>



      </Swiper>

  </div>;
};

export default Work;
