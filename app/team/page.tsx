import { AboutHero, JourneySoFar, Milestones, WhatWeDo, HowWeWork, WhyAxisDesigners, Team, TeamCulture, Reach } from "@/components/team";
import { Footer } from "@/components/shared";

export default function TeamPage() {
      return (
            <main className="relative min-h-screen">
                  <AboutHero />
                  <WhatWeDo />
                  <HowWeWork />
                  <WhyAxisDesigners />
                  <JourneySoFar />
                  <Milestones />
                  <Team />
                  <TeamCulture />
                  <Reach />
                  <Footer />
            </main>
      );
}
