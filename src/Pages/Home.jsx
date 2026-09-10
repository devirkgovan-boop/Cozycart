import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import slide1 from "../assets/slides/slide1.png";
import slide2 from "../assets/slides/slide2.png";
import slide3 from "../assets/slides/slide3.png";

import categories from "../data/catData";
import products from "../data/productData";

import ProductCard from "../components/ProductCard";

function Home() {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  // =========================================================
  // HERO SLIDES
  // =========================================================

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

  // =========================================================
  // AUTOMATIC SLIDE
  // =========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // =========================================================
  // NEXT SLIDE
  // =========================================================

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  // =========================================================
  // PREVIOUS SLIDE
  // =========================================================

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // =========================================================
  // HOMEPAGE PRODUCTS
  // =========================================================

  // Trending products
  const trendingProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  // New products
  const newArrivals = products
    .filter((product) => product.isNew)
    .slice(0, 4);

  // =========================================================
  // CATEGORY CLICK
  // =========================================================

  const handleCategoryClick = () => {
    navigate("/categories");
  };

  return (
    <div className="bg-gray-50">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

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


      {/* =====================================================
          SHOP BY CATEGORY
      ===================================================== */}

      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}

          <div className="text-center mb-10">

            <p className="text-orange-500 font-semibold tracking-wider text-sm">
              EXPLORE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Shop by Category
            </h2>

            <p className="text-gray-500 mt-3">
              Find everything you need in one place
            </p>

          </div>


          {/* CATEGORY CARDS */}

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

            {categories.map((category) => (

              <div
                key={category.id}
                onClick={handleCategoryClick}
                className="
                  group
                  cursor-pointer
                  text-center
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    mx-auto
                    w-32
                    h-32
                    md:w-36
                    md:h-36
                    rounded-full
                    overflow-hidden
                    border-4
                    border-gray-100
                    shadow-md
                    group-hover:border-orange-400
                    group-hover:shadow-xl
                    group-hover:scale-105
                    transition-all
                    duration-300
                  "
                >

                  <img
                    src={category.image}
                    alt={category.name}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </div>


                {/* CATEGORY NAME */}

                <h3
                  className="
                    mt-4
                    text-lg
                    font-bold
                    text-gray-800
                    group-hover:text-blue-700
                    transition
                  "
                >
                  {category.name}
                </h3>

              </div>

            ))}

          </div>


          {/* VIEW ALL */}

          <div className="text-center mt-10">

            <button
              onClick={() => navigate("/categories")}
              className="
                px-7
                py-3
                border-2
                border-blue-700
                text-blue-700
                font-semibold
                rounded-xl
                hover:bg-blue-700
                hover:text-white
                transition
              "
            >
              View All Categories →
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRENDING PRODUCTS
      ===================================================== */}

      <section className="py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">

            <div>

              <p className="text-orange-500 font-semibold tracking-wider text-sm">
                CUSTOMER FAVORITES
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Trending Products
              </h2>

              <p className="text-gray-500 mt-2">
                Popular picks that everyone is loving
              </p>

            </div>


            <button
              onClick={() => navigate("/categories")}
              className="
                mt-5
                md:mt-0
                text-blue-700
                font-semibold
                hover:text-orange-500
                transition
              "
            >
              View All →
            </button>

          </div>


          {/* PRODUCT GRID */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            {trendingProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OFFER BANNER
      ===================================================== */}

      <section className="py-8 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-[#12345B]
              px-8
              py-12
              md:px-16
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-8
            "
          >

            {/* DECORATIVE CIRCLE */}

            <div
              className="
                absolute
                -right-20
                -top-20
                w-60
                h-60
                rounded-full
                bg-orange-500
                opacity-20
              "
            />

            <div
              className="
                absolute
                -left-20
                -bottom-20
                w-52
                h-52
                rounded-full
                bg-blue-400
                opacity-20
              "
            />


            {/* TEXT */}

            <div className="relative z-10 text-white">

              <p className="text-orange-400 font-bold tracking-widest text-sm">
                LIMITED TIME OFFER
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Big Style. Better Prices.
              </h2>

              <p className="text-gray-300 mt-3 max-w-lg">
                Discover amazing deals across fashion, electronics,
                home essentials and more.
              </p>

            </div>


            {/* BUTTON */}

            <button
              onClick={() => navigate("/categories")}
              className="
                relative
                z-10
                bg-orange-500
                hover:bg-orange-600
                text-white
                font-bold
                px-8
                py-3.5
                rounded-xl
                transition
                duration-300
                hover:scale-105
                whitespace-nowrap
              "
            >
              Shop Deals →
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEW ARRIVALS
      ===================================================== */}

      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}

          <div className="text-center mb-10">

            <p className="text-orange-500 font-semibold tracking-wider text-sm">
              JUST ARRIVED
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              New Arrivals
            </h2>

            <p className="text-gray-500 mt-3">
              Fresh styles and products added to CozyCart
            </p>

          </div>


          {/* PRODUCTS */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            {newArrivals.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE COZYCART
      ===================================================== */}

      <section className="py-16 bg-blue-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}

          <div className="text-center mb-10">

            <p className="text-orange-500 font-semibold tracking-wider text-sm">
              SHOP WITH CONFIDENCE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Why Choose CozyCart?
            </h2>

            <p className="text-gray-500 mt-3">
              We make your shopping experience simple and enjoyable
            </p>

          </div>


          {/* FEATURES */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* FAST DELIVERY */}

            <div
              className="
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                transition
              "
            >

              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-orange-100
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                🚚
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                Fast Delivery
              </h3>

              <p className="text-gray-500 mt-2">
                Get your favorite products delivered to your doorstep.
              </p>

            </div>


            {/* SECURE SHOPPING */}

            <div
              className="
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                transition
              "
            >

              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-blue-100
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                🔒
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                Secure Shopping
              </h3>

              <p className="text-gray-500 mt-2">
                Shop with confidence with a safe and secure experience.
              </p>

            </div>


            {/* QUALITY */}

            <div
              className="
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                transition
              "
            >

              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-orange-100
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                ⭐
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                Quality Products
              </h3>

              <p className="text-gray-500 mt-2">
                Discover products selected to give you great value.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="py-16 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-orange-500 font-semibold tracking-wider text-sm">
            STAY UPDATED
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Get the CozyCart Experience
          </h2>

          <p className="text-gray-500 mt-3">
            Stay updated with new arrivals, offers and latest collections.
          </p>


          <div
            className="
              mt-7
              flex
              flex-col
              sm:flex-row
              gap-3
              max-w-xl
              mx-auto
            "
          >

            <input
              type="email"
              placeholder="Enter your email address"
              className="
                flex-1
                border
                border-gray-300
                rounded-xl
                px-5
                py-3
                outline-none
                focus:border-blue-600
                focus:ring-2
                focus:ring-blue-100
              "
            />

            <button
              className="
                bg-blue-700
                hover:bg-blue-800
                text-white
                font-semibold
                px-7
                py-3
                rounded-xl
                transition
              "
            >
              Subscribe
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#12345B] text-white">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* BRAND */}

            <div>

              <h2 className="text-3xl font-bold">
                Cozy
                <span className="text-orange-500">
                  Cart
                </span>
              </h2>

              <p className="text-blue-100 mt-4 leading-relaxed">
                Your one-stop destination for fashion,
                electronics, home essentials and more.
              </p>

            </div>


            {/* QUICK LINKS */}

            <div>

              <h3 className="font-bold text-lg mb-4">
                Quick Links
              </h3>

              <div className="space-y-3 text-blue-100">

                <button
                  onClick={() => navigate("/")}
                  className="block hover:text-orange-400 transition"
                >
                  Home
                </button>

                <button
                  onClick={() => navigate("/categories")}
                  className="block hover:text-orange-400 transition"
                >
                  Categories
                </button>

                <button
                  onClick={() => navigate("/wishlist")}
                  className="block hover:text-orange-400 transition"
                >
                  Wishlist
                </button>

                <button
                  onClick={() => navigate("/cart")}
                  className="block hover:text-orange-400 transition"
                >
                  Cart
                </button>

              </div>

            </div>


            {/* CATEGORIES */}

            <div>

              <h3 className="font-bold text-lg mb-4">
                Categories
              </h3>

              <div className="space-y-3 text-blue-100">

                {categories.slice(0, 4).map((category) => (

                  <button
                    key={category.id}
                    onClick={() => navigate("/categories")}
                    className="
                      block
                      hover:text-orange-400
                      transition
                    "
                  >
                    {category.name}
                  </button>

                ))}

              </div>

            </div>


            {/* CONTACT */}

            <div>

              <h3 className="font-bold text-lg mb-4">
                Customer Support
              </h3>

              <div className="space-y-3 text-blue-100">

                <p>
                  📧 support@cozycart.com
                </p>

                <p>
                  📞 +91 98765 43210
                </p>

                <p>
                  🕐 Mon - Sat: 9 AM - 6 PM
                </p>

              </div>

            </div>

          </div>


          {/* COPYRIGHT */}

          <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-200">

            <p>
              © 2026 CozyCart. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;