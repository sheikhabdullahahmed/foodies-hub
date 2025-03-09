import React from "react";
import Food1 from "../../assets/assets/biryani5.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div>
      <div className="min-h-[500px] ">
        <div
          data-aos="silde-up"
          data-aos-duration="silde"
          className="container"
        >
          <div className="grid grid-cols-1 my-10  sm:grid-cols-2 gap-">
            {/* {image section} */}
            <div className="w-full max-w-sm mx-auto">
              <img
                className="w-full h-auto drop-shadow-[10_10px_12px_rgba(0,0,0,0.1)]"
                src={Food1}
                alt="Delicious Food"
              />
            </div>

            {/* {Text- content} */}
            <div className="flex flex-col   justify-center gap-6 mx-6 md:mx-4   sm:pt-5">
              <h1 className="text-3xl lg:text-5xl md:text-3xl font-medium text-blue-950  ">
                Savor The Flavor!{" "}
              </h1>
              <hr />
              <p className="text-base lg:text-lg md:text-base text-gray-700 ">
                We offer delicious food in a welcoming atmosphere, ensuring
                every dining experience is memorable and enjoyable.
              </p>
              <p className="text-base lg:text-lg ">
              Treat yourself to delicious meals prepared with the finest
              ingredients. Our cozy atmosphere is perfect for any occasion.
              Experience exceptional service and create lasting memories with
              every visit.
              </p>
              <div>
                <button
                  className="bg-yellow-400 text-white px-5 py-3 my-4  font-semibold rounded  
            flex item-center gap-2"
                >
                  {" "}
                  Oder Now{" "}
                </button>
              </div>
            </div>
            <div className="flex justify-center mb-4 md:ml-3    gap-7">
              <div>
                <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5   rounded-full bg-violet-200 " />
              </div>
              <div>
                <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5  rounded-full bg-orange-200 " />
              </div>
              <div>
                <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5  rounded-full bg-green-200 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
