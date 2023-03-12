import React,{useEffect,useState} from 'react'

import Slider from '../slider/Slider'
import Hero from '../hero/Hero'
import Projects from '../projects/Projects'
import Certificate from '../certificate/Certificate'
import useFetch from '../../../useFetch'
import Trend from '../trend/Trend'
import Skills from '../skills/Skills'


const Home = () => {


     return (
       <>
              
        <Hero />
        <Skills/>
        <Projects />
        <Certificate />

       </>

  )
}

export default Home