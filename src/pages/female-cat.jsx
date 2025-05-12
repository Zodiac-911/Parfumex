import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiHeart, FiShoppingBag, FiStar, FiChevronRight } from "react-icons/fi";
import "../styles/female-category.css";
import cet from "../assets/cet.png";
import md from "../assets/md.png";
import gb from "../assets/gb.png";
import bo from "../assets/bo.png";
import vbc from "../assets/vbc.png";
import plf from "../assets/plf.png";
import tflc from "../assets/tflc.png";
import vvv from "../assets/vvv.png";
import delina from "../assets/delina.png";
import libreIntense from "../assets/libre-intense.png";
import myWay from "../assets/my-way.png";
import goodGirl from "../assets/good-girl.png";
import idole from "../assets/idole.png";
import narcisoRouge from "../assets/narciso-rouge.png";
import olympéa from "../assets/olympea.png";
import twilly from "../assets/twilly.png";
import si from "../assets/si.png";
import linterdit from "../assets/linterdit.png";
import FE from "../assets/FE.png";
import OM from "../assets/OM.png";
import FL from "../assets/FL.png";
import LC from "../assets/LC.png";

const FemaleCategory = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeBrand, setActiveBrand] = useState("All");

  // Sample data
  const brands = [
    "All",
    "Chanel",
    "Dior",
    "Gucci",
    "YSL",
    "Versace",
    "Prada",
    "Tom Ford",
    "Valentino",
    "Dolce&Gabbana",
    "Armani",
  ];

  const perfumes = [
    {
      id: 1,
      name: "Chance Eau Tendre",
      brand: "Chanel",
      price: 16200,
      rating: 4.8,
      image: cet,
    },
    {
      id: 2,
      name: "Miss Dior",
      brand: "Dior",
      price: 12825,
      rating: 4.7,
      image: md,
    },
    {
      id: 3,
      name: "Bloom",
      brand: "Gucci",
      price: 14850,
      rating: 4.6,
      image: gb,
    },
    {
      id: 4,
      name: "Black Opium",
      brand: "YSL",
      price: 14175,
      rating: 4.9,
      image: bo,
    },
    {
      id: 5,
      name: "Bright Crystal",
      brand: "Versace",
      price: 11475,
      rating: 4.5,
      image: vbc,
    },
    {
      id: 6,
      name: "La Femme",
      brand: "Prada",
      price: 15525,
      rating: 4.4,
      image: plf,
    },
    {
      id: 7,
      name: "Lost Cherry",
      brand: "Tom Ford",
      price: 33750,
      rating: 4.9,
      image: tflc,
    },
    {
      id: 8,
      name: "Voce Viva",
      brand: "Valentino",
      price: 17550,
      rating: 4.7,
      image: vvv,
    },
    {
      id: 9,
      name: "Delina",
      brand: "Parfums de Marly",
      price: 37800,
      rating: 4.9,
      image: delina,
    },
    {
      id: 10,
      name: "Libre Intense",
      brand: "YSL",
      price: 16200,
      rating: 4.8,
      image: libreIntense,
    },
    {
      id: 11,
      name: "My Way",
      brand: "Giorgio Armani",
      price: 14850,
      rating: 4.6,
      image: myWay,
    },
    {
      id: 12,
      name: "Good Girl",
      brand: "Carolina Herrera",
      price: 15525,
      rating: 4.7,
      image: goodGirl,
    },
    {
      id: 13,
      name: "Idôle",
      brand: "Lancôme",
      price: 13500,
      rating: 4.5,
      image: idole,
    },
    {
      id: 14,
      name: "Narciso Rouge",
      brand: "Narciso Rodriguez",
      price: 16875,
      rating: 4.6,
      image: narcisoRouge,
    },
    {
      id: 15,
      name: "Olympéa",
      brand: "Paco Rabanne",
      price: 14850,
      rating: 4.4,
      image: olympéa,
    },
    {
      id: 16,
      name: "Twilly d’Hermès",
      brand: "Hermès",
      price: 18225,
      rating: 4.7,
      image: twilly,
    },
    {
      id: 17,
      name: "Si Eau de Parfum",
      brand: "Giorgio Armani",
      price: 16875,
      rating: 4.7,
      image: si,
    },
    {
      id: 18,
      name: "L’Interdit",
      brand: "Givenchy",
      price: 15525,
      rating: 4.6,
      image: linterdit,
    },
  ];

  const featuredCollections = [
    { name: "Floral Elegance", image: FE },
    { name: "Oriental Mystique", image: OM },
    { name: "Fresh & Light", image: FL },
    { name: "Luxury Classics", image: LC },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="nectar-grotto">
      {/* Hero Section */}
      <section className="aurora-canvas">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
          className="luminous-core"
        >
          <h1 className="celestial-headline">
            Timeless Fragrances for the Modern Woman
          </h1>
          <p className="ethereal-caption">
            Discover our exquisite collection of premium perfumes crafted to
            enhance your unique elegance
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="stardust-cta"
          >
            Explore Collection
          </motion.button>
        </motion.div>
        <div className="nebula-veil"></div>
      </section>

      {/* Brand Showcase */}
      <section className="sigil-gallery">
        <h2 className="rune-title">Our Prestigious Brands</h2>
        <div className="glyph-grid">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`arcane-tile ${
                activeBrand === brand ? "enchanted" : ""
              }`}
              onClick={() => setActiveBrand(brand)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="relic-display">
        <h2 className="tome-heading">Featured Collections</h2>
        <div className="artifact-grid">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.name}
              className="mystic-card"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div
                className="visionary-canvas"
                style={{ backgroundImage: `url(${collection.image})` }}
              ></div>
              <h3 className="glyph-label">{collection.name}</h3>
              <motion.button whileHover={{ x: 5 }} className="spectral-link">
                View <FiChevronRight />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Perfume Products */}
      <section className="elixir-bazaar">
        <div className="alchemist-header">
          <h2 className="potion-title">Our Signature Scents</h2>
          <div className="rune-selector">
            <span className="arcane-label">Sort by:</span>
            <select className="mystic-dropdown">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="phial-grid">
          {perfumes.map((perfume) => (
            <motion.div
              key={perfume.id}
              className="essence-vessel"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProduct(perfume.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <div
                className="olfactory-portal"
                style={{ backgroundImage: `url(${perfume.image})` }}
              >
                {hoveredProduct === perfume.id && (
                  <motion.div
                    className="instant-glimpse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Quick View
                  </motion.div>
                )}
                <button className="heart-rune">
                  <FiHeart />
                </button>
                {perfume.rating && (
                  <div className="star-glyph">
                    <FiStar /> {perfume.rating}
                  </div>
                )}
              </div>
              <div className="essence-details">
                <h3 className="phial-name">{perfume.name}</h3>
                <p className="brewers-mark">{perfume.brand}</p>
                <p className="gold-price">
                  {perfume.price.toLocaleString()} DZD
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="alchemy-button"
                >
                  <FiShoppingBag /> Add to Bag
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="whispering-circle">
        <h2 className="prophet-title">What Our Clients Say</h2>
        <div className="echo-chamber">
          <motion.div
            className="oracle-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="seer-text">
              "The most luxurious fragrance I've ever owned. Lasts all day!"
            </p>
            <div className="acolyte-info">
              <span className="visionary-name">Sarah J.</span>
              <div className="star-runes">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="oracle-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="seer-text">
              "Absolutely in love with my new signature scent. Worth every
              penny."
            </p>
            <div className="acolyte-info">
              <span className="visionary-name">Emma K.</span>
              <div className="star-runes">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="oracle-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="seer-text">
              "The packaging alone is a work of art. The scent is heavenly."
            </p>
            <div className="acolyte-info">
              <span className="visionary-name">Olivia M.</span>
              <div className="star-runes">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="scroll-sanctum">
        <motion.div
          className="message-core"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="invocation-title">Join Our Fragrance Journey</h2>
          <p className="runic-call">
            Subscribe to receive exclusive offers, new arrivals, and fragrance
            tips
          </p>
          <div className="sigil-form">
            <input
              type="email"
              placeholder="Your email address"
              className="eldritch-input"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ritual-button"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
        <div className="arcane-mist"></div>
      </section>
    </div>
  );
};

export default FemaleCategory;
