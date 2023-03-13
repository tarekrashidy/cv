import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./certificate.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Certificate() {
    const Certificates = [
        ' /images/cert/cert(17).png',
         '/images/cert/cert(2).png',
         '/images/cert/cert(3).png',
         '/images/cert/cert(4).png',
         '/images/cert/cert(5).png',
         '/images/cert/cert(6).png',
         '/images/cert/cert(7).png',
         '/images/cert/cert(8).png',
         '/images/cert/cert(9).png',
         '/images/cert/cert(10).png',
         '/images/cert/cert(11).png',
         '/images/cert/cert(12).png',
         '/images/cert/cert(13).png',
         '/images/cert/cert(14).png',
         '/images/cert/cert(15).png',
         '/images/cert/cert(16).png',
         '/images/cert/cert(1).png',
         '/images/cert/cert(18).png',
         '/images/cert/cert(19).png',
         '/images/cert/cert(20).png',
         '/images/cert/certp1.jpg',
         '/images/cert/certp2.jpg',
         '/images/cert/certp3.jpg',
         '/images/cert/certp4.png',

    ]
    return (
        <>
            <h1 className='   mx-auto pt-12 text-center text-4xl sm:text-4xl   xs:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold'>Certificates</h1>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper pt-0"
            >
                {Certificates.map((Certificate, index) => {
                    return (
                    
                        <SwiperSlide key={index}>
                        <img src={Certificate} />
                        </SwiperSlide>
                    
                    
             
                    
                    
                    )})}
   
            </Swiper>
        </>
    );
}

