import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Discovery } from "@/components/Discovery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-neutral-950 min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <Discovery />
      <Services />
      <Footer />
    </main>
  );
}
