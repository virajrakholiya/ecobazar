import React, { useState,useEffect } from "react";
import TestiomialData from "./../../data/Testiomial.json";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";


function Testiomial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === TestiomialData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentSlide(prev => 
        prev === TestiomialData.length - 1 ? 0 : prev + 1
      );
    }

    if (touchStart - touchEnd < -75) {
      setCurrentSlide(prev => 
        prev === 0 ? TestiomialData.length - 1 : prev - 1
      );
    }
  };
  return (
    <div className="flex items-center justify-center mt-10 flex-col bg-gray-200 p-5">
      <p className="text-green-500 font-medium">CLIENT TESTIMONIALS</p>
      <h1 className="text-2xl text-center md:text-3xl font-semibold">
        What our Client Says
      </h1>

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-3 gap-5 mt-10 items-center">
        {TestiomialData.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>

      {/* Mobile Slider View */}
      <div className="md:hidden w-full mt-10">
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {TestiomialData.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {TestiomialData.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-4 bg-green-500' : 'w-2 bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Separated TestimonialCard component for reusability
const TestimonialCard = ({ item }) => (
  <div className="bg-white border-2 hover:border-green-500 transition-all rounded-md p-5 flex flex-col group">
    <RiDoubleQuotesL size={30} />
    <p className="text-base font-normal text-black mt-2 group-hover:text-green-500 transition-all">
      {item.msg}
    </p>
    <div className="flex items-center justify-between flex-col lg:flex-row">
      <div className="flex flex-row mt-3 items-center gap-3">
        <img src={item.image} alt="" className="h-10 object-cover" />
        <div className="flex flex-col">
          <p className="text-base font-bold text-black mt-2 group-hover:text-green-500 transition-all">
            {item.name}
          </p>
          <p className="text-base font-normal text-black group-hover:text-green-500 transition-all">
            Customer
          </p>
        </div>
      </div>
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) => (
          <IoIosStar key={index} className="text-yellow-500" />
        ))}
      </div>
    </div>
  </div>
);

export default Testiomial;