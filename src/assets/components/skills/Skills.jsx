import React from "react";
import "./skills.css";
import { Fade, Slide ,Rotate } from "react-awesome-reveal";

import css from "../../../../public/images/skills/1452px-CSS3_logo_and_wordmark.svg.png";
import html from "../../../../public/images/skills/HTML5_logo_and_wordmark.svg.png";
import Gulp from "../../../../public/images/skills/1200px-Gulp.js_Logo.svg.png";
import sass from "../../../../public/images/skills/1280px-Sass_Logo_Color.svg.png";
import Photoshop from "../../../../public/images/skills/Adobe_Photoshop_CC_icon.svg.png";
import XD from "../../../../public/images/skills/Adobe_XD_CC_icon.svg.png";
import Bootstrap from "../../../../public/images/skills/Bootstrap_logo.svg.png";
import firebase from "../../../../public/images/skills/firebase.png";
import Git from "../../../../public/images/skills/Git-Icon-1788C.png";
import JavaScript from "../../../../public/images/skills/JavaScript-Logo.png";
import php from "../../../../public/images/skills/Webysther_20160423_-_Elephpant.svg.png";
import vue from "../../../../public/images/skills/Vue.js_Logo_2.svg.png";
import ts from "../../../../public/images/skills/Typescript_logo_2020.svg.png";
import Tailwind from "../../../../public/images/skills/Tailwind_CSS_Logo.svg.png";
import sql from "../../../../public/images/skills/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg";
import react from "../../../../public/images/skills/react-1.svg";
import next from "../../../../public/images/skills/nextjs-boilerplate-logo.png";
import redux from "../../../../public/images/skills/logo.png";
import Axios from "../../../../public/images/skills/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png";
import github from "../../../../public/images/skills/25231.png";
import jq from "../../../../public/images/skills/jq.png";
import mongo from "../../../../public/images/skills/mon.png";
import node from "../../../../public/images/skills/node.jpg";

const Skills = () => {
  return (
    <div className="px-10">
      <h1 className="mx-auto py-10 text-center text-4xl sm:text-4xl   xs:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">Skills</h1>

      <div className="flex w-full flex-col justify-center lg:flex-row">
        <div className=" card rounded-box flex  basis-1/2 place-items-center text-center">
        
            <div className="parent  ">
              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce >
                <div className="div1 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                  <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24  rounded-xl">
                      <img
                        src={css}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </Fade>
        
              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>

                <div className="div2 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={html}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>

              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>
                <div className="div3 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={Gulp}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>

              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>

                <div className="div4 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={sass}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>

              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>

              
              <div className="div5 card  rounded-xl bg-base-100 shadow-xl">
                <div className="avatar">
                  <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                    <img
                      src={Photoshop}
                      alt="Shoes"
                      className="rounded-2xl object-scale-down"
                    />
                  </div>
                </div>
              </div>



              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>


              <div className="div6 card  rounded-xl bg-base-100 shadow-xl">
                <div className="avatar">
                  <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                    <img
                      src={XD}
                      alt="Shoes"
                      className="rounded-2xl object-scale-down"
                    />
                  </div>
                </div>
              </div>


              </Fade>
 
              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>


              <div className="div7 card  rounded-xl bg-base-100 shadow-xl">
                <div className="avatar">
                  <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                    <img
                      src={Bootstrap}
                      alt="Shoes"
                      className="rounded-2xl object-scale-down"
                    />
                  </div>
                </div>
              </div>


              </Fade>

              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>


              <div className="div8 card  rounded-xl bg-base-100 shadow-xl">
                <div className="avatar">
                  <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                    <img
                      src={firebase}
                      alt="Shoes"
                      className="rounded-2xl object-scale-down"
                    />
                  </div>
                </div>
              </div>


              </Fade>

              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>


              <div className="div9 card  rounded-xl bg-base-100 shadow-xl">
                <div className="avatar">
                  <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                    <img
                      src={Git}
                      alt="Shoes"
                      className="rounded-2xl object-scale-down"
                    />
                  </div>
                </div>
              </div>


              </Fade>

              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>


              <div className="div10 card  rounded-xl bg-base-100 shadow-xl">
                <div className="avatar">
                  <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                    <img
                      src={JavaScript}
                      alt="Shoes"
                      className="rounded-2xl object-scale-down"
                    />
                  </div>
                </div>
              </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="left" triggerOnce>

              <div className="div11 card  rounded-xl bg-base-100 shadow-xl">
                <div className="avatar">
                  <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                    <img
                      src={next}
                      alt="Shoes"
                      className="rounded-2xl object-scale-down"
                    />
                  </div>
                </div>
              </div>



              </Fade>

            </div>
        
        </div>

        <div className=" card rounded-box flex  basis-1/2 place-items-center text-center">
       
            <div className="parent">
             
        
             
             
              
             
             
              
            
             
             
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div1 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={react}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>


                <div className="div2 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={redux}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div3 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={Tailwind}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div4 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={ts}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div5 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={vue}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div6 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={sql}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div7 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={Axios}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div8 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={php}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div9 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={github}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>

                <div className="div10 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={jq}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div11 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={mongo}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
              <Fade elay={2e3} cascade damping={2e-3} direction="right" triggerOnce>
                <div className="div12 card  rounded-xl bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-14 sm:w-16 md:w-24 lg:w-24 xl:w-24 rounded-xl">
                      <img
                        src={node}
                        alt="Shoes"
                        className="rounded-2xl object-scale-down"
                      />
                    </div>
                  </div>
                </div>


              </Fade>
            </div>
     
        </div>
      </div>
    </div>
  );
};

export default Skills;
