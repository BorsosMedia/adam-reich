"use client";

import styles from "./OneTimePlanCards.module.css";
import { GradientButton } from "../GradientButton/GradientButton";

export function OneTimePlanCards({ title, duration, price, bullets, to }) {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-between gap-10 md:gap-20">
      <div className={`${styles.cardBg} w-fit h-fit p-2 rounded-[2rem]`}>
        <div className="bg-white rounded-[2rem] min-w-[340px] w-[34rem] md:w-[40rem] min-h-fit h-[40rem] flex flex-col items-center justify-evenly text-center px-10 md:px-20 py-10">
          <h3 className="font-Organetto leading-none text-blue max-w-[15em]">
            {title}
            <br />
            {duration}
            {" plan"}
          </h3>
          <div className="flex flex-col justify-center items-center gap-5">
            <ul className="list-disc flex flex-col items-center text-[0.8em]">
              {bullets?.length > 0 &&
                bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
            </ul>
            <p className="font-Mortend font-bold text-h3 text-pink">${price}</p>
            <GradientButton content="Purchase" to={to} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ul: text-[0.8em]
