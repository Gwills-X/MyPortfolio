import React from "react";

/**
 * Redesigned Container
 * @param {string} size - 'small', 'medium', 'large' (default), or 'full'
 * @param {boolean} clean - If true, removes horizontal padding
 */
export default function Container({
  children,
  className = "",
  size = "large",
  clean = false,
}) {
  // Define width configurations
  const sizes = {
    small: "max-w-3xl", // For blog posts/articles
    medium: "max-w-5xl", // For feature sections
    large: "max-w-7xl", // Standard site width
    full: "max-w-full", // Edge-to-edge
  };

  return (
    <div
      className={`
        ${sizes[size] || sizes.large} 
        mx-auto 
        ${clean ? "px-0" : "px-5 sm:px-8 md:px-12"} 
        w-full
        ${className}
      `}>
      {children}
    </div>
  );
}
