import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const Faq = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-around mx-24">
        <div>
          <h2 className="text-3xl font-bold mb-2">FAQ</h2>
          <p className="text-black font-medium mb-4">
            Explore Our FAQ For Quick Answers
            <br /> And Helpful Info All In One Place!
          </p>
          <button className="border border-black text-black py-2 px-4 rounded w-full mb-6 font-medium">
            MORE
          </button>
        </div>

        <div className="w-[770px]">
          <div className="border-b border-gray-600">
            <div className="flex justify-between items-center w-full py-4">
              <span className="text-black font-bold underline">QUESTIONS</span>
              <span className="text-black  font-medium flex-grow px-4">
                How Can I Cancel My Order?
              </span>
              <ChevronDown className="flex-shrink-0" />
            </div>
          </div>
          <div className="border-b border-gray-600">
            <div className="flex justify-between items-center w-full py-4">
              <span className="text-black font-bold underline">QUESTIONS</span>
              <span className="text-black  font-medium flex-grow px-4">
                How Will I Get My Refund If I Have Cancelled My Pre-Paid Order?
              </span>
              <ChevronDown className="flex-shrink-0" />
            </div>
          </div>
          <div className="border-b border-gray-600">
            <div className="flex justify-between items-center w-full py-4">
              <span className="text-black font-bold underline">QUESTIONS</span>
              <span className="text-black  font-medium flex-grow px-4">
                How Can I Check The Status Or Track My Order?
              </span>
              <ChevronDown className="flex-shrink-0" />
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-center w-full py-4">
              <span className="text-black font-bold underline">QUESTIONS</span>
              <span className="text-black  font-medium flex-grow px-4">
                Can I Add Different Delivery Addresses?
              </span>
              <ChevronUp className="flex-shrink-0" />
            </div>
            <div className="flex justify-between items-center w-full py-4">
              <span className="text-black font-bold underline">RESPONSE</span>
              <p className="text-black  font-medium flex-grow px-4">
                You Can Add A Delivery Address Per Your Convenience And The
                Order Will Be Shipped At That Specific Location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    { question: "How Can I Cancel My Order?" },
    {
      question:
        "How Will I Get My Refund If I Have Cancelled My Pre-Paid Order?",
    },
    { question: "How Can I Check The Status Or Track My Order?" },
    {
      question: "Can I Add Different Delivery Addresses?",
      response:
        "You Can Add A Delivery Address Per Your Convenience And The Order Will Be Shipped At That Specific Location.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">FAQ</h2>
        <p className="text-gray-600 mb-4">
          Explore Our FAQ For Quick Answers And Helpful Info All In One Place!
        </p>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded w-full mb-6">
          MORE
        </button>
        <div>
          {faqItems.map((item, index) => (
            <Faq
              key={index}
              question={item.question}
              response={item.response}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
