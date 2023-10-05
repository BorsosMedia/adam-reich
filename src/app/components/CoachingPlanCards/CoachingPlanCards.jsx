"use client";

import styles from "./CoachingPlanCards.module.css";
import { GradientButton } from "../GradientButton/GradientButton";

export function CoachingPlanCards({ title, price, bullets, discount, before }) {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-between gap-10 md:gap-20">
      <div className="min-w-fit min-h-fit p-2 bg-gradient-to-r from-blue to-pink rounded-[2rem]">
        <div className="text-white bg-black rounded-[2rem] w-fit h-fit flex flex-col items-center justify-between gap-10 text-center px-20 py-10">
          <h3 className="font-Organetto leading-none">
            <span className="text-pink">{title}</span>
            <br />
            coaching
            <br />
            plan
          </h3>
          {discount && (
            <p className="font-Mortend font-bold">
              <span className={`${styles.discount} py-10 px-5`}>
                {discount}
              </span>{" "}
              <span className="line-through text-[0.6em]">
                before ${before}
              </span>
            </p>
          )}
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
      </div>
      <ul className="list-disc flex flex-col items-center md:items-start">
        {bullets?.length > 0 &&
          bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>
    </section>
  );
}
