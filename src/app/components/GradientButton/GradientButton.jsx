"use client";

export function GradientButton({ content }) {
  return (
    <button className="text-white rounded-full px-10 py-1 bg-gradient-to-br from-pink to-blue font-bold hover:scale-110 transition-all duration-300 ease-in-out">
      {content}
    </button>
  );
}
