import React from "react";

export const Footer = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-gray-800 mt-8 mb-6">
        PUSH YOUR LIMITS,BREAK BARRIERS
      </h2>
      <div className="bg-gray-100">
        <h2 className="text-start text-4xl font-bold text-black mt-8 mb-6 pl-28 pt-12">
          ACKON
        </h2>
        <footer className="bg-gray-100 text-gray-600 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-black">
                  INFORMATION
                </h3>
                <ul
                  className="space-y-2 font-medium"
                  style={{ fontSize: "14px" }}
                >
                  <li>PRIVACY POLICY</li>
                  <li>TERMS OF SALE</li>
                  <li>PI COLLECTION NOTICE</li>
                  <li>DO NOT SELL MY INFO</li>
                  <li>ACCESSIBILITY COMMITMENT</li>
                  <li>INVESTOR RELATIONS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-black">
                  FIND YOUR FIT
                </h3>
                <ul
                  className="space-y-2 font-medium"
                  style={{ fontSize: "14px" }}
                >
                  <li>SHOP BY BRAND</li>
                  <li>GIFT CERTIFICATES</li>
                  <li>PRICE MATCH GUARANTEE</li>
                  <li>SUSTAINABLE BRANDS</li>
                  <li>SIGN UP FOR DEALS</li>
                  <li>INVESTOR RELATIONS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-black">ABOUT US</h3>
                <ul
                  className="space-y-2 font-medium"
                  style={{ fontSize: "14px" }}
                >
                  <li>PRIVACY POLICY</li>
                  <li>TERMS OF SALE</li>
                  <li>PI COLLECTION NOTICE</li>
                  <li>DO NOT SELL MY INFO</li>
                  <li>ACCESSIBILITY COMMITMENT</li>
                  <li>INVESTOR RELATIONS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-black">
                  OUR POLICY
                </h3>
                <ul
                  className="space-y-2 font-medium"
                  style={{ fontSize: "14px" }}
                >
                  <li>SHOP BY BRAND</li>
                  <li>GIFT CERTIFICATES</li>
                  <li>PRICE MATCH GUARANTEE</li>
                  <li>SUSTAINABLE BRANDS</li>
                  <li>SIGN UP FOR DEALS</li>
                  <li>INVESTOR RELATIONS</li>
                </ul>
              </div>
            </div>
            <div className="flex mt-8 justify-between">
              <h3 className="font-bold text-lg text-black">PRE ACCESS</h3>
              <h3 className="font-bold text-lg  text-black pr-80">ADDRESS</h3>
            </div>

            <div className=" flex justify-between  mt-2">
              <p className="mb-4 text-black">
                PROVIDE YOUR EMAIL ADDRESS TO STAY UPDATED WITH <br />
                OUR NEW ARRIVALS AND INFORMATION
              </p>

              <div className="pr-60">
                <p>73886-6870</p>
                <p>KIHN VILLAGE</p>
                <p>40881 RODERICK FLAT</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full sm:w-60 border-b text-black pb-2 mb-4 sm:mb-0 sm:mr-4 focus:outline-none"
              />
              <button className="bg-white border border-gray-700 text-gray-700 px-4 py-2 text-sm font-bold">
                SUBSCRIBE
              </button>
            </div>
            <div className="mt-8 flex justify-between items-center text-black font-medium">
              <p>&copy; COPYRIGHT</p>
              <div>
                <span className="mr-4">PRIVACY POLICY</span>|
                <span>TERMS OF USE</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
