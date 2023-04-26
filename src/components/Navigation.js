import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const Navigation = () => {
  const cartStyle = {
    background: "#f59e0d",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };

  const { cart } = useContext(CartContext);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img style={{ height: 45 }} src="/images/logo.png" alt="" />
        </Link>
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              <div style={cartStyle}>
                <span>{cart.totalItems ? cart.totalItems : 0}</span>
                <img
                  className="ml-2 text-white"
                  style={{ height: 30 }}
                  src="/images/cart.png"
                  alt=""
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
