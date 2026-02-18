import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Discovery } from "@/components/Discovery";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-neutral-950 min-h-screen">
      <Hero />
      <FeaturedProjects />
      <About />
      <Discovery />
      <Services />
      <Clients />
      <Footer />
    </main>
  );
}
