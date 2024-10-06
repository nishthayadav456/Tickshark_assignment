import React from "react";
import { Star } from "lucide-react";
export const Testimonial = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-5xl font-bold text-gray-800 mt-20 mb-6">
          TESTIMONIALS
        </h2>
      </div>
      <div className="mt-20 px-24">
        <div className="flex  justify-around flex-col md:flex-row gap-8">
          <div className="">
            <img
              src="https://s3.envato.com/files/436427743/ya_115140.JPG"
              alt="Woman in activewear"
              className="w-full h-[450px] rounded-lg object-cover"
            />
          </div>

          <div className="md:w-[500px] h-[200px]">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-9 h-9 text-gray-700 m-1" />
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-2">Isha Shukla</h2>
            <p className="text-gray-800 font-semibold mb-4">
              "I'm in love with the quality and style of these clothes! Every
              piece feels like it was made just for me. The fabric is so
              comfortable, and the fit is perfect. I've gotten so many
              compliments, and I can't wait to order more. Truly the best
              shopping experience I've had!"
            </p>

            <h3 className="text-xl font-semibold mb-4">Product</h3>
            <div className="flex   ">
              <img
                src="https://img.adsport.cz/data/zbozi/on/1520x900/on-active-longline-bra_1WE10431917_3.jpg"
                alt="Active Wear"
                className=" rounded-lg w-52"
              />
              <div className="">
                <h4 className="font-bold mb-1">Active Wear</h4>
                <p className="text-sm text-gray-800 mb-2 font-semibold">
                  The brand that supports and doesn't suffocate
                </p>
                <p className="text-sm mb-1">
                  <span className="font-semibold">Colour:</span> Blue
                </p>
                <p className="text-sm mb-2">
                  <span className="font-semibold">Size:</span> S
                </p>
                <button className="border border-black text-black py-2 px-4 rounded  mb-6 font-medium">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
