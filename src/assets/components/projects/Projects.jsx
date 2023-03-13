import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./projects.css";
import "swiper/css";
import "swiper/css/pagination";
import pro1 from "../../../../public/images/projects/img1.png";
import { Pagination, Navigation } from "swiper";
export default function Projects() {
    const [pageType, setPageType] = useState(28);
    const projects = [
        {
            img: "/images/projects/img1.png",
            name: "Andalus programming education center",
            gitsrc: "https://github.com/marstarek/andalus",
            livesrc: "https://alandalous.netlify.app/",
            id: "1",
        },
        {
            img: "/images/projects/img40.png",
            name: "hotel booking website",
            gitsrc: "https://github.com/marstarek/hotel-booking-website",
            livesrc: "https://hotel-booking-website-khaki.vercel.app/",
            id: "25",
        },
        {
            img: "/images/projects/img43.png",
            name: "portfolio",
            gitsrc: "https://github.com/marstarek/cv",
            livesrc: "https://github.com/marstarek/cv",
            id: "27",
        },
        {
            img: "/images/projects/img2.png",
            name: "Mars Company Website",
            gitsrc:
                "https://github.com/marstarek/Responsive-Website-HTML-CSS-JS-Bootstrap",
            livesrc:
                "https://625141e3e620cf7790a6053a--peaceful-dragon-bce0fd.netlify.app/",
            id: "2",
        },
        {
            img: "/images/projects/img4.png",
            name: "Netflix",
            gitsrc: "https://github.com/marstarek/Netflix-using-sass-Gulp-bootstrap",
            livesrc: "https://marstarek.github.io/Netflix-using-sass-Gulp-bootstrap/",
            id: "3",
        },
        {
            img: "/images/projects/img10.png",
            name: "React movies platform",
            gitsrc: "https://github.com/marstarek/React.JS-movies-platform",
            livesrc: "https://industrious-digestion.surge.sh/",
            id: "4",
        },
        {
            img: "/images/projects/img7.png",
            name: "developers community",
            gitsrc: "https://github.com/marstarek/developers-community-multi-lang-sass-JQ",
            livesrc: "https://6251429ee43dfb790053593d--amazing-syrniki-9006f7.netlify.app/",
            id: "5",
        },
        {
            img: "/images/projects/img12.png",
            name: "Hcms",
            gitsrc: "https://github.com/marstarek/new-hcms",
            livesrc: "https://github.com/marstarek/new-hcms",
            id: "6",
        },
        {
            img: "/images/projects/img13.png",
            name: "ITIan",
            gitsrc: "https://github.com/marstarek/ITIian",
            livesrc: "https://github.com/marstarek/ITIian",
            id: "12",
        },
        {
            img: "/images/projects/img17.png",
            name: " react weather app",
            gitsrc: "https://github.com/marstarek/react-weather",
            livesrc: "https://weather-app1997.herokuapp.com/",
            id: "13",
        },
        {
            img: "/images/projects/img20.png",
            name: "bootstrap website",
            gitsrc: "https://github.com/marstarek/bootstrap-website",
            livesrc: "https://github.com/marstarek/bootstrap-website",
            id: "14",
        },
        {
            img: "/images/projects/img23.png",
            name: "Company Portfolio",
            gitsrc: "https://github.com/marstarek/html-css-website",
            livesrc: "https://marstarek.github.io/html-css-website/",
            id: "15",
        },
        {
            img: "/images/projects/img24.png",
            name: "Esatern food website",
            gitsrc: "https://github.com/marstarek/Esatern-food-website-",
            livesrc: "https://marstarek.github.io/koshary/index",
            id: "17",
        },
        {
            img: "/images/projects/img27.png",
            name: "Mobile Phone Company",
            gitsrc: "https://github.com/marstarek/css3-html5",
            livesrc: "https://marstarek.github.io/css3-html5/",
            id: "19",
        },
        {
            img: "/images/projects/img29.png",
            name: "Android Dev Company",
            gitsrc: "https://github.com/marstarek/website-using-sass",
            livesrc: "https://marstarek.github.io/website-using-sass/",
            id: "20",
        },
        {
            img: "/images/projects/img36.png",
            name: "registration form jwt",
            gitsrc: "https://github.com/tarekrashidy/registration-form",
            livesrc: "https://github.com/tarekrashidy/registration-form",
            id: "21",
        },
        {
            img: "/images/projects/img37.png",
            name: "Personal Portfolio",
            gitsrc: "https://github.com/marstarek/profile",
            livesrc: "https://marstarek.github.io/profile/",
            id: "22",
        },
        {
            img: "/images/projects/img38.png",
            name: "real estate company",
            gitsrc: "https://github.com/marstarek/real-estate-company",
            livesrc: "https://marstarek.github.io/real-estate-company/",
            id: "23",
        },
        {
            img: "/images/projects/img39.png",
            name: "React Book store",
            gitsrc: "https://github.com/marstarek/React-Book-store",
            livesrc: "https://github.com/marstarek/React-Book-store",
            id: "24",
        },

        {
            img: "/images/projects/img42.png",
            name: "react Ecommerce website",
            gitsrc: "https://github.com/marstarek/REACT-Ecommerce-website",
            livesrc: "https://github.com/marstarek/REACT-Ecommerce-website",
            id: "26",
        },

        {
            img: "/images/projects/img46.png",
            name: "portfolio",
            gitsrc: "https://github.com/marstarek/portfolio",
            livesrc: "https://tarekelrashidy.netlify.app/",
            id: "28",
        }
        ,
        {
            img: "/images/projects/img47.png",
            name: "content writing website",
            gitsrc: "https://github.com/marstarek/content-writing-websites",
            livesrc: "https://github.com/marstarek/content-writing-websites",
            id: "28",
        }



    ];

    return (
        <>
            <h1 className="   mx-auto pt-12 text-center text-4xl sm:text-4xl   xs:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
                Projects
            </h1>

            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Pagination]}
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
                className="FilterSlider px-4"
            >
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide
                            className="shadow-2xl  FilterSlider  "
                            key={project.id}
                            style={{
                                backgroundImage: `url(${project.img})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: " center",
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
                                    <a href={project.gitsrc} target="_blank">

                                        <button className="btn  border-0 bg-gradient-to-r from-gray-700  to-gray-500 m-1 rounded-full ">
                                            GitHub
                                        </button>


                                    </a>
                                    <a href={project.livesrc} target="_blank">

                                        <button className="btn  border-0 bg-gradient-to-r from-sky-700  to-sky-500 m-1 rounded-full ">
                                            Live
                                        </button>


                                    </a>

                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
