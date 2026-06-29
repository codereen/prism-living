import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollectionDetail from "./pages/CollectionDetail";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/collections/:slug" element={<CollectionDetail />} />
</Routes>
  );
}

export default App;