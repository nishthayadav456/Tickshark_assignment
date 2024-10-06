import React from "react";
import { Navbars } from "./Navbars";
import Slider from "./Slider";
import { NewArrivals } from "./NewArrivals";
import { AppProvider } from "./ContextStore";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Testimonial } from "./Testimonial";
export const Home = () => {
  return (
    <div>
      <AppProvider>
        <div>
          <Navbars />
        </div>
        <div className="mt-5">
          <Slider />
        </div>
        <div>
          <NewArrivals />
        </div>
        <div>
          <Testimonial />
        </div>
        <div>
          <Faq />
        </div>
        <div>
          <Footer />
        </div>
      </AppProvider>
    </div>
  );
};
