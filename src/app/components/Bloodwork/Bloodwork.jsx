"use client";

import styles from "./Bloodwork.module.css";
import { GradientButton } from "../GradientButton/GradientButton";

export function Bloodwork() {
  return (
    <>
      <div className={styles.separator} />
      <article className={styles.bg}>
        <section className="grid grid-cols-1 lg:grid-cols-5 w-full h-full text-[0.8em] md:text-[1em] p-[10vw]">
          <div
            className={`${styles.card} lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start justify-evenly gap-10`}
          >
            <h2 className="font-Organetto text-h5">
              Optimization
              <br />
              Through
              <br />
              <span className="text-pink whitespace-nowrap">Blood Work</span>
            </h2>
            <p>
              One-time phone consult to review your lab results and a{" "}
              <span className="font-bold">
                comprehensive plan will be put in place to correct any markers
                might be out of range.
              </span>
            </p>
            <p className="font-Mortend text-blue text-h2 font-bold">$199</p>
            <GradientButton
              content="Purchase"
              to="https://coaching.rnvntucoaching.com/bloodwork-pay"
            />
          </div>
        </section>
      </article>
    </>
  );
}
