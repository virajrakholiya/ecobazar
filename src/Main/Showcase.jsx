import React, { useState, useCallback } from "react";

function Showcase() {
  const images = [
    "/src/assets/image/ShowCase1.png",
    "/src/assets/image/ShowCase2.png",
    "/src/assets/image/ShowCase3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = useCallback(
    (e) => {
      if (!touchStart) return;

      const touchEnd = e.touches[0].clientX;
      const diff = touchStart - touchEnd;

      if (Math.abs(diff) > 50) {
        // Minimum swipe distance
        if (diff > 0 && currentIndex < images.length - 1) {
          // Swipe left
          setCurrentIndex((prev) => prev + 1);
        } else if (diff < 0 && currentIndex > 0) {
          // Swipe right
          setCurrentIndex((prev) => prev - 1);
        }
        setTouchStart(null);
      }
    },
    [touchStart, currentIndex, images.length]
  );

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full ">
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

      <div className="sm:hidden  w-full flex flex-col items-center justify-center">
        <div
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out h-[400px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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

        <div className="flex gap-2 mt-5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
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
