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
         { img: "/images/projects/img6.png", name: "name", gitsrc: "s", livesrc: "s", id: "6" }, 
         { img: "/images/projects/img7.png", name: "name", gitsrc: "s", livesrc: "s", id: "7" },
         { img: "/images/projects/img8.png", name: "name", gitsrc: "s", livesrc: "s", id: "8" }, 
         { img: "/images/projects/img9.png", name: "name", gitsrc: "s", livesrc: "s", id: "9" },
         { img: "/images/projects/img10.png", name: "name", gitsrc: "s", livesrc: "s", id: "10" }, 
         { img: "/images/projects/img11.png", name: "name", gitsrc: "s", livesrc: "s", id: "11" },
         { img: "/images/projects/img12.png", name: "name", gitsrc: "s", livesrc: "s", id: "12" }, 
         { img: "/images/projects/img13.png", name: "name", gitsrc: "s", livesrc: "s", id: "13" },
         { img: "/images/projects/img14.png", name: "name", gitsrc: "s", livesrc: "s", id: "14" }, 
         { img: "/images/projects/img15.png", name: "name", gitsrc: "s", livesrc: "s", id: "15" },
         { img: "/images/projects/img16.png", name: "name", gitsrc: "s", livesrc: "s", id: "16" }, 
         { img: "/images/projects/img17.png", name: "name", gitsrc: "s", livesrc: "s", id: "17" },
         { img: "/images/projects/img18.png", name: "name", gitsrc: "s", livesrc: "s", id: "18" }, 
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
         { img: "/images/projects/img41.png", name: "name", gitsrc: "s", livesrc: "s", id: "41" },
         { img: "/images/projects/img42.png", name: "name", gitsrc: "s", livesrc: "s", id: "42" },
        ]

    return (
        <>
            <h1 className='text-center py-3 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-800 to-red-500'>Most Popular Movies</h1>


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
                        <SwiperSlide className='shadow-2xl  ' key={project.id}
                            style={{
                                "backgroundImage": `url(${project.img})`, "background-repeat": "no-repeat",
                                "background-size": "cover",
                                "background-position": " center",
                            }}
                        >
                            <div className="">
                                <h2 className="text-center font-bold text-transparent text-l text-red-600">  {project.name}</h2>
                                <div
                                    className=" flex items-center
                                           justify-center"
                                >

                        <Link className='show_details' to={project.gitsrc}><button className="btn bg-red-600 border-0  btn-circle"

                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button></Link>



                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}



             

















            </Swiper>
        </>
    );
}