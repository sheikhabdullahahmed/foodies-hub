import React from "react";
// import Img2 from "../../assets/assets/biryani2.png";

const ServiceData = [
  {
    id: 1,
    img: "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Gosht-Biryani-1300x868.jpeg?v=1625193165",
    name: "Biryani",
    description:
       "Our biryani is a perfect blend of aromatic spices and tender.🍛🔥 ",
  },
  {
    id: 2,
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/12/Chicken-Karahi-847828f.jpg?resize=768,574",
    name: "Chicken karahi",
    description:
      " Enjoy the rich, spicy flavors of our authentic Chicken Karahi, cooked . ",
  },
  {
    id: 3,
    img: "https://lifeboostcoffee.com/cdn/shop/articles/feature_image_2_129f7852-2237-47ae-9eac-675a8f808cfd.jpg?v=1696603416",
    name: "Cold Coffe",
    description:
      " Enjoy the rich and creamy taste of our perfectly brewed cold ! ☕❄️ ",
  },
];

function Service() {
  return (
    <div className="py-2 px-4 ">
    <div id="about" className="container mx-auto">
      {/* Header Section */}
      <div  className="mb-16 mx-auto flex flex-col items-center text-center max-w-lg">
        <p className="text-lg mt-5 lg:text-2xl bg-clip-text text-transparent text-yellow-500">
          Our Service
        </p>
        <h1 className="text-3xl lg:text-5xl text-blue-950 my-3 font-medium">Service</h1>
        <p className="text-base lg:text-xl my-1 text-gray-600">
          Welcome to our restaurant! Here, you will enjoy the finest and most
          delicious food.
        </p>
      </div>
      {/* End Header Section */}
  
      {/* Service Cards Section */}
      <div >
        <div className="flex flex-col md:flex-row lg:flex-row  items-center gap-6 justify-center text-center">
          {ServiceData.map(({ id, img, name, description }) => {
            return (
              <div
                key={id}
                className="bg-yellow-400 cursor-pointer rounded-xl duration-300 p-7 w-full sm:w-[300px] md:w-[550px] lg:w-[320px]"
              >
                <div className=" h-32 flex justify-center">
                  <img
                    src={img}
                    alt=""
                    className=" sm:max-w-[180px] max-w-96 mt-4   rounded-xl transform -translate-y-10 sm:-translate-y-14 group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 group">
  <h1 className="text-lg lg:text-2xl text-white font-semibold py-1 relative">
    {name}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
  </h1>
  <p className="text-base lg:text-lg   text-white duration-300 line-clamp-2">
    {description}
  </p>
</div>

              </div>
            );
          })}
        </div>
      </div>
      {/* End Service Cards Section */}
    </div>
  </div>
    );
}

export default Service;
