import React from "react";
import "./Home.scss";
import ProductCard from "../../components/Product/ProductCard";

function Home() {
  return (
    <div className="home">
      <div className="jumbotron">
        <div className="tagline">
          <h1>Better Home Living</h1>
          <p>Your home like never before.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="featured">
        <h2>Our Products</h2>
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
