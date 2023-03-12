import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import "./projects.css";
import "swiper/css";
import "swiper/css/pagination";
import pro1 from "../../../../public/images/projects/img1.png";
import { Pagination, Navigation } from "swiper";
export default function Projects() {
    const [pageType, setPageType] = useState(28);
    const projects = [
        { img: "/images/projects/img1.png", name: "name", gitsrc: "s222", livesrc: "s", id: "1" },
         { img: "/images/projects/img2.png", name: "name", gitsrc: "s", livesrc: "s", id: "2" }, 
         { img: "/images/projects/img3.png", name: "name", gitsrc: "s", livesrc: "s", id: "3" }, 
         { img: "/images/projects/img4.png", name: "name", gitsrc: "s", livesrc: "s", id: "4" }, 
         { img: "/images/projects/img5.png", name: "name", gitsrc: "s", livesrc: "s", id: "5" }, 
         { img: "/images/projects/img7.png", name: "name", gitsrc: "s", livesrc: "s", id: "7" },
         { img: "/images/projects/img10.png", name: "name", gitsrc: "s", livesrc: "s", id: "10" }, 
         { img: "/images/projects/img12.png", name: "name", gitsrc: "s", livesrc: "s", id: "12" }, 
         { img: "/images/projects/img13.png", name: "name", gitsrc: "s", livesrc: "s", id: "13" },
         { img: "/images/projects/img14.png", name: "name", gitsrc: "s", livesrc: "s", id: "14" }, 
         { img: "/images/projects/img15.png", name: "name", gitsrc: "s", livesrc: "s", id: "15" },
         { img: "/images/projects/img17.png", name: "name", gitsrc: "s", livesrc: "s", id: "17" },
         { img: "/images/projects/img19.png", name: "name", gitsrc: "s", livesrc: "s", id: "19" },
         { img: "/images/projects/img20.png", name: "name", gitsrc: "s", livesrc: "s", id: "20" }, 
         { img: "/images/projects/img21.png", name: "name", gitsrc: "s", livesrc: "s", id: "21" },
         { img: "/images/projects/img22.png", name: "name", gitsrc: "s", livesrc: "s", id: "22" }, 
         { img: "/images/projects/img23.png", name: "name", gitsrc: "s", livesrc: "s", id: "23" },
         { img: "/images/projects/img24.png", name: "name", gitsrc: "s", livesrc: "s", id: "24" }, 
         { img: "/images/projects/img25.png", name: "name", gitsrc: "s", livesrc: "s", id: "25" },
         { img: "/images/projects/img26.png", name: "name", gitsrc: "s", livesrc: "s", id: "26" },
         { img: "/images/projects/img27.png", name: "name", gitsrc: "s", livesrc: "s", id: "27" },
         { img: "/images/projects/img28.png", name: "name", gitsrc: "s", livesrc: "s", id: "28" },
         { img: "/images/projects/img29.png", name: "name", gitsrc: "s", livesrc: "s", id: "29" },
         { img: "/images/projects/img30.png", name: "name", gitsrc: "s", livesrc: "s", id: "30" },
         { img: "/images/projects/img31.png", name: "name", gitsrc: "s", livesrc: "s", id: "31" },
         { img: "/images/projects/img32.png", name: "name", gitsrc: "s", livesrc: "s", id: "32" },
         { img: "/images/projects/img33.png", name: "name", gitsrc: "s", livesrc: "s", id: "33" },
         { img: "/images/projects/img34.png", name: "name", gitsrc: "s", livesrc: "s", id: "34" },
         { img: "/images/projects/img35.png", name: "name", gitsrc: "s", livesrc: "s", id: "35" },
         { img: "/images/projects/img36.png", name: "name", gitsrc: "s", livesrc: "s", id: "36" },
         { img: "/images/projects/img37.png", name: "name", gitsrc: "s", livesrc: "s", id: "37" },
         { img: "/images/projects/img38.png", name: "name", gitsrc: "s", livesrc: "s", id: "38" },
         { img: "/images/projects/img39.png", name: "name", gitsrc: "s", livesrc: "s", id: "39" },
         { img: "/images/projects/img40.png", name: "name", gitsrc: "s", livesrc: "s", id: "40" },
         { img: "/images/projects/img42.png", name: "name", gitsrc: "s", livesrc: "s", id: "42" },
        ]

    return (
        <>
            <h1 className='   mx-auto py-12 text-center text-6xl font-bold'>Projects</h1>


            <Swiper

                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true} modules={[Navigation,Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },

                }}
                className="FilterSlider"
            >

                {projects.map((project, index) => {
                    return (
                        <SwiperSlide className='shadow-2xl   ' key={project.id}
                            style={{
                                "backgroundImage": `url(${project.img})`, "backgroundRepeat": "no-repeat",
                                "backgroundSize": "cover",
                                "backgroundPosition": " center",
                            }}
                        >
                            <div className="backdrop-blur-sm transition duration-300 ease-in-out opacity-0 hover:opacity-100   bg-custom ">
                                <h2 className="text-3xl text-center font-bold text-transparent text-black drop-shadow-lg shadow-black p-2">

                                    {project.name}
                                </h2>
                                <div
                                    className=" flex items-center
    justify-center"
                                >
                                    <Link
                           
                                        to={`/details/${project.name}`}
                                    >
                                        <button className="btn  border-0 bg-gradient-to-r from-gray-700  to-gray-500 m-1 rounded-full ">GitHub</button>
                                    </Link>
                                    <Link
                           
                                        to={`/details/${project.name}`}
                                    >
                                        <button className="btn  border-0 bg-gradient-to-r from-sky-700  to-sky-500 m-1 rounded-full ">Live</button>
                                    </Link>
                                 

                                </div>
                              
                            </div>




















                        </SwiperSlide>
                    );
                })}



             

















            </Swiper>
        </>
    );
}