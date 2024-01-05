"use client";

import styles from "./ContestSection.module.css";
import Link from "next/link";

export const ContestSection = () => {
  return (
    <article
      className="contest-bg bg-[#161616] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
      id="contest"
    >
      <section className="container mx-auto flex w-[80%] flex-col justify-around gap-10 lg:gap-14 py-8 text-center xl:text-xl 2xl:text-2xl font-Mortend uppercase text-white sm:col-start-2 xl:col-start-2 xl:col-span-2">
        <h2 className="font-Organetto text-pink text-3xl md:text-4xl 2xl:text-6xl">
          <span className="text-[1.5em] whitespace-nowrap">new year</span>
          <br />
          <span className="text-blue whitespace-nowrap">new challenge</span>
        </h2>

        <h3 className="font-black tracking-widest text-xl md:text-3xl lg:text-4xl 2xl:text-5xl">
          Get ripped while winning!
        </h3>

        <ul className="flex list-none flex-col justify-between gap-4 text-base md:text-2xl">
          <li className="font-thin">
            <span className="text-[1.2em] font-black text-blue">
              1st Place:
            </span>{" "}
            $1000 CASH
          </li>
          <li className="font-thin">
            <span className="text-[1.2em] font-black text-pink">
              2nd Place:
            </span>{" "}
            A year of free coaching
          </li>
          <li className="font-thin">
            <span className="text-[1.2em] font-black text-pink">
              3rd Place:
            </span>{" "}
            Daily workout website membership for a year
          </li>
        </ul>
        <section>
          <p className="text-[0.6em] md:text-[0.8em] mb-4">
            Buy any of my plans to enter the contest
          </p>
          <Link href="#coaching-plans">
            <button
              className={`${styles.bg} text-white rounded-full px-[4rem] py-[1rem] font-bold hover:scale-110 transition-all duration-300 ease-in-out font-Articulat text-3xl`}
            >
              Go To Plans
            </button>
          </Link>
        </section>
      </section>
    </article>
  );
};
