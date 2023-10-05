"use client";

import { GradientButton } from "../GradientButton/GradientButton";

export function OneTimePlanCards({ title, price, bullets }) {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-between gap-10 md:gap-20">
      <div className="min-w-fit min-h-fit p-2 bg-gradient-to-r from-blue to-pink rounded-[2rem]">
        <div className="bg-white rounded-[2rem] w-fit h-fit flex flex-col items-center justify-between gap-10 text-center px-10 md:px-20 py-10">
          <h3 className="font-Organetto leading-none text-blue max-w-[15em]">
            {title}
          </h3>
          <ul className="list-disc flex flex-col items-center text-[0.8em]">
            {bullets?.length > 0 &&
              bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul>
          <p className="font-Mortend font-bold text-h3 text-pink">${price}</p>
          <GradientButton content="Purchase" />
        </div>
      </div>
    </section>
  );
}