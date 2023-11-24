import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { CoachingPlans } from "./components/CoachingPlans/CoachingPlans";
import { OneTimePlans } from "./components/OneTimePlans/OneTimePlans";
import { Bloodwork } from "./components/Bloodwork/Bloodwork";
import { InquirySection } from "./components/InquirySection/InquirySection";
import { Consultation } from "./components/Consultation/Consultation";
import { AboutMe } from "./components/AboutMe/AboutMe";
// import { ClientsReviews } from "./components/ClientsReviews/ClientsReviews";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { DiscordSection } from "./components/DiscordSection/DiscordSection";
import { InstagramWidget } from "./components/InstagramWidget/InstagramWidget";

export default function Home() {
  return (
    <main className="w-full justify-center text-black">
      <HeroBanner />
      <CoachingPlans />
      <OneTimePlans />
      <Bloodwork />
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
