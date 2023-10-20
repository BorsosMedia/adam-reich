"use client";

import { InstagramWidget } from "./components/InstagramWidget/InstagramWidget";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { CoachingPlans } from "./components/CoachingPlans/CoachingPlans";
import { OneTimePlans } from "./components/OneTimePlans/OneTimePlans";
import { AboutMe } from "./components/AboutMe/AboutMe";
// import { ClientsReviews } from "./components/ClientsReviews/ClientsReviews";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { DiscordSection } from "./components/DiscordSection/DiscordSection";
import { Consultation } from "./components/Consultation/Consultation";
import { InquirySection } from "./components/InquirySection/InquirySection";

export default function Home() {
  return (
    <main className="w-full justify-center text-black">
      <HeroBanner />
      <CoachingPlans />
      <OneTimePlans />
      <InquirySection />
      <Consultation />
      <AboutMe />
      {/* <ClientsReviews /> */}
      <Testimonials />
      <DiscordSection />
      <InstagramWidget />
    </main>
  );
}
