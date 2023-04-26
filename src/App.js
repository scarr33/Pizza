import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";
import { getCart, storeCart } from "./helpers";

const App = () => {
  const [cart, setCart] = useState({});
  //Fetch cart from local storage

  useEffect(() => {
    getCart().then((cart) => {
      setCart(JSON.parse(cart));
    });
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/about" element={<About />}></Route> */}
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/products/:_id" element={<SingleProduct />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;
