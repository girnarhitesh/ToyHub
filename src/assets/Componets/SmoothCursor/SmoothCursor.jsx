// SmoothCursor.jsx
import React, { useEffect, useRef } from "react";
import "./SmoothCursor.css";

const SmoothCursor = () => {
  const cursorRef = useRef(null);
  let mouseX = 0, mouseY = 0;
  let circleX = 0, circleY = 0;
  const speed = 0.08; // Lower = smoother, slower movement

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="smooth-cursor" ref={cursorRef}></div>;
};

export default SmoothCursor;