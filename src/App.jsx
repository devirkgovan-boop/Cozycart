import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Wishlist from "./Pages/Wishlist";

function App() {
console.log("🔥 NEW APP IS RUNNING");
  return (
    <>

    
    
      <Navbar />
      

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* CATEGORIES */}
        <Route
          path="/categories"
          element={<Categories />}
        />

        {/* PRODUCTS */}
        <Route
          path="/categories/:categoryId/:subcategory"
          element={<ProductPage />}
        />

        {/* OTHER PAGES */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />
      </Routes>
    </>
  );
}

export default App;