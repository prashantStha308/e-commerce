import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const btnRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const startLoop = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const stopLoop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startLoop(); 

    return () => {
      stopLoop();
    };
  }, [slides.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    stopLoop(); 
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startLoop(); 
  };

  return (
    <div className="h-[calc(70vh-80px)] overflow-hidden overflow-x-hidden mb-44">
      {/* WRAPPER */}
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col justify-center items-center gap-8 2xl:gap-12">
              <h2 className="text-lg lg:text-3xl 2xl:text-5xl text-left px-4">
                {slide.short_description.replace(/\<p>/, "").replace(/\<\/p>/, "")}
              </h2>
              <h1 className="text-2xl lg:text-5xl 2xl:text-8xl font-semibold text-center">
                {slide.name}
              </h1>
              {/* Button */}
              <Link href={`/product/${slide.id}`}>
                <button
                  ref={btnRef}
                  className="bg-black text-white rounded-md px-4 py-3 cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="relative h-1/2 xl:h-full xl:w-1/2 cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              <Image
                src={slide.images[0].src}
                alt={slide.name}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOTS SELECT */}
      <div className="absolute left-1/2 bottom-20 md:bottom-40 flex gap-4 -translate-x-1/2">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-500 dark:ring-gray-300 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] rounded-full bg-gray-600 dark:bg-gray-400"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
