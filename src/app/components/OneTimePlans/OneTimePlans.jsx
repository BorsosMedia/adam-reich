"use client";

import styles from "./OneTimePlans.module.css";
import { OneTimePlanCards } from "../OneTimePlanCards/OneTimePlanCards";
import { OneTimePlansSlider } from "../OneTimePlansSlider/OneTimePlansSlider";

export function OneTimePlans() {
  return (
    <article id="one-time-plans" className="mb-10 md:mb-20">
      <h2
        className={`${styles.background} text-white flex justify-center items-center font-Organetto text-h6 md:text-h4 whitespace-nowrap`}
      >
        One Time Plans
      </h2>
      <section className="lg:hidden mt-5">
        <OneTimePlansSlider />
      </section>
      <section className="hidden lg:grid grid-cols-2 justify-center items-stretch gap-10 mt-5 md:mt-10">
        <div className="justify-self-end self-center">
          <OneTimePlanCards
            title="Building mass"
            duration="3 month"
            price="299"
            bullets={[
              "Customized Nutrition",
              "Strength Training",
              "Progressive Overload",
              "Rest and Recovery",
            ]}
            to="https://coaching.rnvntucoaching.com/otc-bm"
          />
        </div>
        <div className="justify-self-start">
          <OneTimePlanCards
            title="Ripped and shredded"
            duration="3 month"
            price="299"
            bullets={[
              "High Intensity Workouts",
              "Targeted Cardio Training",
              "Nutritional Plan",
              "Progress Tracking",
            ]}
            to="https://coaching.rnvntucoaching.com/otc-ras"
          />
        </div>
        <div className="justify-self-end">
          <OneTimePlanCards
            title="Lean and mean"
            duration="3 month"
            price="299"
            bullets={[
              "Balanced Caloric Intake",
              "Strength Training",
              "Cardio Exercises",
              "Progress Tracking",
            ]}
            to="https://coaching.rnvntucoaching.com/otc-lam"
          />
        </div>
        <div className="justify-self-start">
          <OneTimePlanCards
            title="Weight loss"
            duration="6 week"
            price="299"
            bullets={[
              "Caloric Increases",
              "Macronutrient Adjustments",
              "Strength Training",
              "Metabolic Monitoring",
            ]}
            to="https://coaching.rnvntucoaching.com/otc-wl"
          />
        </div>
      </section>
    </article>
  );
}
