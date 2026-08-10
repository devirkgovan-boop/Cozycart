import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);

  // ================================
  // LOAD WISHLIST
  // ================================

  const loadWishlist = () => {
    try {
      const savedWishlist = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );

      setWishlist(savedWishlist);
    } catch (error) {
      console.error("Wishlist loading error:", error);
      setWishlist([]);
    }
  };

  useEffect(() => {
    loadWishlist();

    const handleUpdate = () => {
      loadWishlist();
    };

    window.addEventListener(
      "wishlistUpdated",
      handleUpdate
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        handleUpdate
      );
    };
  }, []);

  // ================================
  // REMOVE
  // ================================

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (item) => String(item.id) !== String(id)
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );
  };

  // ================================
  // ADD TO CART
  // ================================

  const addToCart = (product) => {
    try {
      const cart = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      const exists = cart.some(
        (item) => String(item.id) === String(product.id)
      );

      // Already in cart
      if (exists) {
        navigate("/cart");
        return;
      }

      const updatedCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      navigate("/cart");

    } catch (error) {
      console.error("Could not add wishlist item:", error);
    }
  };

  // ================================
  // OPEN PRODUCT
  // ================================

  const openProduct = (product) => {
    navigate(
      `/categories/${product.categoryId}/${encodeURIComponent(
        product.subcategory
          .toLowerCase()
          .replace(/\s+/g, "-")
      )}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* ================= BACK ================= */}

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900"
        >
          ← Back
        </button>

        {/* ================= HEADER ================= */}

        <div className="mb-8">

          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            CozyCart
          </p>

          <h1 className="text-4xl font-extrabold text-blue-950">
            My Wishlist
          </h1>

          <p className="text-gray-500 mt-2">
            {wishlist.length} saved item
            {wishlist.length !== 1 ? "s" : ""}
          </p>

        </div>

        {/* ================= EMPTY ================= */}

        {wishlist.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-sm p-16 text-center">

            <div className="text-7xl mb-5">
              ♡
            </div>

            <h2 className="text-3xl font-bold text-blue-950">
              Your wishlist is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Save products you love and find them here later.
            </p>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold"
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden border border-gray-100"
              >

                {/* IMAGE */}

                <div
                  className="relative h-56 bg-gray-50 cursor-pointer"
                  onClick={() => openProduct(product)}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-5"
                  />

                  {/* RED HEART */}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-red-500"
                  >
                    ♥
                  </button>

                </div>

                {/* INFO */}

                <div className="p-5">

                  <p className="text-xs text-orange-500 font-bold uppercase tracking-wider">
                    {product.subcategory}
                  </p>

                  <h2
                    className="text-lg font-bold text-blue-950 mt-1 line-clamp-2 cursor-pointer hover:text-blue-700"
                    onClick={() => openProduct(product)}
                  >
                    {product.name}
                  </h2>

                  <p className="text-2xl font-extrabold text-blue-700 mt-3">
                    ₹
                    {Number(product.price).toLocaleString(
                      "en-IN"
                    )}
                  </p>

                  {/* ADD TO CART */}

                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-bold transition"
                  >
                    🛒 Add to Cart
                  </button>

                  {/* REMOVE */}

                  <button
                    type="button"
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    className="w-full mt-2 border border-red-200 text-red-500 hover:bg-red-50 py-3 rounded-xl font-semibold transition"
                  >
                    Remove from Wishlist
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Wishlist;