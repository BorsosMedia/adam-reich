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
              title="3 month bulking plan"
              price="299"
              bullets={[
                "Lorem ipsum dolor sit amet.",
                "Consectetur adipiscing elit.",
                "Sed ac eleifend eros, non mollis justo.",
                "Phasellus tincidunt auctor vehicula.",
              ]}
            />
          </li>
          <li className="glide__slide">
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
          </li>
          <li className="glide__slide">
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
          </li>
          <li className="glide__slide">
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
      <p className="text-pink text-center">Swipe to see more One Time Plans</p>
    </div>
  );
}
