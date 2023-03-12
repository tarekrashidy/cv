import React, { useState, useEffect } from 'react'
// import '../styles/hero.css'
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

const Hero = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme])
  return (
    <div>
      <section className="">

        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="svg absolute hidden lg:block"
          style={{ "height": "560px", width: "100%", "zIndex": "-10", "overflow": "hidden" }}
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="hsl(217, 102%, 99%)" offset="0%"></stop>
              <stop stopColor="hsl(217,88%, 93%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
          ></path>
        </svg>


        <div className="px-6 pt-20 pb-10 lg:mb-12 md:px-12 text-center lg:text-left">
          <div className="container mx-auto xl:px-28">
            <div className="grid lg:grid-cols-2 gap-12 flex items-center py-12">
              <div className="mt-12 lg:mt-0">




                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12 ">



                  <Fade delay={1e1} cascade damping={1e-1}>

                    Hi,
                    I'm Tarek Ahmed .</Fade>
                  <br />

                  <Fade delay={2e3} cascade damping={1e-1} direction="up" >
                    <p className="text-blue-600  text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
                      FrontEnd Developer.
                    </p>
                  </Fade>


                </h1>





                  <Link to="/files/cv.pdf" target="_blank" download>
                  
    <button  className="btn  border-0 bg-gradient-to-r from-sky-700 to-sky-500 m-4">
                  
                  
                  
    Get CV</button>
                  </Link>
    



        

              </div>
              <div className="mb-12 lg:mb-0">
                <Slide direction="right">

                  <img src="/images/g3.png" className="w-full hero_img drop-shadow-md " alt="" />



                </Slide>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Slide delay={1e3} cascade damping={1e-1} direction="Up" >
        <div className="hero  ">
          <div className="hero-content text-center">
            <div className="max-w-6xl">
              <p className="text-2xl py-6"> Front End Developer with one year of experience working with React JavaScript, HTML, CSS …etc. to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.</p>
            </div>
          </div>
        </div>
      </Slide>
   



    

    </div>
  )
}

export default Hero