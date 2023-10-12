"use client";

import styles from "./GradientButton.module.css";
import Link from "next/link";

export function GradientButton({ content, to = "#" }) {
  return (
    <button
      className={`${styles.bg} text-white rounded-full px-10 py-1 font-bold hover:scale-110 transition-all duration-300 ease-in-out`}
    >
      {content === "Purchase" ? (
        <Link href={to}>{content}</Link>
      ) : (
        <a href={to} target="_blank">
          {content}
        </a>
      )}
    </button>
  );
}
