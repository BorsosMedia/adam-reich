/* eslint-disable react/no-unescaped-entities */
"use client";

import styles from "./DiscordSection.module.css";
import Image from "next/image";
import discordLogo from "../../../../public/discord-icon.png";
import discordAdam from "../../../../public/discord-adam.png";

export function DiscordSection() {
  return (
    <article className={`${styles.background} text-white`}>
      <Image
        src={discordAdam}
        alt="Adam's Picture"
        className="hidden md:block"
      />
      <section>
        <Image src={discordLogo} alt="Discord Logo" />
        <h2>
          Join my <span className="text-blue">discord server</span>
        </h2>
        <div>
          <Image src={discordAdam} alt="Adam's Picture" className="md:hidden" />
          <p>
            Join our community and find more people like you in their journey!
          </p>
          <p>You'll be able to:</p>
          <ul>
            <li>-Share experiences</li>
            <li>-Exchange information and knowledge</li>
            <li>-A great motivational environment!</li>
          </ul>
        </div>
        <button className="rounded bg-gradient-to-r from-pink to-blue">
          Join Now
        </button>
      </section>
    </article>
  );
}
