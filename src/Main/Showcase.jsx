import React, { useState, useEffect } from "react";

function Showcase() {
  const images = [
    "/src/assets/image/ShowCase1.png",
    "/src/assets/image/ShowCase2.png",
    "/src/assets/image/ShowCase3.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }

    if (touchStart - touchEnd < -75) {
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      {/* Desktop grid view */}
      <div className="hidden sm:grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 items-center w-full justify-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="h-[400px] md:h-auto object-contain rounded-lg w-full"
            alt={`Showcase ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile slider view */}
      <div className="sm:hidden w-full flex flex-col items-center justify-center">
        <div
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out h-[400px]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                className="w-full flex-shrink-0 object-contain rounded-lg"
                alt={`Showcase ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="flex gap-2 mt-5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Showcase;
