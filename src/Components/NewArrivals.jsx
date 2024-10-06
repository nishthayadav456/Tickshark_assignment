import React, { useContext } from "react";
import { AppContext } from "./ContextStore.jsx";

export const NewArrivals = () => {
  const { data, setData } = useContext(AppContext);
  console.log(data);

  return (
    <div>
      <div className="px-40">
        <h2 className="text-center text-5xl font-bold text-gray-800 mt-14 mb-6">
          NEW ARRIVALS
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mt-14">
          <div className="flex-1">
            {data
              .filter((item) => item.id === 1)
              .map((item, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt="Fitness wear"
                    className="w-full h-[600px] "
                  />
                </div>
              ))}
          </div>

          <div className="flex flex-col flex-1 space-y-4">
            {data
              .filter((item) => item.id >= 2 && item.id <= 3)
              .map((item, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt="Fitness pose"
                    className="w-full h-[290px] object-cover"
                  />
                </div>
              ))}
          </div>

          <div className="flex-1">
            {data
              .filter((item) => item.id === 4)
              .map((item, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt="Fitness model"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className=" flex justify-center mt-6">
          <h2 className="text-center text-3xl font-bold text-black mt-10 mb-6">
            EXPLORE NOW
          </h2>
          <div className="pt-12 pl-5 font-bold">
            <svg
              className="w-6 h-6 transform transition-transform duration-300 hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-40">
        <h2 className="text-center text-5xl font-bold text-gray-800 mt-10 mb-6">
          PUSH LIMITS BREAK BARRIERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {data
            .filter((item) => item.id >= 5 && item.id <= 7)
            .map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-800 text-xl">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="container mx-auto px-40">
        <h2 className="text-center text-5xl font-bold text-gray-800 mt-20 mb-6">
          BRAND CATEGORIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
  {data
    .filter((item) => item.id >= 8 && item.id <= 10)
    .map((item, index) => (
      <div key={index} className="flex flex-col group relative">
        <div className="overflow-hidden rounded-lg mb-4 relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-96 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
          {/* SHOP NOW Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-black px-6 py-3 text-lg font-semibold rounded-full hover:bg-gray-200 transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-800 text-xl">{item.description}</p>
      </div>
    ))}
</div>
      </div>
    </div>
  );
};
