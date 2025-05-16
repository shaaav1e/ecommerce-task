import React, { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import {
  products,
  getProductsByCategory,
  getProductsByBrand,
  getProductsByFeature,
} from "../../data/productData";
const ProductsPage = () => {
  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("Best match");
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    brand: [],
    features: [],
  });

  // Mobile UI state
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showMobileSort, setShowMobileSort] = useState(false);

  // Function to open filter modal and ensure sort modal is closed
  const openFilterModal = () => {
    setShowMobileSort(false);
    setShowMobileFilter(true);
  };

  // Function to open sort modal and ensure filter modal is closed
  const openSortModal = () => {
    setShowMobileFilter(false);
    setShowMobileSort(true);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showMobileFilter || showMobileSort) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileFilter, showMobileSort]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  // Apply filters whenever activeFilters change
  useEffect(() => {
    let result = [...products];

    // Apply category filters
    if (activeFilters.category.length > 0) {
      result = result.filter((product) =>
        activeFilters.category.includes(product.category)
      );
    }

    // Apply brand filters
    if (activeFilters.brand.length > 0) {
      result = result.filter((product) =>
        activeFilters.brand.includes(product.brand)
      );
    }

    // Apply feature filters
    if (activeFilters.features.length > 0) {
      result = result.filter((product) =>
        product.features.some((feature) =>
          activeFilters.features.includes(feature)
        )
      );
    }

    // Apply sorting
    if (sortOption === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Newest first") {
      // Assuming newer products have higher IDs
      result.sort((a, b) => b.id - a.id);
    }
    // "Best match" is default order, no sorting needed

    setFilteredProducts(result);
  }, [activeFilters, sortOption]);
  // Handle filter toggle
  const toggleFilter = (type, value) => {
    setActiveFilters((prev) => {
      const current = [...prev[type]];
      const index = current.indexOf(value);

      if (index === -1) {
        // Add filter
        return { ...prev, [type]: [...current, value] };
      } else {
        // Remove filter
        current.splice(index, 1);
        return { ...prev, [type]: current };
      }
    });
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  // Remove a specific filter
  const removeFilter = (type, value) => {
    setActiveFilters((prev) => {
      const current = [...prev[type]];
      const index = current.indexOf(value);
      if (index !== -1) {
        current.splice(index, 1);
      }
      return { ...prev, [type]: current };
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({
      category: [],
      brand: [],
      features: [],
    });
    setCurrentPage(1);
  };

  // Calculate if any filters are active
  const hasActiveFilters = () => {
    return (
      activeFilters.category.length > 0 ||
      activeFilters.brand.length > 0 ||
      activeFilters.features.length > 0
    );
  };

  const leftside = [
    {
      name: "Category",
      subcategories: [
        "Mobile accessory",
        "Electronics",
        "Home Appliances",
        "Modern tech",
      ],
      link: "See all",
      type: "category",
    },
    {
      name: "Brands",
      subcategories: ["Samsung", "Apple", "Huawei", "Lenovo", "Pocco"],
      link: "See all",
      type: "brand",
    },
    {
      name: "Features",
      subcategories: ["Waterproof", "Wireless", "HD Video", "5G"],
      link: "See all",
      type: "features",
    },
    {
      name: "Price range",
    },
    {
      name: "Condition",
    },
    {
      name: "Ratings",
    },
    {
      name: "Manufacturer",
    },
  ];
  return (
    <div className="w-[100%] md:container md:mx-auto px-4 md:px-0 py-8">
      {" "}
      {/* Mobile Filter Bar */}
      <div className="md:hidden mb-4">
        <div className="flex justify-between items-center mb-2">
          {" "}
          <div
            className="flex items-center cursor-pointer"
            onClick={openSortModal}
          >
            <span className="text-sm font-medium mr-2">Sort: {sortOption}</span>
            <RiArrowDownSLine size={16} />
          </div>{" "}
          <div
            className="flex items-center cursor-pointer"
            onClick={openFilterModal}
          >
            <span className="text-sm font-medium mr-2">
              Filter (
              {activeFilters.category.length +
                activeFilters.brand.length +
                activeFilters.features.length}
              )
            </span>
            <RiArrowDownSLine size={16} />
          </div>
        </div>

        {/* Active Filters - Mobile */}
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
          {activeFilters.brand.map((filter, index) => (
            <div
              key={`brand-${index}`}
              className="flex items-center bg-white border border-gray-200 rounded-sm px-2 py-1 text-sm mr-2 whitespace-nowrap"
            >
              <span className="mr-1">{filter}</span>
              <IoIosClose
                className="cursor-pointer text-gray-500"
                onClick={() => removeFilter("brand", filter)}
              />
            </div>
          ))}
          {activeFilters.category.map((filter, index) => (
            <div
              key={`category-${index}`}
              className="flex items-center bg-white border border-gray-200 rounded-sm px-2 py-1 text-sm mr-2 whitespace-nowrap"
            >
              <span className="mr-1">{filter}</span>
              <IoIosClose
                className="cursor-pointer text-gray-500"
                onClick={() => removeFilter("category", filter)}
              />
            </div>
          ))}
          {activeFilters.features.map((filter, index) => (
            <div
              key={`feature-${index}`}
              className="flex items-center bg-white border border-gray-200 rounded-sm px-2 py-1 text-sm mr-2 whitespace-nowrap"
            >
              <span className="mr-1">{filter}</span>
              <IoIosClose
                className="cursor-pointer text-gray-500"
                onClick={() => removeFilter("features", filter)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side - Filters - Desktop Only */}
        <div className="hidden md:block md:w-[20%]">
          {leftside.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              {" "}
              <div className="flex items-center justify-between gap-4">
                <div className="text-black font-semibold">{item.name}</div>
                {item.name === "Price range" ||
                item.name === "Condition" ||
                item.name === "Ratings" ||
                item.name === "Manufacturer" ? (
                  <RiArrowUpSLine
                    size={24}
                    className="text-icons flex-shrink-0"
                  />
                ) : (
                  <RiArrowDownSLine
                    size={24}
                    className="text-icons flex-shrink-0"
                  />
                )}
              </div>{" "}
              {item.subcategories && (
                <div className="flex flex-col w-full space-y-2">
                  {item.subcategories.map((subcat, idx) => (
                    <div key={idx} className="flex items-center w-full">
                      {" "}
                      {(item.name === "Brands" || item.name === "Features") && (
                        <div
                          className={`h-4 w-4 p-2 rounded-sm ${
                            activeFilters[item.type]?.includes(subcat)
                              ? "bg-blue"
                              : "bg-gray-100 border border-gray-300"
                          } flex items-center justify-center cursor-pointer mr-2`}
                          onClick={() => toggleFilter(item.type, subcat)}
                        >
                          {activeFilters[item.type]?.includes(subcat) && (
                            <span
                              className="text-white text-xs leading-none font-bold"
                              style={{ marginTop: "-1px" }}
                            >
                              <IoIosCheckmark
                                size={24}
                                className="text-white"
                              />
                            </span>
                          )}
                        </div>
                      )}{" "}
                      <p
                        className={`font-light ${
                          item.type &&
                          activeFilters[item.type]?.includes(subcat)
                            ? "text-blue"
                            : "text-equipment"
                        } text-left cursor-pointer`}
                        onClick={() =>
                          item.type && toggleFilter(item.type, subcat)
                        }
                      >
                        {subcat}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {item.link && <p className="text-blue self-start">{item.link}</p>}
              <p className="w-full border-b border-gray-200 mt-2 mb-4"></p>
            </div>
          ))}
        </div>{" "}
        {/* Right Side - Products */}
        <div className="w-full md:w-[80%]">
          {" "}
          <div className="bg-white p-4 rounded-md shadow-sm mb-6">
            <div className="flex flex-wrap items-center justify-between">
              <p>
                <span className="font-medium">{filteredProducts.length}</span>{" "}
                items found
              </p>{" "}
              <div className="flex items-center gap-2">
                <span>Sort by:</span>
                <select
                  className="border border-gray-200 rounded px-2 py-1"
                  value={sortOption}
                  onChange={(e) => {
                    setSortOption(e.target.value);
                    setCurrentPage(1); // Reset to first page when sorting changes
                  }}
                >
                  <option>Best match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest first</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters() && (
              <div className="mt-4 border-t border-gray-200 pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  {activeFilters.category.length > 0 &&
                    activeFilters.category.map((filter, index) => (
                      <div
                        key={`category-${index}`}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                      >
                        <span className="mr-1">{filter}</span>
                        <IoIosClose
                          className="cursor-pointer text-gray-500 hover:text-gray-700"
                          onClick={() => removeFilter("category", filter)}
                        />
                      </div>
                    ))}

                  {activeFilters.brand.length > 0 &&
                    activeFilters.brand.map((filter, index) => (
                      <div
                        key={`brand-${index}`}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                      >
                        <span className="mr-1">{filter}</span>
                        <IoIosClose
                          className="cursor-pointer text-gray-500 hover:text-gray-700"
                          onClick={() => removeFilter("brand", filter)}
                        />
                      </div>
                    ))}

                  {activeFilters.features.length > 0 &&
                    activeFilters.features.map((filter, index) => (
                      <div
                        key={`feature-${index}`}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                      >
                        <span className="mr-1">{filter}</span>
                        <IoIosClose
                          className="cursor-pointer text-gray-500 hover:text-gray-700"
                          onClick={() => removeFilter("features", filter)}
                        />
                      </div>
                    ))}

                  <button
                    onClick={clearAllFilters}
                    className="ml-2 text-blue text-sm hover:underline"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-md py-2 flex flex-col bg-white"
              >
                {" "}
                <div className="w-full rounded-md overflow-hidden">
                  <div className="h-48 w-full flex justify-center items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain"
                    />
                  </div>
                  <div className="border-b border-gray-200 w-full mt-2 mb-4"></div>
                </div>
                <div className="flex flex-col flex-grow px-4 py-2">
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="flex items-center mt-1 mb-2">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    <span className="text-gray-500 text-xs ml-1">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="flex items-center text-gray-800">
                    <span className="font-medium text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.discount && (
                      <span className="ml-2 text-xs bg-red-100 text-red-600 px-1 rounded">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                  {!product.inStock && (
                    <span className="text-red-500 text-sm mt-1">
                      Out of stock
                    </span>
                  )}
                  <div className="mt-2 text-xs text-gray-500">
                    {product.description}
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>{" "}
          {/* Pagination Controls */}
          {filteredProducts.length > 0 && (
            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`p-1 rounded-md ${
                    currentPage === 1
                      ? "text-gray-300"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <MdNavigateBefore size={24} />
                </button>

                <div className="flex items-center mx-4">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;

                    // Logic to show appropriate page numbers based on current page
                    if (totalPages <= 5) {
                      // If there are 5 or fewer pages, show all
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      // If current page is among the first 3, show pages 1-5
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      // If current page is among the last 3, show the last 5 pages
                      pageNum = totalPages - 4 + i;
                    } else {
                      // Otherwise show 2 pages before and 2 pages after current page
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 flex items-center justify-center rounded-md mx-1 ${
                          currentPage === pageNum
                            ? "bg-blue text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`p-1 rounded-md ${
                    currentPage === totalPages
                      ? "text-gray-300"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <MdNavigateNext size={24} />
                </button>
              </div>
            </div>
          )}
          {/* You May Also Like Section - Mobile Only */}
          <div className="md:hidden mt-10 mb-6">
            <h3 className="text-lg font-semibold mb-4">You may also like</h3>
            <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-3">
              {products.slice(0, 5).map((product) => (
                <div
                  key={`recommendation-${product.id}`}
                  className="min-w-[160px] border border-gray-200 rounded-md p-2 bg-white flex-shrink-0"
                >
                  <div className="h-20 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full object-contain"
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium line-clamp-1">
                      {product.name}
                    </h4>
                    <div className="flex items-center mt-1">
                      <span className="font-medium text-sm">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.discount && (
                        <span className="ml-2 text-xs bg-red-100 text-red-600 px-1 rounded">
                          -{product.discount}%
                        </span>
                      )}
                    </div>
                    <div className="flex items-center mt-1">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      <span className="text-gray-500 text-[10px] ml-1">
                        ({product.rating})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>{" "}
      {/* Mobile Sort Modal */}
      {showMobileSort && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg p-4 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Sort by</h3>
              <button
                className="text-gray-500"
                onClick={() => setShowMobileSort(false)}
              >
                <IoIosClose size={24} />
              </button>
            </div>
            <div className="space-y-3">
              {[
                "Best match",
                "Price: Low to High",
                "Price: High to Low",
                "Newest first",
              ].map((option) => (
                <div
                  key={option}
                  className={`p-3 rounded-md flex items-center justify-between ${
                    sortOption === option
                      ? "bg-blue-50 border border-blue"
                      : "border border-gray-200"
                  }`}
                  onClick={() => {
                    setSortOption(option);
                    setCurrentPage(1);
                    setShowMobileSort(false);
                  }}
                >
                  <span className={sortOption === option ? "text-blue" : ""}>
                    {option}
                  </span>
                  {sortOption === option && (
                    <IoIosCheckmark size={24} className="text-blue" />
                  )}
                </div>
              ))}
            </div>{" "}
            <button
              className="w-full py-3 bg-blue text-white rounded-md mt-4"
              onClick={() => setShowMobileSort(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
      {/* Mobile Filter Modal */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg w-full max-h-[80vh] overflow-y-auto shadow-lg">
            <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium">Filters</h3>
              <button
                className="text-gray-500"
                onClick={() => setShowMobileFilter(false)}
              >
                <IoIosClose size={24} />
              </button>
            </div>
            <div className="p-4">
              {leftside.map(
                (item, index) =>
                  item.subcategories && (
                    <div key={index} className="mb-6">
                      <h4 className="text-base font-medium mb-3">
                        {item.name}
                      </h4>
                      <div className="space-y-2">
                        {item.subcategories.map((subcat, idx) => (
                          <div key={idx} className="flex items-center">
                            <div
                              className={`h-4 w-4 p-2 rounded-sm ${
                                activeFilters[item.type]?.includes(subcat)
                                  ? "bg-blue"
                                  : "bg-gray-100 border border-gray-300"
                              } flex items-center justify-center cursor-pointer mr-2`}
                              onClick={() => toggleFilter(item.type, subcat)}
                            >
                              {activeFilters[item.type]?.includes(subcat) && (
                                <IoIosCheckmark
                                  size={24}
                                  className="text-white"
                                />
                              )}
                            </div>
                            <p
                              className={`${
                                item.type &&
                                activeFilters[item.type]?.includes(subcat)
                                  ? "text-blue"
                                  : "text-gray-800"
                              }`}
                            >
                              {subcat}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>{" "}
            <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200 flex justify-between">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md"
                onClick={clearAllFilters}
              >
                Clear all
              </button>
              <button
                className="px-4 py-2 bg-blue text-white rounded-md"
                onClick={() => setShowMobileFilter(false)}
              >
                Apply filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
