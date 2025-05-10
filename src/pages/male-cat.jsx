import React from "react";
import "../styles/male-category.css";
import { motion } from "framer-motion";

function MaleCategory() {
  const products = [
    {
      name: "Le Male Elixir",
      brand: "Jean Paul Gaultier",
      price: "21,000 DZD",
      img: "gaultier.jpg",
    },
    {
      name: "Tom Ford Noir Extreme",
      brand: "Tom Ford",
      price: "19,800 DZD",
      img: "noir-extreme.jpg",
    },
    {
      name: "Sauvage Elixir",
      brand: "Dior",
      price: "24,000 DZD",
      img: "sauvage.jpg",
    },
    {
      name: "Bleu de Chanel",
      brand: "Chanel",
      price: "23,000 DZD",
      img: "bleu.jpg",
    },
    {
      name: "Invictus",
      brand: "Paco Rabanne",
      price: "19,800 DZD",
      img: "invictus.jpg",
    },
  ];

  return (
    <div className="male-category-container">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Luxury for Him</h1>
          <p>Discover bold elegance with our premium men's perfumes.</p>
        </motion.div>
      </section>

      {/* Featured Brands */}
      <section className="brands-section">
        <h2>Featured Brands</h2>
        <div className="brands-logos">
          {["Tom Ford", "Dior", "Chanel", "YSL", "Armani", "Paco Rabanne"].map(
            (brand, i) => (
              <motion.div
                className="brand-logo"
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {brand}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Fragrance Types */}
      <section className="types-section">
        <h2>Fragrance Styles</h2>
        <div className="types-grid">
          {["Woody", "Fresh", "Oriental", "Spicy", "Aquatic"].map((type, i) => (
            <motion.div
              key={i}
              className="type-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{type}</h3>
              <p>
                Explore the finest {type.toLowerCase()} scents handpicked for
                gentlemen.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2>Top Picks</h2>
        <div className="products-grid">
          {products.map((product, i) => (
            <motion.div
              className="product-card"
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="product-img"
                style={{ backgroundImage: `url(/assets/${product.img})` }}
              ></div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="brand">{product.brand}</p>
                <p className="price">{product.price}</p>
                <button>Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ 100% Authentic Perfumes</li>
          <li>✔ Premium Packaging</li>
          <li>✔ VIP Customer Support</li>
          <li>✔ Fast Delivery Across Algeria</li>
        </ul>
      </section>

      {/* Customer Reviews */}
      <section className="reviews-section">
        <h2>Customer Love</h2>
        <div className="reviews">
          <div className="review">
            <p>
              “Sauvage Elixir is my signature scent now. Fast delivery and great
              packaging.”
            </p>
            <strong>- Walid B.</strong>
          </div>
          <div className="review">
            <p>
              “Premium quality. Better than expected. I’ll be shopping again
              soon!”
            </p>
            <strong>- Karim D.</strong>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <h2>Stay in the Scent</h2>
        <p>
          Join our newsletter and never miss a luxury launch or special offer.
        </p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>
    </div>
  );
}

export default MaleCategory;
