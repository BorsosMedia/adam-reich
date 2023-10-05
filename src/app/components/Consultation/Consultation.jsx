/* eslint-disable react/no-unescaped-entities */
"use client";

import styles from "./Consultation.module.css";

export function Consultation() {
  return (
    <section
      className={`${styles.background} text-white flex flex-col items-center justify-start md:justify-center text-center text-[0.8em] py-5 px-[10vw] md:px-0`}
    >
      <h3 className="text-pink font-Organetto">
        or GET A FREE 15 MINUTE CONSULTATION CALL
      </h3>
      <p className="my-5 px-5">
        <span className="font-bold">
          If you have more questions, let's chat!
        </span>{" "}
        <span className="hidden md:inline">
          I'll clear any doubt about the process we'll go through to reach the
          best version of yourself
        </span>
      </p>
      <button className="bg-blue rounded-3xl font-bold px-4 py-1">
        <a href="#">Go To The Calendar</a>
      </button>
    </section>
  );
}
