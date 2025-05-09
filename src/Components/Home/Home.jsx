import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import homeImg1 from '../../assets/home1.jpg';
import homeImg2 from '../../assets/home2.jpg';
import homeImg3 from '../../assets/home3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Home.css'; 

const Home = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 ">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {[homeImg1, homeImg2, homeImg3].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;

