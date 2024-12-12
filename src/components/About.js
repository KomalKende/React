import React from "react";

const About = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-orange-500 font-bold text-2xl py-4">About Us</h1>
      <p>
        We build innovative products & solutions that deliver unparalleled
        convenience to urban consumers.<br></br>
        The best part? Every bit of your work at Swiggy will help elevate the
        lives of our users across India.
      </p>
      <h1 className="text-orange-500 font-bold text-2xl pt-8">
        Where Do You Belong?
      </h1>
      <div className="row justify-around flex flex-wrap text-center m-2 p-4">
        <div className="w-[400] text-center p-8 rounded-xl bg-white border-2 border-solid border-gray-200 my-4 hover:shadow-lg">
          <img
            src="https://careers.swiggy.com/assets/img/icons/ic_1.png"
            alt="technology"
            className="w-100 p-4 m-auto"
          />
          <h1 className="font-bold p-4">TECHNOLOGY</h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            possimus. Quam enim voluptas voluptatibus?
          </p>
          <button className="py-2 px-8 rounded-lg my-4 bg-orange-500 text-white shadow-xl">
            Explore
          </button>
        </div>
        <div className="w-[400] text-center p-8 rounded-xl bg-white border-2 border-solid border-gray-200 my-4 hover:shadow-lg">
          <img
            src="https://careers.swiggy.com/assets/img/icons/ic_2.png"
            alt="business"
            className="w-100 p-4 m-auto"
          />
          <h1 className="font-bold p-4">BUSINESS</h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            possimus. Quam enim voluptas voluptatibus?
          </p>
          <button className="py-2 px-8 rounded-lg my-4 bg-orange-500 text-white shadow-xl">
            Explore
          </button>
        </div>
        <div className="w-[400] text-center p-8 rounded-xl bg-white border-2 border-solid border-gray-200 my-4 hover:shadow-lg">
          <img
            src="https://careers.swiggy.com/assets/img/icons/ic_3.png"
            alt="cloud kitchen"
            className="w-100 p-4 m-auto"
          />
          <h1 className="font-bold p-4">CLOUD KITCHEN</h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            possimus. Quam enim voluptas voluptatibus?
          </p>
          <button className="py-2 px-8 rounded-lg my-4 bg-orange-500 text-white shadow-xl">
            Explore
          </button>
        </div>
        <div className="w-[400] text-center p-8 rounded-xl bg-white border-2 border-solid border-gray-200 my-4 hover:shadow-lg">
          <img
            src="https://careers.swiggy.com/assets/img/icons/ic_4.png"
            alt="customer care"
            className="w-100 p-4 m-auto"
          />
          <h1 className="font-bold p-4">CUSTOMER CARE </h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            possimus. Quam enim voluptas voluptatibus?
          </p>
          <button className="py-2 px-8 rounded-lg my-4 bg-orange-500 text-white shadow-xl">
            Explore
          </button>
        </div>
        <div className="w-[400] text-center p-8 rounded-xl bg-white border-2 border-solid border-gray-200 my-4 hover:shadow-lg">
          <img
            src="https://careers.swiggy.com/assets/img/icons/ic_5.png"
            alt="CAMPUS"
            className="w-100 p-4 m-auto"
          />
          <h1 className="font-bold p-4">CAMPUS</h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            possimus. Quam enim voluptas voluptatibus?
          </p>
          <button className="py-2 px-8 rounded-lg my-4 bg-orange-500 text-white shadow-xl">
            Explore
          </button>
        </div>
        <div className="w-[400] text-center p-8 rounded-xl bg-white border-2 border-solid border-gray-200 my-4 hover:shadow-lg">
          <img
            src="https://careers.swiggy.com/assets/img/icons/ic_6.png"
            alt="technology"
            className="w-100 p-4 m-auto"
          />
          <h1 className="font-bold p-4">CORPORATE SUPPORT FUNCTIONS</h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            possimus. Quam enim voluptas voluptatibus?
          </p>
          <button className="py-2 px-8 rounded-lg my-4 bg-orange-500 text-white shadow-xl">
            Explore
          </button>
        </div>
      </div>
      {/* <hr></hr> */}
      <div className="row my-4">
        <h1 className="text-orange-500 font-bold text-2xl py-4">
          Industry pioneer
        </h1>
        <div className="row flex justify-around p-4">
          <div className="w-7/12 p-4">
            <p className="text-lg pb-4 text-left">
              Being among the first few entrants, Swiggy has successfully
              pioneered the hyperlocal commerce industry in India, launching
              Food Delivery in 2014 and Quick Commerce in 2020. Due to the
              pioneering status of Swiggy, it is well-recognised as a leader in
              innovation in hyperlocal commerce and as a brand synonymous with
              the categories it is present in.
            </p>
            <ul className="text-left p-4 list-disc mx-4">
              <li>
                <span className="font-bold text-orange-500 text-lg">3 Billion+ </span>orders delivered
              </li>
              <li>
                <span className="font-bold text-orange-500 text-lg">220 k+ </span>restaurant partners
              </li>
              <li>
                <span className="font-bold text-orange-500 text-lg">520 k+ </span>delivery partners
              </li>
              <li>
                <span className="font-bold text-orange-500 text-lg">680 + </span>cities in India
              </li>
            </ul>
          </div>
          <div className="w-5/12 p-4">
            <img
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/Group-1116602947-768x507.webp"
              alt="industry pioneer" className="w-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
