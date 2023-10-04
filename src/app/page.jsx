"use client";

import styles from "./page.module.css";
import { InstagramWidget } from "./components/InstagramWidget/InstagramWidget";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <main className="w-full justify-center text-black">
      <HeroBanner />
      <article className="px-[10vw] py-[5vh]">
        {/* <InstagramWidget /> */}
      </article>
    </main>
  );
}
