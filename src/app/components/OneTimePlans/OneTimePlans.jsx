"use client";

import styles from "./OneTimePlans.module.css";
import { OneTimePlanCards } from "../OneTimePlanCards/OneTimePlanCards";

export function OneTimePlans() {
  return (
    <article id="one-time-plans" className="mb-10 md:mb-20">
      <h2
        className={`${styles.background} text-white flex justify-center items-center font-Organetto text-h6 md:text-h4 whitespace-nowrap`}
      >
        One Time Plans
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-stretch gap-10 mt-5 md:mt-10">
        <OneTimePlanCards
          title="3 month bulking plan"
          price="299"
          bullets={[
            "Lorem ipsum dolor sit amet.",
            "Consectetur adipiscing elit.",
            "Sed ac eleifend eros, non mollis justo.",
            "Phasellus tincidunt auctor vehicula.",
          ]}
        />
        <OneTimePlanCards
          title="3 month shredding plan"
          price="299"
          bullets={[
            "Lorem ipsum dolor sit amet.",
            "Consectetur adipiscing elit.",
            "Sed ac eleifend eros, non mollis justo.",
            "Phasellus tincidunt auctor vehicula.",
          ]}
        />
        <OneTimePlanCards
          title="3 month body recomposition plan"
          price="299"
          bullets={[
            "Lorem ipsum dolor sit amet.",
            "Consectetur adipiscing elit.",
            "Sed ac eleifend eros, non mollis justo.",
            "Phasellus tincidunt auctor vehicula.",
          ]}
        />
        <OneTimePlanCards
          title="6 week reverse diet plan"
          price="299"
          bullets={[
            "Lorem ipsum dolor sit amet.",
            "Consectetur adipiscing elit.",
            "Sed ac eleifend eros, non mollis justo.",
            "Phasellus tincidunt auctor vehicula.",
          ]}
        />
      </section>
    </article>
  );
}
