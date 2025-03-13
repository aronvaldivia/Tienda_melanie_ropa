import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    title: "Discover Your Style",
    subtitle: "Explore our curated collection of contemporary women's fashion. Elegance meets modern design."
  },
  {
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    title: "Spring Collection 2024",
    subtitle: "Embrace the season with our latest designs and timeless pieces."
  },
  {
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "Elegance Defined",
    subtitle: "Sophisticated designs for the modern woman. Find your perfect look."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out
            ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{slide.title}</h1>
              <p className="text-xl mb-8 max-w-xl">{slide.subtitle}</p>
              <a
                href="#catalog"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium hover:bg-white hover:text-black transition-colors duration-200"
              >
                View Collection <ChevronRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all duration-200"
        disabled={isAnimating}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all duration-200"
        disabled={isAnimating}
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-200 
              ${currentSlide === index 
                ? 'bg-white w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;