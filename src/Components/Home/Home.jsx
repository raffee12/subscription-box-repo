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
import Details from '../Details/Details';

const Home = () => {
  const slides = [
    { img: homeImg1, text: 'Ease your life with technology' },
    { img: homeImg2, text: 'Boost Your Productivity' },
    { img: homeImg3, text: 'Feel Good Productivity' },
  ];

  return (
    <>
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h2 className="text-white text-2xl sm:text-3xl font-bold">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div>
      <Details></Details>
    </div>
    </>
  );
};

export default Home;


