"use client";

import { GradientButton } from "../GradientButton/GradientButton";

export function CoachingPlanCards({ title, price, bullets }) {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 md:gap-20">
      <div className="text-white bg-black rounded-[2rem] w-fit h-fit flex flex-col items-center justify-between gap-10 text-center px-20 py-10">
        <h3 className="font-Organetto leading-none">
          <span className="text-pink">{title}</span>
          <br />
          coaching
          <br />
          plan
        </h3>
        <p className="font-Mortend font-bold text-h4">
          ${price}
          <span className="text-[0.3em]">
            /
            <span className="font-Organetto">
              {title === "monthly" ? "month" : title}
            </span>
          </span>
        </p>
        <GradientButton content="Purchase" />
      </div>
      <ul className="list-disc">
        {bullets?.length > 0 &&
          bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>
    </section>
  );
}
