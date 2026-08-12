import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import slide1 from "../assets/slides/slide1.png";
import slide2 from "../assets/slides/slide2.png";
import slide3 from "../assets/slides/slide3.png";

function Home() {

  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slide1,
      smallText: "WOMEN'S COLLECTION",
      title: "Refresh Your",
      highlight: "Style",
      description:
        "Discover elegant fashion, accessories and everyday essentials made for you.",
    },

    {
      image: slide2,
      smallText: "MEN'S COLLECTION",
      title: "Upgrade Your",
      highlight: "Look",
      description:
        "Explore smart fashion, accessories and essentials for every occasion.",
    },

    {
      image: slide3,
      smallText: "EVERYTHING YOU LOVE",
      title: "Shop More.",
      highlight: "Live More.",
      description:
        "Discover fashion, electronics, home essentials and more at Cozycart.",
    },
  ];


  // AUTOMATIC SLIDE
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, [slides.length]);


  // NEXT SLIDE
  const nextSlide = () => {

    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  };


  // PREVIOUS SLIDE
  const previousSlide = () => {

    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  };


  return (

    <section className="w-full px-6 py-6">

      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl">

        {/* SLIDE IMAGE */}

        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].smallText}
          className="w-full h-[520px] object-cover"
        />


        {/* LEFT TEXT */}

        <div className="absolute inset-0 flex items-center">

          <div className="w-[48%] px-10 md:px-14">

            <p className="text-orange-500 font-semibold tracking-widest text-sm mb-4">
              {slides[currentSlide].smallText}
            </p>


            <h1 className="text-4xl md:text-5xl font-bold text-[#12345B] leading-tight">

              {slides[currentSlide].title}

              <br />

              <span className="text-orange-500">
                {slides[currentSlide].highlight}
              </span>

            </h1>


            <p className="text-gray-600 text-base md:text-lg mt-5 max-w-md leading-relaxed">

              {slides[currentSlide].description}

            </p>


            {/* SHOP NOW */}

            <button
              onClick={() => navigate("/categories")}
              className="
                mt-7
                px-7
                py-3.5
                bg-orange-500
                hover:bg-orange-600
                text-white
                font-semibold
                rounded-xl
                shadow-md
                transition
                duration-300
                hover:scale-105
                flex
                items-center
                gap-3
              "
            >

              Shop Now

              <span className="text-xl">
                →
              </span>

            </button>

          </div>

        </div>


        {/* PREVIOUS BUTTON */}

        <button
          onClick={previousSlide}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            bg-white
            rounded-full
            shadow-lg
            text-[#12345B]
            text-xl
            hover:bg-orange-500
            hover:text-white
            transition
          "
        >
          ‹
        </button>


        {/* NEXT BUTTON */}

        <button
          onClick={nextSlide}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            bg-white
            rounded-full
            shadow-lg
            text-[#12345B]
            text-xl
            hover:bg-orange-500
            hover:text-white
            transition
          "
        >
          ›
        </button>


        {/* DOT INDICATORS */}

        <div
          className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            flex
            gap-2
          "
        >

          {slides.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                h-2.5
                rounded-full
                transition-all
                duration-300
                ${
                  currentSlide === index
                    ? "w-8 bg-orange-500"
                    : "w-2.5 bg-white"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>

  );
}

export default Home;