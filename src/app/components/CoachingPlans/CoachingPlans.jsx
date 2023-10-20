"use client";

import { CoachingPlanCards } from "../CoachingPlanCards/CoachingPlanCards";
import styles from "./CoachingPlans.module.css";
import { useState } from "react";

export function CoachingPlans() {
  const [plan, setPlan] = useState("monthly");

  const buttonStyling =
    "cursor-pointer uppercase px-4 py-2 place-self-center text-white bg-blue rounded-lg";
  const selected = "bg-pink";
  const notSelected = "hover:bg-pink transition-all ease-in-out duration-300";

  const handleChange = (event) => {
    setPlan(event.target.htmlFor);
  };

  return (
    <article id="coaching-plans" className="mb-10 md:mb-20">
      <h2
        className={`${styles.background} text-white flex justify-center items-center font-Organetto text-h6 md:text-h4 whitespace-nowrap`}
      >
        Coaching Plans
      </h2>
      <p className="font-Mortend text-center my-10 font-bold px-full md:text-h6">
        Choose the plan that fits you best
      </p>

      <fieldset className="font-Mortend grid grid-cols-3 place-self-center md:flex flex-row justify-center items-center font-bold text-[0.8em] gap-2 text-center">
        <input
          type="radio"
          value="monthly"
          id="monthly"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="monthly"
          className={`${
            plan === "monthly" ? selected : notSelected
          } ${buttonStyling}`}
          onClick={handleChange}
        >
          Monthly
        </label>
        <input
          type="radio"
          value="3-month"
          id="3-month"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="3-month"
          className={`${
            plan === "3-month" ? selected : notSelected
          } ${buttonStyling}`}
          onClick={handleChange}
        >
          3 months
        </label>
        <input
          type="radio"
          value="6-month"
          id="6-month"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="6-month"
          className={`${
            plan === "6-month" ? selected : notSelected
          } ${buttonStyling}`}
          onClick={handleChange}
        >
          6 months
        </label>
        <input
          type="radio"
          value="annual"
          id="annual"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="annual"
          className={`${
            plan === "annual" ? selected : notSelected
          } ${buttonStyling} col-span-3`}
          onClick={handleChange}
        >
          Annual
        </label>
      </fieldset>
      <section className="mt-10">
        {plan === "monthly" && (
          <CoachingPlanCards
            title={plan}
            price="249"
            to="https://coaching.rnvntucoaching.com/ftc-mp"
          />
        )}
        {plan === "3-month" && (
          <CoachingPlanCards
            title="3 month"
            price="672.3"
            discount="10% off"
            before="747"
            to="https://coaching.rnvntucoaching.com/ftc-3mp"
          />
        )}
        {plan === "6-month" && (
          <CoachingPlanCards
            title="6 month"
            price="1269.9"
            discount="15% off"
            before="1494"
            to="https://coaching.rnvntucoaching.com/ftc-6mp"
          />
        )}
        {plan === "annual" && (
          <CoachingPlanCards
            title={plan}
            price="2390.4"
            discount="20% off"
            before="2988"
            to="https://coaching.rnvntucoaching.com/ftc-ap"
          />
        )}
      </section>
    </article>
  );
}
