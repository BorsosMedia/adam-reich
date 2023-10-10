"use client";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { useEffect } from "react";
import Glide, {
  Controls,
  Breakpoints,
} from "@glidejs/glide/dist/glide.modular.esm";
import { OneTimePlanCards } from "../OneTimePlanCards/OneTimePlanCards";

export function OneTimePlansSlider() {
  useEffect(() => {
    new Glide(".glide").mount({ Controls, Breakpoints });
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
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
            />
          </li>
          <li className="glide__slide">
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
            />
          </li>
          <li className="glide__slide">
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
            />
          </li>
          <li className="glide__slide">
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
            />
          </li>
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--left"
          style={{
            color: "#181818",
            fontWeight: "bold",
          }}
          data-glide-dir="<"
        >
          {"<"}
        </button>
        <button
          className="glide__arrow glide__arrow--right"
          style={{ color: "#181818", fontWeight: "bold" }}
          data-glide-dir=">"
        >
          {">"}
        </button>
      </div>
      <p className="text-pink text-center mt-5 md:mt-10">
        Swipe to see more One Time Plans
      </p>
    </div>
  );
}
