/* eslint-disable react/no-unescaped-entities */
"use client";

import styles from "./HeroBanner.module.css";

export function HeroBanner() {
  return (
    <article className={styles.banner}>
      <div className="grid grid-cols-1 lg:grid-cols-5 px-xl w-full h-full text-[0.8em] md:text-[1em]">
        <h1 className="lg:col-span-3 place-self-center font-Organetto text-h5 text-center leading-[101.9%]">
          <div className={styles.gradientText}>
            <span className="lg:whitespace-nowrap">
              it is not just coaching,
            </span>
            <br />
            <span className="text-[1.2em]">
              it is reinventing
              <br />
              yourself
            </span>
          </div>
        </h1>
      </div>
    </article>
  );
}
