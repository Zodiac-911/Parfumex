import { useEffect, useState } from "react";
import "../styles/home-banner.css";

import sauvagePNG from "../assets/dior-sauvage-banner.png";
import chanelPNG from "../assets/bleu-de-chanel.png";
import yslPNG from "../assets/Y-by-YSL.png";
import armaniPNG from "../assets/Acqua-di-Giò.png";

const slides = [
  {
    image: sauvagePNG,
    title: "Sauvage by Dior",
    subtitle: "A fragrance born in the wild, refined for the modern man.",
  },
  {
    image: chanelPNG,
    title: "Bleu de Chanel",
    subtitle: "Bold, timeless, and effortlessly sophisticated.",
  },
  {
    image: yslPNG,
    title: "Y by YSL",
    subtitle: "A fresh take on masculinity. clean, sharp, and modern.",
  },
  {
    image: armaniPNG,
    title: "Acqua di Giò",
    subtitle: "An aquatic classic. crisp, invigorating, and enduring.",
  },
];

function HomeBanner() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true); // Trigger fade in
      }, 300); // Match fade-out time
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle } = slides[index];

  return (
    <div className={`banner-container ${fade ? "fade-in" : "fade-out"}`}>
      <img src={image} alt={title} />
      <div className="banner-text">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

export default HomeBanner;
