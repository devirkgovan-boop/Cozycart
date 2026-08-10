

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  console.log("🔥 NEW PRODUCT CARD IS RUNNING");

  const navigate = useNavigate();

  const [inCart, setInCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  // ================================
  // CHECK LOCAL STORAGE
  // ================================

  const checkStatus = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const wishlist = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );

      setInCart(
        cart.some((item) => String(item.id) === String(product.id))
      );

      setInWishlist(
        wishlist.some(
          (item) => String(item.id) === String(product.id)
        )
      );
    } catch (error) {
      console.error("Storage error:", error);
    }
  };

  // ================================
  // INITIAL CHECK
  // ================================

  useEffect(() => {
    checkStatus();
  }, [product.id]);

  // ================================
  // LISTEN FOR UPDATES
  // ================================

  useEffect(() => {
    const update = () => {
      checkStatus();
    };

    window.addEventListener("cartUpdated", update);
    window.addEventListener("wishlistUpdated", update);

    return () => {
      window.removeEventListener("cartUpdated", update);
      window.removeEventListener("wishlistUpdated", update);
    };
  }, [product.id]);

  // ================================
  // ADD TO CART
  // ================================

  const handleCart = (e) => {
    e.stopPropagation();

    try {
      const cart = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      const exists = cart.some(
        (item) => String(item.id) === String(product.id)
      );

      // Already in cart → GO TO CART
      if (exists) {
        navigate("/cart");
        return;
      }

      const newProduct = {
        ...product,
        quantity: 1,
      };

      const updatedCart = [...cart, newProduct];

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      setInCart(true);

      window.dispatchEvent(new Event("cartUpdated"));

    } catch (error) {
      console.error("Could not add to cart:", error);
    }
  };

  // ================================
  // WISHLIST
  // ================================

  const handleWishlist = (e) => {
    e.stopPropagation();

    try {
      const wishlist = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );

      const exists = wishlist.some(
        (item) => String(item.id) === String(product.id)
      );

      // REMOVE
      if (exists) {
        const updatedWishlist = wishlist.filter(
          (item) => String(item.id) !== String(product.id)
        );

        localStorage.setItem(
          "wishlist",
          JSON.stringify(updatedWishlist)
        );

        setInWishlist(false);

        window.dispatchEvent(
          new Event("wishlistUpdated")
        );

        return;
      }

      // ADD
      const updatedWishlist = [
        ...wishlist,
        product,
      ];

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );

      setInWishlist(true);

      window.dispatchEvent(
        new Event("wishlistUpdated")
      );

    } catch (error) {
      console.error("Could not update wishlist:", error);
    }
  };

  // ================================
  // PRODUCT PAGE
  // ================================

  const handleProductClick = () => {
    navigate(
      `/categories/${product.categoryId}/${encodeURIComponent(
        product.subcategory
          .toLowerCase()
          .replace(/\s+/g, "-")
      )}`
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden border border-gray-100">

      {/* ================= IMAGE ================= */}

      <div
        className="relative h-56 bg-gray-50 cursor-pointer"
        onClick={handleProductClick}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-5"
        />

        {/* WISHLIST */}

        <button
          type="button"
          onClick={handleWishlist}
          aria-label="Wishlist"
          className={`absolute top-3 right-3 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-2xl transition ${
            inWishlist
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
        >
          {inWishlist ? "♥" : "♡"}
        </button>
      </div>

      {/* ================= INFO ================= */}

      <div className="p-5">

        <p className="text-xs text-orange-500 font-bold uppercase tracking-wider">
          {product.subcategory}
        </p>

        <h2
          onClick={handleProductClick}
          className="font-bold text-blue-950 text-lg mt-1 line-clamp-2 cursor-pointer hover:text-blue-700"
        >
          {product.name}
        </h2>

        {/* RATING */}

        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">
            ★
          </span>

          <span className="text-sm text-gray-500">
            {product.rating}
          </span>

          <span className="text-sm text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* PRICE */}

        <div className="mt-4">

          <span className="text-2xl font-extrabold text-blue-900">
            ₹
            {Number(product.price).toLocaleString(
              "en-IN"
            )}
          </span>

          {product.discount > 0 && (
            <span className="ml-2 text-sm text-green-600 font-bold">
              {product.discount}% OFF
            </span>
          )}

        </div>

        {/* ================= CART ================= */}

        <button
          type="button"
          onClick={handleCart}
          className={`w-full mt-4 py-3 rounded-xl font-bold transition ${
            inCart
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-blue-700 hover:bg-blue-800 text-white"
          }`}
        >
          {inCart
            ? "🛒 Go to Cart"
            : "🛒 Add to Cart"}
        </button>

      </div>

    </div>
  );
}

export default ProductCard;