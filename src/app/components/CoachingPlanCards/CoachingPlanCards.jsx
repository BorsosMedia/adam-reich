"use client";

import styles from "./CoachingPlanCards.module.css";
import { GradientButton } from "../GradientButton/GradientButton";

export function CoachingPlanCards({ title, price, discount, before, to }) {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-between gap-10 md:gap-20">
      <div
        className={`${styles.cardBg} min-w-fit min-h-fit p-2 rounded-[2rem]`}
      >
        <div className="text-white bg-black rounded-[2rem] min-w-[340px] w-[34rem] md:w-[40rem] h-fit flex flex-col items-center justify-between gap-10 text-center px-5 py-10">
          <h3 className="font-Organetto leading-none text-h5">
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
          <ul className="list-disc flex flex-col items-center md:items-start gap-y-half md:hidden">
            <li>SMS & Email Check-ins</li>
            <li>Personalized Training</li>
            <li>Nutrition and Rehab</li>
            <li>Lifestyle Advice</li>
            <li>Includes Initial Consultation</li>
          </ul>
          <p className="font-Mortend font-bold text-h3">
            ${price}
            <span className="text-[0.3em] px-4">
              /
              <span className="font-Organetto">
                {title === "monthly"
                  ? "month"
                  : title === "annual"
                  ? title
                  : `${title}s`}
              </span>
            </span>
          </p>
          <GradientButton content="Purchase" to={to} />
        </div>
      </div>
      <ul className="list-disc hidden md:flex flex-col items-center md:items-start gap-y-half">
        <li>SMS & Email Check-ins</li>
        <li>Personalized Training</li>
        <li>Nutrition and Rehab</li>
        <li>Lifestyle Advice</li>
        <li>Includes Initial Consultation</li>
      </ul>
    </section>
  );
}
