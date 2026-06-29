import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollectionDetail from "./pages/CollectionDetail";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/collections/:slug" element={<CollectionDetail />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/products/:slug" element={<ProductDetail />} />
</Routes>
  );
}

export default App;