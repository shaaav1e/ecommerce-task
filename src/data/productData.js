// Product data for the e-commerce site
import watch from "/8.jpg";
import camera from "/6.jpg";
import jug from "/10.jpg";
import laptop from "/7.jpg";
import mobile from "/3.jpg";
import securityCamera from "/tech/camera-2.png";
import graphicCard from "/tech/gpu.png";
import ipad from "/tech/2.jpg";
import blender from "/interior/8.jpg";

// Main products data array
export const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: 249.99,
    image: watch,
    category: "Electronics",
    brand: "Apple",
    rating: 4.5,
    features: ["Waterproof", "Heart Rate Monitor", "GPS"],
    description: "Latest generation smart watch with all premium features",
    discount: 10,
    inStock: true,
  },
  {
    id: 2,
    name: "Professional DSLR Camera",
    price: 799.99,
    image: camera,
    category: "Electronics",
    brand: "Samsung",
    rating: 4.8,
    features: ["24MP", "4K Video", "Wireless"],
    description: "Professional grade camera for photography enthusiasts",
    inStock: true,
  },
  {
    id: 3,
    name: "Electric Kettle",
    price: 37.5,
    image: jug,
    category: "Home Appliances",
    brand: "Lenovo",
    rating: 4.2,
    features: ["Fast Boiling", "Auto Shutoff", "Temperature Control"],
    description: "Quick boiling electric kettle for your kitchen",
    discount: 15,
    inStock: true,
  },
  {
    id: 4,
    name: "Ultrabook Laptop",
    price: 1299.99,
    image: laptop,
    category: "Electronics",
    brand: "Huawei",
    rating: 4.7,
    features: ["16GB RAM", "512GB SSD", "Intel i7"],
    description: "Ultra-thin, powerful laptop for professionals",
    inStock: true,
  },
  {
    id: 5,
    name: "Premium Smartphone",
    price: 899.99,
    image: mobile,
    category: "Mobile accessory",
    brand: "Apple",
    rating: 4.9,
    features: ["6.7 inch OLED", "Triple Camera", "5G"],
    description: "Flagship smartphone with cutting-edge features",
    discount: 5,
    inStock: true,
  },
  {
    id: 6,
    name: "Security Camera System",
    price: 399.99,
    image: securityCamera,
    category: "Electronics",
    brand: "Samsung",
    rating: 4.3,
    features: ["HD Video", "Night Vision", "Motion Detection"],
    description: "Complete home security camera system",
    inStock: false,
  },
  {
    id: 7,
    name: "High-End GPU",
    price: 1899.99,
    image: graphicCard,
    category: "Electronics",
    brand: "Pocco",
    rating: 4.9,
    features: ["16GB VRAM", "Ray Tracing", "HDMI 2.1"],
    description: "Powerful graphics card for gaming and content creation",
    discount: 2,
    inStock: true,
  },
  {
    id: 8,
    name: "Tablet Pro",
    price: 849.99,
    image: ipad,
    category: "Electronics",
    brand: "Apple",
    rating: 4.6,
    features: ["10.9 inch", "128GB", "Liquid Retina"],
    description: "Professional tablet for creative work and entertainment",
    inStock: true,
  },
  {
    id: 9,
    name: "Blender Plus",
    price: 129.99,
    image: blender,
    category: "Home Appliances",
    brand: "Huawei",
    rating: 4.1,
    features: ["1000W", "Multiple Speeds", "Glass Jar"],
    description: "Powerful blender for smoothies and food preparation",
    discount: 20,
    inStock: true,
  },
];

// Helper function to filter products by category
export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

// Helper function to filter products by brand
export const getProductsByBrand = (brand) => {
  return products.filter((product) => product.brand === brand);
};

// Helper function to filter products by feature
export const getProductsByFeature = (feature) => {
  return products.filter((product) => product.features.includes(feature));
};

// Helper function to filter products by price range
export const getProductsByPriceRange = (minPrice, maxPrice) => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

// Helper function to get products with discount
export const getDiscountedProducts = () => {
  return products.filter((product) => product.discount);
};

// Helper function to get products in stock
export const getInStockProducts = () => {
  return products.filter((product) => product.inStock);
};
