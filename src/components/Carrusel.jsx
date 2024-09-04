import { ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState({
    slide: 1,
    move: 60,
  });

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width > 1000) {
        setSlidesToShow({ slide: 3, move: 60 });
      } else if (width > 700) {
        setSlidesToShow({ slide: 2, move: 40 });
      } else {
        setSlidesToShow({ slide: 1, move: 20 });
      }
    };

    updateSlidesToShow(); // Ejecutar la primera vez
    window.addEventListener("resize", updateSlidesToShow); // Añadir el listener para cambios de tamaño

    return () => {
      window.removeEventListener("resize", updateSlidesToShow); // Limpiar el listener
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - slidesToShow.slide
        ? 0
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? React.Children.count(children) - slidesToShow.slide
        : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * slidesToShow.move) / slidesToShow.slide
            }%)`,
          width: `${(100 * React.Children.count(children)) / slidesToShow.slide
            }%`,
        }}
      >
        {React.Children.map(children, (child) => (
          <div
            className="flex justify-center items-center"
            style={{ width: `${100 / slidesToShow.slide}%` }}
          >
            <div className="w-full h-full flex justify-center items-center">
              {child}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full p-2"
        onClick={prevSlide}
      >
        <ChevronRight
          size={24}
          style={{ transform: "rotate(180deg)" }} // Rotar la flecha hacia la izquierda
        />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full p-2"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const CarouselItem = ({ children }) => (
  <div className="w-full p-3">{children}</div>
);

function Carrusel () {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Nuestra Galería</h2>
        <Carousel>
          {[...Array(5)].map((_, index) => (
            <CarouselItem key={index}>
              <img
                src={`/platos/${index + 1}.jpeg`}
                alt={`El Navegante - Imagen ${index + 1}`}
                className="rounded-lg shadow-lg mx-auto object-center w-full h-64 md:h-80 lg:h-96"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Carrusel