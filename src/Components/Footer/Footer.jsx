import React from "react";
import footer from "../../assets/assets/food-logo.png";
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobile } from "react-icons/fa6";
import { FaLinkedin, FaMobileAlt } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-950 ">
        <div className="max-w-[1200px] mx-auto ">
          <div className="grid md:grid-cols-3 py-5 ">
            <div className="py-8 px-4">
              <h1 className="grid  items-center gap-3 text-xl sm:text-3xl  font-bold text-justify sm:text-left">
                <img className="max-w-[50px]" src={footer} alt="" />
                FOOODIE
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                repellendus quo magnam optio temporibus nesciunt tempore
                incidunt asperiores ipsam, reprehenderit architecto aliquid id
                perferendis cum, ut saepe eius illo tempora.
              </p>
              <br />
              <hr  width="100%"/>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                    <FaFacebook className="text-3xl"/>
                </a>
                <a href="#">
                    <FaLinkedin className="text-3xl"/>
                </a><a href="#">
                    <FaInstagram className="text-3xl"/>
                </a>

            </div>
              <div className="flex items-center  gap-3 mt-6">
                <FaLocationArrow/>
                <p>Karachi, Pakistan</p>
              </div>
              
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt/>
                <p>+92 3232674099 </p>
              </div>
            </div>
            {}
            
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 col-span md:pl-10"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
