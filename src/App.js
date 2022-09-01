import "./css/style.css";
import { Route, Routes } from "react-router-dom";

import Shop from "./routes/Shop";
import Blog from "./routes/Blog";
import Products from "./routes/Products";
import Home from "./routes/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
