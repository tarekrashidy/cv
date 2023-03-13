import React, { useState } from "react";

function Footer() {
  const [show, setShow] = useState(false);

  return (
     
      <footer className="w-full flex items-center justify-center footer    inset-x-0 bottom-0">
          <div className=" top-40  shadow rounded pb-12 lg:px-28 px-8">
       
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none">
                  Name
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input  name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none ">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                />
              </div>
            </div>
     
        <div className="md:flex items-center w-full" >
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none ">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  className="h-36 text-base leading-none  p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
         
            <div className="flex items-center justify-center w-full">
                
            <a href="mailto:tarekahmed1568@gmail.com">
            <button className=" btn  border-0 bg-gradient-to-r from-sky-700 to-sky-500 m-4 mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
              
              SUBMIT
              
              
              </button>
            </a>

            </div>
          </div>
    </footer>
     
   
  );
}

export default Footer;
