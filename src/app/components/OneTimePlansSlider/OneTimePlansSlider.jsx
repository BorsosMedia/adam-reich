"use client";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { useEffect } from "react";
import Glide, {
  Controls,
  Swipe,
  Autoplay,
} from "@glidejs/glide/dist/glide.modular.esm";
import { OneTimePlanCards } from "../OneTimePlanCards/OneTimePlanCards";

export function OneTimePlansSlider() {
  const arrowStyle = {
    color: "#ffffff",
    fontWeight: "bold",
    backgroundColor: "rgba(24,24,24,.5)",
  };

  useEffect(() => {
    new Glide("#glide1", {
      type: "carousel",
      autoplay: 5000,
      hoverpause: false,
      swipeThreshold: 80,
      dragThreshold: 120,
      touchRatio: 0.5,
      rewind: true,
      perSwipe: 1,
      perTouch: 1,
      perView: 1,
    }).mount({
      Controls,
      Swipe,
      Autoplay,
    });
  }, []);

  return (
    <div className="glide glide--swipeable" id="glide1">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <OneTimePlanCards
              title="Building mass"
              duration="3 month"
              price="499"
              bullets={[
                "Customized Nutrition",
                "Strength Training",
                "Progressive Overload",
                "Rest and Recovery",
              ]}
              to="https://coaching.rnvntucoaching.com/otc-bm"
            />
          </li>
          <li className="glide__slide">
            <OneTimePlanCards
              title="Ripped and shredded"
              duration="3 month"
              price="499"
              bullets={[
                "High Intensity Workouts",
                "Targeted Cardio Training",
                "Nutritional Plan",
                "Progress Tracking",
              ]}
              to="https://coaching.rnvntucoaching.com/otc-ras"
            />
          </li>
          <li className="glide__slide">
            <OneTimePlanCards
              title="Lean and mean"
              duration="3 month"
              price="499"
              bullets={[
                "Balanced Caloric Intake",
                "Strength Training",
                "Cardio Exercises",
                "Progress Tracking",
              ]}
              to="https://coaching.rnvntucoaching.com/otc-lam"
            />
          </li>
          <li className="glide__slide">
            <OneTimePlanCards
              title="Weight loss"
              duration="6 week"
              price="499"
              bullets={[
                "Caloric Increases",
                "Macronutrient Adjustments",
                "Strength Training",
                "Metabolic Monitoring",
              ]}
              to="https://coaching.rnvntucoaching.com/otc-wl"
            />
          </li>
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--left"
          data-glide-dir="<"
          style={arrowStyle}
        >
          {"<"}
        </button>
        <button
          className="glide__arrow glide__arrow--right"
          data-glide-dir=">"
          style={arrowStyle}
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
