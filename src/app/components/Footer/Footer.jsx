"use client";

import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import phone from "../../../../public/footer/phone.png";
import mail from "../../../../public/footer/mail.png";
// import location from "../../../../public/footer/location.png";
import tiktok from "../../../../public/footer/tiktok.png";
import instagram from "../../../../public/footer/instagram.png";
import x from "../../../../public/footer/x.png";

export function Footer() {
  const infoIcon = "w-[1em] h-auto";
  const socialIcon =
    "w-[1.5em] h-auto hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out";
  const contactInfo =
    "flex items-center gap-5 hover:text-blue transition-all ease-in-out duration-300";

  return (
    <footer className="bg-black text-white p-[2em] text-[0.8em]">
      <article className="grid grid-cols-1 md:grid-cols-11 items-stretch justify-center">
        <Image
          src={logo}
          alt="RNVNTU Coaching LLC Logo"
          className="w-[15em] h-auto md:col-span-5 justify-self-center self-start md:justify-self-end md:self-center"
        />
        <div
          className={`${styles.separator} w-full h-[0.2em] md:w-[0.2em] md:h-full rounded justify-self-center self-center my-10 md:my-0`}
        />
        <section className="flex flex-col justify-evenly items-center md:items-start gap-5 md:col-span-5 justify-self-center self-end md:justify-self-start md:self-stretch">
          {/* <div className={contactInfo}>
            <Image src={phone} alt="phone icon" className={infoIcon} />
            <a href="tel:+15612214840" target="_blank">
              (561) 221-4840
            </a>
          </div>
          <div className={contactInfo}>
            <Image src={mail} alt="email icon" className={infoIcon} />
            <a href="mailto:info@reinventugym.com" target="_blank">
              info@reinventugym.com
            </a>
          </div>
          <div className={contactInfo}>
            <Image src={location} alt="location icon" className={infoIcon} />
            <a href="https://maps.app.goo.gl/6fkzL9TqaV7PPewP9" target="_blank">
              170 NW 20th StBoca Raton, FL 33431
            </a>
          </div> */}
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
          Copyright © 2023 - All Rights Reserved / Website Developed and
          Designed by{" "}
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

// bg-gradient-to-l md:bg-gradient-to-b from-pink to-blue
