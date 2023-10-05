"use client";

import styles from "./page.module.css";
import { InstagramWidget } from "./components/InstagramWidget/InstagramWidget";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { CoachingPlans } from "./components/CoachingPlans/CoachingPlans";
import { OneTimePlans } from "./components/OneTimePlans/OneTimePlans";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { ClientsReviews } from "./components/ClientsReviews/ClientsReviews";
import { DiscordSection } from "./components/DiscordSection/DiscordSection";
import { Consultation } from "./components/Consultation/Consultation";

export default function Home() {
  return (
    <main className="w-full justify-center text-black">
      <HeroBanner />
      <CoachingPlans />
      <OneTimePlans />
      <Consultation />
      <AboutMe />
      <ClientsReviews />
      <DiscordSection />
      <article className="px-[10vw] py-[5vh]">
        {/* <InstagramWidget /> */}
      </article>
    </main>
  );
}
