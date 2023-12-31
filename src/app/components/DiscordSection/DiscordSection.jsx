import styles from "./DiscordSection.module.css";
import Image from "next/image";
import discordLogo from "../../../../public/discord-icon.png";
import discordAdam from "../../../../public/discord-adam.png";
import { GradientButton } from "../GradientButton/GradientButton";

export function DiscordSection() {
  return (
    <article
      className={`${styles.background} bg-black text-white flex flex-col items-center justify-center py-32`}
    >
      <section className="md:hidden flex flex-col items-center justify-center text-[0.8em]">
        <Image
          src={discordLogo}
          alt="Discord Logo"
          className="h-auto w-[6rem]"
        />
        <h2 className="font-Organetto my-5 br:text-h5">
          Join my <span className="text-blue">discord server</span>
        </h2>
      </section>
      <section className="grid grid-cols-1 br:grid-cols-6 justify-center items-center gap-10">
        <Image
          src={discordAdam}
          alt="Adam's Picture"
          className="br:col-start-2 br:col-span-2 place-content-center px-[10vw] br:px-0"
        />
        <section className="br:col-span-3 place-content-center text-center br:text-left md:col-span-2">
          <div className="hidden md:block">
            <Image
              src={discordLogo}
              alt="Discord Logo"
              className="h-auto w-[8rem]"
            />
            <h2 className="font-Organetto text-h5 md:text-h4 my-5">
              Join my <br />
              <span className="text-blue">discord server</span>
            </h2>
          </div>
          <div className="mb-10 px-[10vw] md:px-0 text-[0.8em]">
            <p>
              Join our community to find more people in the same journey as you!
            </p>
            <p className="my-5">You&apos;ll be able to:</p>
            <ul className="list-disc">
              <li>Share experiences</li>
              <li>Exchange information</li>
              <li>Get motivated</li>
            </ul>
          </div>
          <div className="hidden md:block">
            <GradientButton content="Join Now" />
          </div>
        </section>
      </section>
      <div className="md:hidden">
        <GradientButton content="Join Now" />
      </div>
    </article>
  );
}
