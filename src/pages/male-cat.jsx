import React from "react";
import "../styles/male-category.css";
import { motion } from "framer-motion";
import gaultier from "../assets/JeanPaulGaultierLeMaleElixirEauDeParfum125ml_900x.webp";
import extreme from "../assets/tom-ford-noir-extreme.png";
import sauvage from "../assets/christian_dior_sauvage_elixir.png";
import bdc from "../assets/bleu-de-chanel.png";
import pri from "../assets/Paco-Rabanne-Invictus.png";
import yLeParfum from "../assets/ysl-y-le-parfum.png";
import armaniCode from "../assets/armani-code.png";
import oneMillion from "../assets/one-million.png";
import bossBottled from "../assets/hugo-boss-bottled.png";
import spicebomb from "../assets/viktor-rolf-spicebomb.png";
import valentinoUomo from "../assets/valentino-uomo.png";
import pradaLuna from "../assets/prada-luna-rossa.png";

function MaleCategory() {
  const products = [
    {
      name: "Le Male Elixir",
      brand: "Jean Paul Gaultier",
      price: "21,000 DZD",
      img: gaultier,
    },
    {
      name: "Tom Ford Noir Extreme",
      brand: "Tom Ford",
      price: "19,800 DZD",
      img: extreme,
    },
    {
      name: "Sauvage Elixir",
      brand: "Dior",
      price: "24,000 DZD",
      img: sauvage,
    },
    {
      name: "Bleu de Chanel",
      brand: "Chanel",
      price: "23,000 DZD",
      img: bdc,
    },
    {
      name: "Invictus",
      brand: "Paco Rabanne",
      price: "19,800 DZD",
      img: pri,
    },

    {
      name: "Y Le Parfum",
      brand: "Yves Saint Laurent",
      price: "22,500 DZD",
      img: yLeParfum,
    },
    {
      name: "Armani Code",
      brand: "Giorgio Armani",
      price: "21,000 DZD",
      img: armaniCode,
    },
    {
      name: "1 Million",
      brand: "Paco Rabanne",
      price: "20,500 DZD",
      img: oneMillion,
    },
    {
      name: "Boss Bottled",
      brand: "Hugo Boss",
      price: "18,900 DZD",
      img: bossBottled,
    },
    {
      name: "Spicebomb Extreme",
      brand: "Viktor & Rolf",
      price: "23,500 DZD",
      img: spicebomb,
    },
    {
      name: "Valentino Uomo Intense",
      brand: "Valentino",
      price: "24,000 DZD",
      img: valentinoUomo,
    },
    {
      name: "Luna Rossa Carbon",
      brand: "Prada",
      price: "22,800 DZD",
      img: pradaLuna,
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
                style={{ backgroundImage: `url(${product.img})` }}
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
          <li> 100% Authentic Perfumes</li>
          <li> Premium Packaging</li>
          <li> VIP Customer Support</li>
          <li> Fast Delivery Across Algeria</li>
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
