"use client";

import { useEffect, useRef } from 'react';

/**
 * Professional NBC Background Animation
 * Elegant floating particles and subtle geometric patterns
 * Perfect for banking/corporate aesthetic
 */
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Particle system for elegant floating effect
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacitySpeed: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        opacitySpeed: (Math.random() - 0.5) * 0.01,
      });
    }

    // Animation time
    let time = 0;

    // Animation function
    const draw = () => {
      // Clear with subtle fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(228, 28, 35, 0.03)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let i = 0; i < canvas.width; i += 100) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let i = 0; i < canvas.height; i += 100) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update opacity
        particle.opacity += particle.opacitySpeed;
        if (particle.opacity <= 0.1 || particle.opacity >= 0.7) {
          particle.opacitySpeed *= -1;
        }

        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with NBC red color
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 28, 35, ${particle.opacity})`;
        ctx.fill();

        // Add subtle glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(228, 28, 35, 0.3)';
      });

      // Reset shadow
      ctx.shadowBlur = 0;

      // Draw elegant wave patterns
      time += 0.01;
      ctx.strokeStyle = 'rgba(228, 28, 35, 0.1)';
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < canvas.width; x += 5) {
        const y = canvas.height / 2 + Math.sin(x * 0.01 + time) * 30;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Second wave (offset)
      ctx.strokeStyle = 'rgba(228, 28, 35, 0.05)';
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const y = canvas.height / 3 + Math.sin(x * 0.008 + time * 1.2) * 40;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    // Animation loop
    const interval = setInterval(draw, 33); // ~30fps

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-0 dark:opacity-[0.15] transition-opacity duration-700"
      style={{ background: 'transparent' }}
      aria-hidden="true"
    />
  );
};

export default MatrixRain;
