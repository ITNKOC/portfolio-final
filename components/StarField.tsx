"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  size: number;
  left: number;
  top: number;
  animationDuration: number;
  animationDelay: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const STARSNUM = 150; // Nombre d'étoiles
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;
    const newStars: Star[] = [];

    for (let i = 0; i < STARSNUM; i++) {
      const size = Math.floor(Math.random() * 3) + 1; // Taille entre 1 et 3px
      const posX = Math.floor(Math.random() * windowW);
      const posY = Math.floor(Math.random() * windowH);
      const animationDuration = Math.random() * 5 + 3; // Entre 3 et 8 secondes
      const animationDelay = Math.random() * 5; // Délai aléatoire jusqu'à 5s

      newStars.push({
        id: i,
        size,
        left: posX,
        top: posY,
        animationDuration,
        animationDelay,
      });
    }

    setStars(newStars);

    // Recréer les étoiles lors du redimensionnement de la fenêtre
    const handleResize = () => {
      const windowW = window.innerWidth;
      const windowH = window.innerHeight;
      const resizedStars: Star[] = [];

      for (let i = 0; i < STARSNUM; i++) {
        const size = Math.floor(Math.random() * 3) + 1;
        const posX = Math.floor(Math.random() * windowW);
        const posY = Math.floor(Math.random() * windowH);
        const animationDuration = Math.random() * 5 + 3;
        const animationDelay = Math.random() * 5;

        resizedStars.push({
          id: i,
          size,
          left: posX,
          top: posY,
          animationDuration,
          animationDelay,
        });
      }

      setStars(resizedStars);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="starfield-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-blink"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}px`,
            top: `${star.top}px`,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
