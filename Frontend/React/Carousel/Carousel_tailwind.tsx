import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { featuredImages } from "helpers/CarouselData";
let count = 0;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((count) => (count + 1) % featuredImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  console.log(currentIndex);

  return (
    <div className="p-2 basis-4/6 grow">
      <div className="w-full relative select-none">
        <div className="aspect-w-16 aspect-h-9">
          <img src={featuredImages[currentIndex]} alt="" />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button
            className="bg-white text-black p-1 bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <AiOutlineLeft size={20} />
          </button>
          <button
            className=" bg-white text-black p-1  bg-opacity-50 rounded-full  cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <AiOutlineRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
