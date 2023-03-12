import React,{useEffect,useState} from 'react'

import Hero from '../hero/Hero'
import Projects from '../projects/Projects'
import Certificate from '../certificate/Certificate'
import useFetch from '../../../useFetch'
import Skills from '../skills/Skills'
import Contacts from '../contacts/Contacts'


const Home = () => {


     return (
       <>
              
        <Hero />
        <Skills/>
        <Projects />
        <Certificate />
         <Contacts />

       </>

  )
}

export default Home