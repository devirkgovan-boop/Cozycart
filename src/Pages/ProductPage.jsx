import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/productData";

function ProductPage() {
  const { categoryId, subcategory } = useParams();
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState("popular");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const productsPerPage = 12;

  const formattedSubcategory = subcategory
    ? decodeURIComponent(subcategory)
        .replace(/-/g, " ")
        .toLowerCase()
    : "";

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      return (
        String(product.categoryId) === String(categoryId) &&
        product.subcategory.toLowerCase() === formattedSubcategory
      );
    });

    if (search.trim() !== "") {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "popular") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [
    categoryId,
    formattedSubcategory,
    sortBy,
    search,
  ]);

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (page - 1) * productsPerPage;

  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const title =
    filteredProducts.length > 0
      ? filteredProducts[0].subcategory
      : "Products";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">

      {/* HEADER */}
      <section className="relative overflow-hidden">

        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40" />

        <div className="absolute top-20 -left-32 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-8">

          {/* BACK BUTTON */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm text-blue-900 font-semibold hover:bg-blue-50 transition"
          >
            ← Back
          </button>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            {/* TITLE */}
            <div>

              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                CozyCart Collection
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-1">
                {title}
              </h1>

              <p className="text-gray-500 mt-2">
                Showing {filteredProducts.length} products
              </p>

            </div>

            {/* SEARCH */}
            <div className="w-full md:w-80">

              <input
                type="text"
                placeholder={`Search ${title}...`}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <main className="max-w-7xl mx-auto px-6 pb-16">

        {/* TOOLBAR */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">

          <p className="text-gray-500 text-sm">
            {filteredProducts.length} results
          </p>

          <div className="flex items-center gap-3">

            <span className="text-sm text-gray-500">
              Sort by:
            </span>

            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setPage(1);
              }}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-blue-950 outline-none focus:border-blue-500"
            >
              <option value="popular">
                Popularity
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>
            </select>

          </div>

        </div>

        {/* PRODUCT GRID */}
        {displayedProducts.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="bg-white rounded-2xl p-16 text-center shadow-sm">

            <div className="text-6xl mb-4">
              🛍️
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              No products found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching for another product.
            </p>

          </div>

        )}

        {/* PAGINATION */}
        {totalPages > 1 && (

          <div className="flex justify-center items-center gap-2 mt-10">

            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-blue-700 disabled:opacity-40"
            >
              ‹
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((number) => (

              <button
                type="button"
                key={number}
                onClick={() => setPage(number)}
                className={`w-10 h-10 rounded-lg font-bold transition ${
                  page === number
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-blue-700 border border-gray-200 hover:bg-blue-50"
                }`}
              >
                {number}
              </button>

            ))}

            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-blue-700 disabled:opacity-40"
            >
              ›
            </button>

          </div>

        )}

      </main>

      {/* BENEFITS */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-7">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="flex items-center gap-4">
              <div className="text-3xl">🚚</div>

              <div>
                <h3 className="font-bold">
                  Free Shipping
                </h3>

                <p className="text-blue-100 text-sm">
                  On orders above ₹999
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-3xl">↻</div>

              <div>
                <h3 className="font-bold">
                  Easy Returns
                </h3>

                <p className="text-blue-100 text-sm">
                  14-day return policy
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-3xl">🛡️</div>

              <div>
                <h3 className="font-bold">
                  Secure Payments
                </h3>

                <p className="text-blue-100 text-sm">
                  100% secure checkout
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProductPage;