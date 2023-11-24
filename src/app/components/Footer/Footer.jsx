import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import tiktok from "../../../../public/footer/tiktok.png";
import instagram from "../../../../public/footer/instagram.png";
import x from "../../../../public/footer/x.png";
import location from "../../../../public/footer/location.png";

export function Footer() {
  const socialIcon =
    "w-[1.5em] h-auto hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out";

  return (
    <footer className="bg-black text-white p-[2em] text-[0.8em]">
      <article className="grid grid-cols-1 items-stretch justify-center">
        <Image
          src={logo}
          alt="RNVNTU Coaching LLC Logo"
          className="w-[15em] h-auto justify-self-center self-start"
        />
        <div
          className={`${styles.separator} w-full h-[0.2em] rounded justify-self-center self-center my-10 md:w-[50%]`}
        />
        <section className="flex flex-col justify-evenly items-center gap-5 justify-self-center self-end">
          <div className="flex flex-row gap-10 mt-5 md:mt-10">
            <a href="https://www.tiktok.com/@adamreich_" target="_blank">
              <Image src={tiktok} alt="TikTok icon" className={socialIcon} />
            </a>
            <a href="https://www.instagram.com/adamreich" target="_blank">
              <Image
                src={instagram}
                alt="Instagram icon"
                className={socialIcon}
              />
            </a>
            <a href="https://twitter.com/AdamReich__" target="_blank">
              <Image src={x} alt="X icon" className={socialIcon} />
            </a>
          </div>
        </section>
        {/* <section className="flex justify-center items-center gap-5 text-center mt-5">
          <Image src={location} alt="location" className="w-[1em] h-auto" />
          <a href="https://maps.app.goo.gl/GbMLMjC2oN1hWvHv7" target="_blank">
            16042 Tuscany Estates Dr Delray Beach, FL 33446, USA
          </a>
        </section> */}
      </article>
      <article className="text-center mt-10 md:mt-20">
        <Link
          href="https://coaching.rnvntucoaching.com/legal-and-privacy-policy"
          target="_blank"
          className="underline hover:text-blue transition-all ease-in-out duration-300"
        >
          Legal and Privacy Policy
        </Link>
        <p>
          Copyright © 2023 RNVNTU Coaching LLC - All Rights Reserved / Website
          Developed and Designed by{" "}
          <a
            href="https://www.borsosmedia.com/"
            target="_blank"
            className="underline hover:text-blue transition-all ease-in-out duration-300"
          >
            Borsos Media
          </a>
        </p>
      </article>
    </footer>
  );
}
