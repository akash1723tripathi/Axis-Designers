import { Hero, FeaturedProjects, Services, About, Discovery, Clients } from "@/components/home";
import { Footer } from "@/components/shared";

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
