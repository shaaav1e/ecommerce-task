import React, { useState, useEffect } from "react";
import { products } from "../../data/productData";

// Import components
import ProductGallery from "./ProductDescriptionComponents/ProductGallery";
import ProductInfo from "./ProductDescriptionComponents/ProductInfo";
import SellerCard from "./ProductDescriptionComponents/SellerCard";
import ProductDetails from "./ProductDescriptionComponents/ProductDetails";
import SimilarProducts from "./ProductDescriptionComponents/SimilarProducts";
import RelatedProducts from "./ProductDescriptionComponents/RelatedProducts";
import DiscountBanner from "./ProductDescriptionComponents/DiscountBanner";

// Images
import shirt1 from "/shirt/image34.png";
import shirt2 from "/shirt/image35.png";
import shirt3 from "/shirt/image36.png";
import shirt4 from "/shirt/image37.png";
import shirt5 from "/shirt/image39.png";
import shirt6 from "/shirt/image40.png";

// Icons
import pakflag from "/flags/pak-flag.png";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";

const ProductDescription = () => {
  // State to track which image is currently selected
  const [selectedImage, setSelectedImage] = useState(shirt1);
  // State to track if we're on mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const pcs = [
    {
      price: "$98.00",
      text: "50-100 pcs",
    },
    {
      price: "$90.00",
      text: "100-700 pcs",
    },
    {
      price: "$78.00",
      text: "700+ pcs",
    },
  ];
  const description = [
    {
      heading: "Price",
      info: "Negotiable",
    },
    {
      heading: "Type:",
      info: "T-Shirt Cotton Base",
    },
    {
      heading: "Material:",
      info: "Cotton",
    },
    {
      heading: "Design",
      info: "Names can be printed",
    },
    {
      heading: "Size:",
      info: "S, M, L, XL",
    },
    {
      heading: "Color:",
      info: "Black, White, Gray",
    },
    {
      heading: "Protection:",
      info: "Refund Policy",
    },
  ];
  const right = [
    {
      icon: <img src={pakflag} alt="Pakistan Flag" className="w-6 h-6" />,
      text: "Pakistan,Rawalpindi",
    },

    {
      icon: <IoShieldCheckmarkOutline size={24} className="text-icons" />,
      text: "Verified Seller",
    },
    {
      icon: <MdLocalShipping size={24} className="text-icons" />,
      text: "WorldWide Shipping",
    },
  ];
  const images = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6];

  if (isMobile) {
    // Mobile layout
    return (
      <div className="container px-4 py-3">
        <ProductGallery
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          images={images}
          isMobile={isMobile}
        />

        <ProductInfo isMobile={isMobile} description={description} pcs={pcs} />

        <SellerCard isMobile={isMobile} right={right} />

        <SimilarProducts products={products} isMobile={isMobile} />
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="container bg-white rounded-md mt-5 border-1 border-icons/50">
      <div className="flex">
        <ProductGallery
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          images={images}
          isMobile={isMobile}
        />

        <ProductInfo isMobile={isMobile} description={description} pcs={pcs} />

        <SellerCard isMobile={isMobile} right={right} />
      </div>

      {/* SECTION 2: Main content area with Description + You May Like in a row */}
      <div className="flex mt-8 pt-5">
        <ProductDetails />
        <SimilarProducts products={products} isMobile={isMobile} />
      </div>

      {/* SECTION 3: Related Products */}
      <RelatedProducts products={products} />

      {/* Discount Banner */}
      <DiscountBanner />
    </div>
  );
};

export default ProductDescription;
