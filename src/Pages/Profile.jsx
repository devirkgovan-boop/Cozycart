import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("profile");

  const [user, setUser] = useState({
    name: "Ramana Velan",
    email: "ramana@example.com",
    phone: "+91 98765 43210",
    address: "Chennai, Tamil Nadu",
  });

  const [editing, setEditing] = useState(false);

  // ==========================================
  // SAMPLE PREVIOUS ORDERS
  // ==========================================

  const orders = [
    {
      id: "CC1001",
      date: "10 August 2026",
      status: "Delivered",
      total: 3499,
      payment: "Cash on Delivery",
      address: "Chennai, Tamil Nadu",
      products: [
        {
          name: "Classic Handbag",
          quantity: 1,
          price: 2499,
          image:
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
        },
        {
          name: "Fashion Sunglasses",
          quantity: 1,
          price: 1000,
          image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        },
      ],
    },

    {
      id: "CC1002",
      date: "2 August 2026",
      status: "Delivered",
      total: 2499,
      payment: "UPI",
      address: "Chennai, Tamil Nadu",
      products: [
        {
          name: "Premium Belt",
          quantity: 1,
          price: 2499,
          image:
            "https://images.unsplash.com/photo-1624222247344-550fb60583dc",
        },
      ],
    },

    {
      id: "CC1003",
      date: "28 July 2026",
      status: "Delivered",
      total: 1599,
      payment: "UPI",
      address: "Chennai, Tamil Nadu",
      products: [
        {
          name: "Classic Wallet",
          quantity: 1,
          price: 1599,
          image:
            "https://images.unsplash.com/photo-1627123424574-724758594e93",
        },
      ],
    },
  ];

  // ==========================================
  // PROFILE UPDATE
  // ==========================================

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // BACK
  // ==========================================

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="bg-white border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition"
          >
            ← Back
          </button>

        </div>

      </div>

      {/* ======================================
          MAIN
      ====================================== */}

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* ====================================
            PROFILE HEADER
        ==================================== */}

        <section className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 md:p-10 text-white shadow-xl">

          <div className="flex flex-col md:flex-row md:items-center gap-6">

            {/* AVATAR */}

            <div className="w-24 h-24 rounded-full bg-white text-blue-800 flex items-center justify-center text-4xl font-extrabold shadow-lg">
              {user.name.charAt(0)}
            </div>

            {/* USER INFO */}

            <div className="flex-1">

              <p className="text-blue-200 uppercase tracking-widest text-sm font-bold">
                CozyCart Account
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold mt-1">
                {user.name}
              </h1>

              <p className="text-blue-100 mt-2">
                {user.email}
              </p>

            </div>

            {/* EDIT */}

            <button
              type="button"
              onClick={() => setEditing(!editing)}
              className="bg-white text-blue-800 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition"
            >
              {editing ? "Cancel Edit" : "✏️ Edit Profile"}
            </button>

          </div>

        </section>

        {/* ====================================
            TABS
        ==================================== */}

        <div className="bg-white rounded-2xl shadow-sm mt-8 p-2 flex flex-col sm:flex-row gap-2">

          <button
            type="button"
            onClick={() => setActiveTab("profile")}
            className={`flex-1 py-3 rounded-xl font-bold transition ${
              activeTab === "profile"
                ? "bg-blue-700 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            👤 My Profile
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("orders")}
            className={`flex-1 py-3 rounded-xl font-bold transition ${
              activeTab === "orders"
                ? "bg-blue-700 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            📦 Previous Orders
          </button>

        </div>

        {/* ====================================
            PROFILE TAB
        ==================================== */}

        {activeTab === "profile" && (

          <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* USER DETAILS */}

            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8">

              <div className="flex justify-between items-center mb-7">

                <div>

                  <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                    Account
                  </p>

                  <h2 className="text-2xl font-extrabold text-blue-950">
                    Personal Information
                  </h2>

                </div>

                <span className="text-3xl">
                  👤
                </span>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* NAME */}

                <div>

                  <label className="block text-sm font-semibold text-gray-500 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    disabled={!editing}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label className="block text-sm font-semibold text-gray-500 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    disabled={!editing}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />

                </div>

                {/* PHONE */}

                <div>

                  <label className="block text-sm font-semibold text-gray-500 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    disabled={!editing}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />

                </div>

                {/* ADDRESS */}

                <div>

                  <label className="block text-sm font-semibold text-gray-500 mb-2">
                    Delivery Address
                  </label>

                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    disabled={!editing}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
                  />

                </div>

              </div>

              {editing && (

                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="mt-7 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-xl font-bold transition"
                >
                  Save Changes
                </button>

              )}

            </div>

            {/* ACCOUNT SUMMARY */}

            <div className="bg-white rounded-3xl shadow-sm p-8">

              <h2 className="text-2xl font-extrabold text-blue-950">
                Account Summary
              </h2>

              <div className="mt-7 space-y-5">

                <div className="flex items-center justify-between">

                  <span className="text-gray-500">
                    Total Orders
                  </span>

                  <span className="font-extrabold text-blue-700">
                    {orders.length}
                  </span>

                </div>

                <div className="border-t border-gray-100"></div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-500">
                    Delivered
                  </span>

                  <span className="font-extrabold text-green-600">
                    {orders.filter(
                      (order) =>
                        order.status === "Delivered"
                    ).length}
                  </span>

                </div>

                <div className="border-t border-gray-100"></div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-500">
                    Total Spent
                  </span>

                  <span className="font-extrabold text-blue-700">
                    ₹
                    {orders
                      .reduce(
                        (sum, order) =>
                          sum + order.total,
                        0
                      )
                      .toLocaleString("en-IN")}
                  </span>

                </div>

              </div>

            </div>

          </section>

        )}

        {/* ====================================
            ORDERS TAB
        ==================================== */}

        {activeTab === "orders" && (

          <section className="mt-8">

            <div className="mb-7">

              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                CozyCart
              </p>

              <h2 className="text-3xl font-extrabold text-blue-950">
                Previous Orders
              </h2>

              <p className="text-gray-500 mt-2">
                View your previous purchases and order details.
              </p>

            </div>

            <div className="space-y-6">

              {orders.map((order) => (

                <div
                  key={order.id}
                  className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100"
                >

                  {/* ORDER HEADER */}

                  <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>

                      <p className="text-sm text-gray-400">
                        Order ID
                      </p>

                      <h3 className="text-xl font-extrabold text-blue-950">
                        #{order.id}
                      </h3>

                    </div>

                    <div>

                      <p className="text-sm text-gray-400">
                        Order Date
                      </p>

                      <p className="font-semibold text-gray-700">
                        {order.date}
                      </p>

                    </div>

                    <div>

                      <span className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full font-bold text-sm">
                        ● {order.status}
                      </span>

                    </div>

                    <div>

                      <p className="text-sm text-gray-400">
                        Total
                      </p>

                      <p className="text-xl font-extrabold text-blue-700">
                        ₹
                        {order.total.toLocaleString(
                          "en-IN"
                        )}
                      </p>

                    </div>

                  </div>

                  {/* PRODUCTS */}

                  <div className="p-6">

                    <h4 className="font-bold text-blue-950 mb-4">
                      Order Items
                    </h4>

                    <div className="space-y-4">

                      {order.products.map(
                        (product, index) => (

                          <div
                            key={index}
                            className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4"
                          >

                            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">

                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain rounded-xl"
                              />

                            </div>

                            <div className="flex-1">

                              <h5 className="font-bold text-blue-950">
                                {product.name}
                              </h5>

                              <p className="text-sm text-gray-500 mt-1">
                                Quantity:{" "}
                                {product.quantity}
                              </p>

                            </div>

                            <p className="font-extrabold text-blue-700">
                              ₹
                              {product.price.toLocaleString(
                                "en-IN"
                              )}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                  {/* ORDER DETAILS */}

                  <div className="bg-blue-50 p-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                      <div>

                        <p className="text-xs uppercase tracking-wider font-bold text-gray-400">
                          Payment
                        </p>

                        <p className="font-bold text-blue-950 mt-1">
                          💳 {order.payment}
                        </p>

                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-wider font-bold text-gray-400">
                          Delivery Address
                        </p>

                        <p className="font-bold text-blue-950 mt-1">
                          📍 {order.address}
                        </p>

                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-wider font-bold text-gray-400">
                          Order Status
                        </p>

                        <p className="font-bold text-green-600 mt-1">
                          🚚 {order.status}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

        )}

      </main>

    </div>
  );
}

export default Profile;