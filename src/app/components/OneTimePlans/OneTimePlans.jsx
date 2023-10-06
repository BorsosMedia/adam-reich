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
      <section className="lg:hidden">
        <OneTimePlansSlider />
      </section>
      <section className="hidden lg:grid grid-cols-2 justify-center items-stretch gap-10 mt-5 md:mt-10">
        <div className="justify-self-end self-center">
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
        </div>
        <div className="justify-self-start">
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
        </div>
        <div className="justify-self-end">
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
        </div>
        <div className="justify-self-start">
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
        </div>
      </section>
    </article>
  );
}
