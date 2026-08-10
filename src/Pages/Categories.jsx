import { useState } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/catData";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const navigate = useNavigate();

  const handleSubcategoryClick = (sub) => {

  const slug = sub.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  navigate(
    `/categories/${selectedCategory.id}/${slug}`
  );

};

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= CATEGORY SECTION ================= */}

      <div className="relative bg-white overflow-hidden">

        {/* Background decoration */}

        <div className="
          absolute
          -top-20
          -left-20
          w-60
          h-60
          bg-orange-100
          rounded-full
          opacity-500
          blur-3xl
        "></div>

        <div className="
          absolute
          -bottom-20
          -right-20
          w-72
          h-72
          bg-blue-100
          rounded-full
          opacity-60
          blur-3xl
        "></div>


        <div className="
          relative
          max-w-7xl
          mx-auto
          px-6
          py-10
        ">

          {/* TITLE */}

          <div className="text-center">

            <h1 className="
              text-3xl
              md:text-4xl
              font-bold
              text-gray-900
            ">
              Shop by Category
            </h1>

            <p className="
              mt-2
              text-gray-500
              text-sm
              md:text-base
            ">
              Explore our wide range of categories and find what you love
            </p>

          </div>


          {/* ================= CATEGORY CIRCLES ================= */}

          <div className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-8
            md:gap-12
          ">

            {categories.map((category) => (

              <div
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="
                  text-center
                  cursor-pointer
                  group
                "
              >

                {/* CATEGORY IMAGE */}

                <div
                  className={`
                    w-24
                    h-24
                    md:w-28
                    md:h-28
                    rounded-full
                    p-1
                    bg-white
                    transition-all
                    duration-300
                    shadow-md

                    ${
                      selectedCategory.id === category.id
                        ? "border-4 border-blue-600 shadow-xl scale-110"
                        : "border-4 border-gray-200 group-hover:border-blue-400 group-hover:scale-105"
                    }
                  `}
                >

                  <img
                    src={category.image}
                    alt={category.name}
                    className="
                      w-full
                      h-full
                      rounded-full
                      object-cover
                    "
                  />

                </div>


                {/* CATEGORY NAME */}

                <p
                  className={`
                    mt-3
                    font-semibold
                    transition-colors
                    duration-300

                    ${
                      selectedCategory.id === category.id
                        ? "text-blue-600"
                        : "text-gray-800 group-hover:text-blue-600"
                    }
                  `}
                >
                  {category.name}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ================= SUBCATEGORY SECTION ================= */}

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-6
      ">


        {/* SELECTED CATEGORY TITLE */}

        <div className="text-center mb-8">

          <h2 className="
            text-2xl
            md:text-3xl
            font-bold
            text-gray-900
          ">
            {selectedCategory.name}
          </h2>


          {/* BLUE + ORANGE LINE */}

          <div className="
            flex
            justify-center
            items-center
            gap-1
            mt-3
          ">

            <div className="
              w-10
              h-1
              bg-orange-500
              rounded-full
            "></div>

            <div className="
              w-16
              h-1
              bg-blue-600
              rounded-full
            "></div>

          </div>

        </div>


        {/* ================= SUBCATEGORY CARDS ================= */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {selectedCategory.subcategories.map((sub) => (

            <div
              key={sub.name}
              onClick={() => handleSubcategoryClick(sub)}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border
                border-gray-200
                shadow-sm
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* IMAGE */}

              <div className="
                relative
                overflow-hidden
              ">

                <img
                  src={sub.image}
                  alt={sub.name}
                  className="
                    w-full
                    h-52
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* HOVER OVERLAY */}

                <div className="
                  absolute
                  inset-0
                  bg-blue-900
                  opacity-0
                  group-hover:opacity-10
                  transition-opacity
                  duration-300
                "></div>

              </div>


              {/* CARD CONTENT */}

              <div className="p-5">

                <h3 className="
                  text-lg
                  font-bold
                  text-gray-900
                  group-hover:text-blue-600
                  transition-colors
                  duration-300
                ">
                  {sub.name}
                </h3>


                <p className="
                  mt-0
                  text-sm
                  text-gray-500
                ">
                  Explore our latest collection
                </p>


                {/* SHOP NOW */}

                <div className="
                  mt-2
                  flex
                  items-center
                  justify-between
                ">

                  <span className="
                    text-sm
                    font-semibold
                    text-blue-600
                  ">
                    Shop Now
                  </span>

                  <span className="
                    text-xl
                    font-bold
                    text-blue-600
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  ">
                    →
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Categories;