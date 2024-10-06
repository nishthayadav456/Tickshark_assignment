import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://www.pcwellnessdigest.com/website/uploads/7352e0886776183d2abd7cb0380d650c.jpg",
    },
    {
      image:
        "https://w0.peakpx.com/wallpaper/119/180/HD-wallpaper-girl-fitness-model-exercise-sports-girls.jpg",
    },
    {
      image:
        "https://e0.pxfuel.com/wallpapers/208/975/desktop-wallpaper-workout-women-model-gym.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative w-[1200px] h-[650px] overflow-hidden rounded-lg ">
        {/* Slides */}
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Full-width image container */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={`Fitness slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0"></div>
              </div>

              {/* Text Overlay */}
              <div className="absolute top-0 left-0 h-full w-1/2 flex items-center z-20 pl-16 ">
                <div>
                  <h2 className="text-6xl font-bold text-gray-800 mb-4">
                    THE ACKON
                    <br />
                    SIGNATURE
                  </h2>
                  <div className="flex items-center">
                    <span className="text-xl text-gray-700 mr-2 font-bold cursor-pointer hover:text-gray-900 transition-colors">
                      EXPLORE NOW
                    </span>
                    <svg
                      className="w-6 h-6 text-gray-700"
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
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all z-20"
        >
          <ChevronLeft className="h-8 w-8 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all z-20"
        >
          <ChevronRight className="h-8 w-8 text-gray-700" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white scale-100"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
