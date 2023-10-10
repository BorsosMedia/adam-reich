"use client";

import styles from "./GradientButton.module.css";

export function GradientButton({ content }) {
  return (
    <button
      className={`${styles.bg} text-white rounded-full px-10 py-1 font-bold hover:scale-110 transition-all duration-300 ease-in-out`}
    >
      {content}
    </button>
  );
}

// bg-gradient-to-br from-pink to-blue
