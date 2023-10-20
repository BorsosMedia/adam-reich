"use client";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Image from "next/image";
import { useEffect } from "react";
import Glide, {
  Controls,
  Swipe,
  Autoplay,
  Breakpoints,
} from "@glidejs/glide/dist/glide.modular.esm";
import person1 from "../../../../public/testimonials/1.png";
import person2 from "../../../../public/testimonials/2.png";
import person3 from "../../../../public/testimonials/3.png";
import person4 from "../../../../public/testimonials/4.png";
import person5 from "../../../../public/testimonials/5.png";
import person6 from "../../../../public/testimonials/6.png";
import person7 from "../../../../public/testimonials/7.png";
import person8 from "../../../../public/testimonials/8.png";
import person9 from "../../../../public/testimonials/9.png";
import person10 from "../../../../public/testimonials/10.png";
import person11 from "../../../../public/testimonials/11.png";
import person12 from "../../../../public/testimonials/12.png";

export function TestimonialsSlider() {
  const arrowStyle = {
    color: "#ffffff",
    fontWeight: "bold",
    backgroundColor: "rgba(24,24,24,.5)",
  };

  const imageStyle = "w-[80%] px-[10vw] md:px-0 md:w-full";
  const divStyle = "flex flex-row justify-center items-center";

  useEffect(() => {
    new Glide("#glide2", {
      type: "carousel",
      autoplay: 5000,
      hoverpause: false,
      swipeThreshold: 80,
      dragThreshold: 120,
      touchRatio: 0.5,
      rewind: true,
      perSwipe: 1,
      perTouch: 1,
      perView: 3,
      gap: 20,
      breakpoints: {
        768: {
          perView: 1,
          gap: 10,
        },
      },
    }).mount({
      Controls,
      Swipe,
      Autoplay,
      Breakpoints,
    });
  }, []);

  return (
    <div
      className="glide glide--swipeable"
      id="glide2"
      style={{ padding: "0 10vw" }}
    >
      <div
        className="glide__track"
        data-glide-el="track"
        style={{
          margin: "auto",
        }}
      >
        <ul className="glide__slides">
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person1}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person2}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person3}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person4}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person5}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person6}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person7}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person8}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person9}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person10}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person11}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
          </li>
          <li className="glide__slide">
            <div className={divStyle}>
              <Image
                src={person12}
                alt="Before and after"
                className={imageStyle}
              />
            </div>
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
        Swipe to see more amazing transformations
      </p>
    </div>
  );
}
