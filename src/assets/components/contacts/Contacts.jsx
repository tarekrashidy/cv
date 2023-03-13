import React from 'react'

const Contacts = () => {
  return (
    <div>
       
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    
          <div>
             
              <h1 className='   mx-auto py-12 text-center text-4xl sm:text-4xl   xs:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold'>Contacts</h1>
              <div className="flex flex-row items-center justify-center py-4 flex-wrap ">
               
                  <a href="https://github.com/marstarek" target='_blank'>
                      <div className="ease-in-out duration-300 group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all bg-white rounded-full shadow-sm  shadow-gray-400 float-left overflow-hidden cursor-pointer">
                          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-in-out duration-300 box-border rounded-full leading-[65px] group-hover:bg-[#333]">
                              <i className="fab fa-github text-2xl leading-[60px] transition-all ease-in-out duration-300 text-white"></i>
                          </div>
                          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-in-out duration-300 group-hover:text-[#333]">Github</span>
                      </div>


             </a>
                  <a href="https://www.linkedin.com/in/tarek-ahmed-iti/" target='_blank'>
                 
                  <div className="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-in-out duration-300 bg-white rounded-full shadow-sm  shadow-gray-400 float-left overflow-hidden cursor-pointer">
                      <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-in-out duration-300 box-border rounded-full leading-[65px] group-hover:bg-[#0A66C2]">
                          <i className="fab fa-linkedin text-2xl leading-[60px] transition-all ease-in-out duration-300 text-white"></i>
                      </div>
                      <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-in-out duration-300 group-hover:text-[#0A66C2]">Linkedin</span>
                  </div>
                  </a>
                  <a href="https://codepen.io/marstarek" target='_blank'>

                  <div className="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-in-out duration-300 bg-white rounded-full shadow-sm  shadow-gray-400 float-left overflow-hidden cursor-pointer">
                      <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-in-out duration-300 box-border rounded-full leading-[65px] group-hover:bg-[#1B1C24]">
                          <i className="fa-brands fa-codepen text-2xl leading-[60px] transition-all ease-in-out duration-300 text-white"></i>
                      </div>
                      <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-in-out duration-300 group-hover:text-[#1B1C24]">CodePen</span>
                  </div>




                  </a>
                  <a href="mailto:tarekahmed1568@gmail.com" target='_blank'>
                      <div className="group m-3 inline-block h-16 w-16 py-0 hover:w-52 transition-all ease-in-out duration-300 bg-white rounded-full shadow-sm  shadow-gray-400 float-left overflow-hidden cursor-pointer">
                          <div className="inline-block h-16 w-16 text-center bg-zinc-900 transition-all ease-in-out duration-300 box-border rounded-full leading-[65px] group-hover:bg-[#EA4335]">
                              <i className="fa-brands fa-google text-2xl leading-[60px] transition-all ease-in-out duration-300 text-white"></i>
                          </div>
                          <span className="text-xl font-medium ml-2 leading-[65px] transition-all ease-in-out duration-300 group-hover:text-[#EA4335]">Google</span>
                      </div>
                  </a>
                
              </div>
          </div>
    </div>
  )
}

export default Contacts
