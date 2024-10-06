import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

import { Navbars } from "./Navbars";
import { Footer } from "./Footer";
import Slider from "./Slider";
import { NewArrivals } from "./NewArrivals";
import { Faq } from "./Faq";
import { Testimonial } from "./Testimonial";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/navbar" element={<Navbars />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/newarrival" element={<NewArrivals />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
