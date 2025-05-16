import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Components
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/Subpages/ProductsPage";
import ProductDescription from "./components/Subpages/ProductDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page route */}
          <Route index element={<HomePage />} />

          {/* Products page route */}
          <Route path="products" element={<ProductsPage />} />

          {/* Add more routes here as needed */}
          <Route path="description" element={<ProductDescription />} />
          {/* <Route path="contact" element={<ContactPage />} /> */}

          {/* 404 route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
