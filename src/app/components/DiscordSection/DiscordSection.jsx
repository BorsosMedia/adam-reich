/* eslint-disable react/no-unescaped-entities */
"use client";

import styles from "./DiscordSection.module.css";
import Image from "next/image";
import discordLogo from "../../../../public/discord-icon.png";
import discordAdam from "../../../../public/discord-adam.png";
import { GradientButton } from "../GradientButton/GradientButton";

export function DiscordSection() {
  return (
    <article
      className={`${styles.background} text-white flex flex-col items-center justify-center`}
    >
      <section className="md:hidden flex flex-col items-center justify-center">
        <Image
          src={discordLogo}
          alt="Discord Logo"
          className="h-auto w-[8rem]"
        />
        <h2 className="font-Organetto text-h5 my-5">
          Join my <span className="text-blue">discord server</span>
        </h2>
      </section>
      <section className="grid grid-cols-6 justify-center items-center gap-10">
        <Image
          src={discordAdam}
          alt="Adam's Picture"
          className="col-start-2 col-span-2 place-content-center hidden md:block"
        />
        <section className="col-span-2 place-content-center">
          <div className="hidden md:block">
            <Image
              src={discordLogo}
              alt="Discord Logo"
              className="h-auto w-[8rem]"
            />
            <h2 className="font-Organetto text-h5 my-5">
              Join my <span className="text-blue">discord server</span>
            </h2>
          </div>
          <div className="text-[0.8em] mb-10">
            <p>
              Join our community and find more people like you in their journey!
            </p>
            <p className="my-5">You'll be able to:</p>
            <ul>
              <li>-Share experiences</li>
              <li>-Exchange information and knowledge</li>
              <li>-A great motivational environment!</li>
            </ul>
          </div>
          <div className="hidden md:block">
            <GradientButton content="Join Now" />
          </div>
        </section>
        <div className="md:hidden">
          <GradientButton content="Join Now" />
        </div>
      </section>
    </article>
  );
}
