import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../assets/Cozycartlogo.png";

import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import products from "../data/productData";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  // ==========================================
  // SEARCH PRODUCTS
  // ==========================================

  const searchResults =
    search.trim() === ""
      ? []
      : products
          .filter((product) => {
            const searchText = search.toLowerCase();

            return (
              product.name
                .toLowerCase()
                .includes(searchText) ||
              product.category
                .toLowerCase()
                .includes(searchText) ||
              product.subcategory
                .toLowerCase()
                .includes(searchText)
            );
          })
          .slice(0, 6);

  // ==========================================
  // OPEN PRODUCT
  // ==========================================

  const openProduct = (product) => {
    const categoryPath = product.categoryId;

    const subcategoryPath = product.subcategory
      .toLowerCase()
      .replace(/\s+/g, "-");

    navigate(
      `/categories/${categoryPath}/${encodeURIComponent(
        subcategoryPath
      )}`
    );

    setSearch("");
    setShowResults(false);
  };

  // ==========================================
  // ENTER KEY SEARCH
  // ==========================================

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchResults.length > 0) {
        openProduct(searchResults[0]);
      }
    }
  };

  return (
    <nav className="bg-[#F1F5F9] flex justify-between items-center p-4 relative z-50">

      {/* ==========================================
          LOGO
      ========================================== */}

      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          className="w-65 h-14 object-cover mt-2 cursor-pointer"
        />
      </Link>


      {/* ==========================================
          SEARCH
      ========================================== */}

      <div className="relative w-180">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => {
            if (search.trim() !== "") {
              setShowResults(true);
            }
          }}
          onKeyDown={handleSearchKeyDown}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />


        {/* ==========================================
            SEARCH RESULTS
        ========================================== */}

        {showResults && search.trim() !== "" && (

          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">

            {searchResults.length > 0 ? (

              <div>

                {searchResults.map((product) => (

                  <button
                    key={product.id}
                    type="button"
                    onClick={() => openProduct(product)}
                    className="w-full flex items-center gap-4 p-3 text-left hover:bg-blue-50 transition"
                  >

                    {/* PRODUCT IMAGE */}

                    <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-1"
                      />

                    </div>


                    {/* PRODUCT DETAILS */}

                    <div className="min-w-0">

                      <p className="font-bold text-blue-950 truncate">
                        {product.name}
                      </p>

                      <p className="text-xs text-gray-500 capitalize">
                        {product.category} •{" "}
                        {product.subcategory}
                      </p>

                      <p className="text-sm font-bold text-blue-700 mt-1">
                        ₹
                        {Number(
                          product.price
                        ).toLocaleString("en-IN")}
                      </p>

                    </div>

                  </button>

                ))}

              </div>

            ) : (

              <div className="p-5 text-center">

                <div className="text-3xl mb-2">
                  🔍
                </div>

                <p className="font-semibold text-gray-700">
                  No products found
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Try searching for another product
                </p>

              </div>

            )}

          </div>

        )}

      </div>


      {/* ==========================================
          NAVIGATION
      ========================================== */}

      <div className="flex items-center gap-8 mr-15">

        {/* CATEGORIES */}

        <Link
          to="/categories"
          className="text-black hover:text-blue-800 text-xl"
        >
          Categories
        </Link>


        {/* CART */}

        <Link to="/cart">

          <button
            type="button"
            className="border-2 border-gray-300 rounded-3xl p-2 hover:bg-blue-50 transition"
          >
            <IoMdCart
              size={25}
              className="text-blue-800"
            />
          </button>

        </Link>


        {/* WISHLIST */}

        <Link to="/wishlist">

          <button
            type="button"
            className="flex items-center"
          >
            <FaHeart
              size={30}
              className="text-red-600"
            />
          </button>

        </Link>


        {/* PROFILE */}

        <Link to="/profile">
          <CgProfile size={40} />
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;