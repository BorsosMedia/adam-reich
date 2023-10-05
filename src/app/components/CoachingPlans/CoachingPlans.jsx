"use client";

import { CoachingPlanCards } from "../CoachingPlanCards/CoachingPlanCards";
import styles from "./CoachingPlans.module.css";
import { useState } from "react";

export function CoachingPlans() {
  const [plan, setPlan] = useState("monthly");

  const selected = "text-pink";
  const notSelected = "hover:text-pink transition-all ease-in-out duration-300";

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
        Choose the plan that fits you better:
      </p>

      <fieldset className="font-Mortend grid grid-cols-2 md:grid-cols-4 place-self-center font-bold text-[0.8em] gap-10 text-center">
        <input
          type="radio"
          value="monthly"
          id="monthly"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="monthly"
          className={`${plan === "monthly" ? selected : notSelected} ${
            plan === "monthly" ? styles.monthlyBg : ""
          } cursor-pointer uppercase`}
          onClick={handleChange}
        >
          Monthly
        </label>
        <input
          type="radio"
          value="3-months"
          id="3-months"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="3-months"
          className={`${plan === "3-months" ? selected : notSelected} ${
            plan === "3-months" ? styles.months3Bg : ""
          } cursor-pointer uppercase`}
          onClick={handleChange}
        >
          3 months
        </label>
        <input
          type="radio"
          value="6-months"
          id="6-months"
          name="plans"
          className="hidden"
        />
        <label
          htmlFor="6-months"
          className={`${plan === "6-months" ? selected : notSelected} ${
            plan === "6-months" ? styles.months6Bg : ""
          } cursor-pointer uppercase`}
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
          className={`${plan === "annual" ? selected : notSelected} ${
            plan === "annual" ? styles.annualBg : ""
          } cursor-pointer uppercase`}
          onClick={handleChange}
        >
          Annual
        </label>
      </fieldset>
      <section className="mt-10">
        {plan === "monthly" && (
          <CoachingPlanCards
            title={plan}
            price="399"
            bullets={[
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipiscing elit.",
              "Sed ac eleifend eros, non mollis justo.",
              "Phasellus tincidunt auctor vehicula.",
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipiscing elit.",
              "Sed ac eleifend eros, non mollis justo.",
              "Phasellus tincidunt auctor vehicula.",
            ]}
          />
        )}
        {plan === "3-months" && (
          <CoachingPlanCards
            title="3 months"
            price="1077.3"
            bullets={[
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipiscing elit.",
              "Sed ac eleifend eros, non mollis justo.",
              "Phasellus tincidunt auctor vehicula.",
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipiscing elit.",
              "Sed ac eleifend eros, non mollis justo.",
              "Phasellus tincidunt auctor vehicula.",
            ]}
            discount="10% off"
            before="1197"
          />
        )}
        {plan === "6-months" && (
          <CoachingPlanCards
            title="6 months"
            price="2034.9"
            bullets={[
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipiscing elit.",
              "Sed ac eleifend eros, non mollis justo.",
              "Phasellus tincidunt auctor vehicula.",
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipiscing elit.",
              "Sed ac eleifend eros, non mollis justo.",
              "Phasellus tincidunt auctor vehicula.",
            ]}
            discount="15% off"
            before="2394"
          />
        )}
        {plan === "annual" && (
          <CoachingPlanCards
            title={plan}
            price="3830.4"
            bullets={[
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipiscing elit.",
              "Sed ac eleifend eros, non mollis justo.",
              "Phasellus tincidunt auctor vehicula.",
              "Lorem ipsum dolor sit amet.",
              "Consectetur adipiscing elit.",
              "Sed ac eleifend eros, non mollis justo.",
              "Phasellus tincidunt auctor vehicula.",
            ]}
            discount="20% off"
            before="4788"
          />
        )}
      </section>
    </article>
  );
}
