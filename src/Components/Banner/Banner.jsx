import React from "react";

const Banner = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover  bg-center mt-5 mb-24 rounded-2xl"
      style={{
        backgroundImage: `url('https://i.ibb.co/9kCb2cNQ/mystery-box-collage.jpg')`, 
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute rounded-2xl inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-5xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-xl">
          Unbox Joy Every Month
        </h1>
        <p className="text-lg text-red-100 mb-6 max-w-md">
          Curated subscription boxes tailored to your passions — delivered
          straight to your door.
        </p>
        <button className="btn bg-white text-red-900 font-semibold hover:bg-red-100 w-fit">
          Explore Boxes
        </button>
      </div>
    </section>
  );
};

export default Banner;
