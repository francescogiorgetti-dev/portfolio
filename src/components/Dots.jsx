import { useState, useEffect, useRef } from 'react';

function Dots() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const starsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const screenWidth = window.innerWidth;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const FPS = 60;
    const starCount = (screenWidth < 768) ? 40 : 100;//different star count for small screens

    // Initialize stars
    starsRef.current = [];
    for (let i = 0; i < starCount; i++) {
      starsRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      });
    }

    // Distance function
    function distance(point1, point2) {
      const xs = (point2.x - point1.x) ** 2;
      const ys = (point2.y - point1.y) ** 2;
      return Math.sqrt(xs + ys);
    }

    // Draw function
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      // Draw stars
      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.stroke();
      }

      // Draw connections
      ctx.beginPath();
      for (let i = 0; i < starsRef.current.length; i++) {
        const starI = starsRef.current[i];
        ctx.moveTo(starI.x, starI.y);

        if (distance(mouseRef.current, starI) < 150) {
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
        }

        for (let j = 0; j < starsRef.current.length; j++) {
          const starII = starsRef.current[j];
          if (distance(starI, starII) < 150) {
            ctx.lineTo(starII.x, starII.y);
          }
        }
      }
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }

    // Update function
    function update() {
      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];
        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    }

    // Animation loop
    function tick() {
      draw();
      update();
      animationRef.current = requestAnimationFrame(tick);
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    tick();

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="dots"
    />
  );
}

export default Dots;