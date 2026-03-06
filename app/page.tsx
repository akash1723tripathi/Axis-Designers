import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Discovery } from "@/components/Discovery";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { FooterReveal } from "@/components/FooterReveal";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <FeaturedProjects />
      <Services />
      <Discovery />
      <About />
      <Clients />
      <Footer />
    </main>
  );
}
