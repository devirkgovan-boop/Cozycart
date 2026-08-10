import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  // ================================
  // LOAD CART
  // ================================

  const loadCart = () => {
    try {
      const savedCart = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      setCart(savedCart);
    } catch (error) {
      console.error("Cart loading error:", error);
      setCart([]);
    }
  };

  useEffect(() => {
    loadCart();

    const handleUpdate = () => {
      loadCart();
    };

    window.addEventListener(
      "cartUpdated",
      handleUpdate
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleUpdate
      );
    };
  }, []);

  // ================================
  // REMOVE
  // ================================

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => String(item.id) !== String(id)
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  // ================================
  // INCREASE
  // ================================

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      String(item.id) === String(id)
        ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
        : item
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  // ================================
  // DECREASE
  // ================================

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      String(item.id) === String(id)
        ? {
            ...item,
            quantity: Math.max(
              (item.quantity || 1) - 1,
              1
            ),
          }
        : item
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  // ================================
  // CLEAR
  // ================================

  const clearCart = () => {
    setCart([]);

    localStorage.removeItem("cart");

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  // ================================
  // TOTAL
  // ================================

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price) *
        (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* ================= BACK BUTTON ================= */}

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900"
        >
          ← Back
        </button>

        {/* ================= HEADER ================= */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>

            <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              CozyCart
            </p>

            <h1 className="text-4xl font-extrabold text-blue-950">
              Shopping Cart
            </h1>

            <p className="text-gray-500 mt-2">
              {cart.length} item
              {cart.length !== 1 ? "s" : ""} in your cart
            </p>

          </div>

          {cart.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="text-red-500 font-semibold hover:text-red-700"
            >
              Clear Cart
            </button>
          )}

        </div>

        {/* ================= EMPTY ================= */}

        {cart.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-sm p-16 text-center">

            <div className="text-7xl mb-5">
              🛒
            </div>

            <h2 className="text-3xl font-bold text-blue-950">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Looks like you haven't added anything yet.
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ================= PRODUCTS ================= */}

            <div className="lg:col-span-2 space-y-4">

              {cart.map((product) => (

                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm p-5 flex flex-col sm:flex-row gap-5"
                >

                  <div className="w-full sm:w-36 h-36 bg-gray-50 rounded-xl flex items-center justify-center">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain p-3"
                    />

                  </div>

                  <div className="flex-1">

                    <p className="text-xs text-orange-500 font-bold uppercase">
                      {product.subcategory}
                    </p>

                    <h2 className="text-xl font-bold text-blue-950 mt-1">
                      {product.name}
                    </h2>

                    <p className="text-2xl font-extrabold text-blue-700 mt-3">
                      ₹
                      {Number(
                        product.price
                      ).toLocaleString("en-IN")}
                    </p>

                    {/* QUANTITY */}

                    <div className="flex items-center gap-3 mt-4">

                      <span className="text-sm text-gray-500">
                        Quantity:
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(product.id)
                        }
                        className="w-9 h-9 rounded-lg border bg-white font-bold hover:bg-gray-50"
                      >
                        −
                      </button>

                      <span className="font-bold w-6 text-center">
                        {product.quantity || 1}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(product.id)
                        }
                        className="w-9 h-9 rounded-lg border bg-white font-bold hover:bg-gray-50"
                      >
                        +
                      </button>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(product.id)
                      }
                      className="text-red-500 text-sm font-semibold mt-4 hover:text-red-700"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* ================= SUMMARY ================= */}

            <div>

              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">

                <h2 className="text-2xl font-bold text-blue-950">
                  Order Summary
                </h2>

                <div className="border-t border-gray-100 my-5"></div>

                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>

                  <span>
                    ₹
                    {total.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between text-gray-500 mt-3">

                  <span>Shipping</span>

                  <span className="text-green-600 font-semibold">
                    FREE
                  </span>

                </div>

                <div className="border-t border-gray-100 my-5"></div>

                <div className="flex justify-between items-center">

                  <span className="text-lg font-bold">
                    Total
                  </span>

                  <span className="text-2xl font-extrabold text-blue-700">
                    ₹
                    {total.toLocaleString("en-IN")}
                  </span>

                </div>

                <button
                  type="button"
                  className="w-full mt-6 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold"
                >
                  Proceed to Checkout
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;