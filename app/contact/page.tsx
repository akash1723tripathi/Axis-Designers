import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
      return (
            <main className="relative bg-neutral-950 min-h-screen">
                  <Navbar />
                  <Contact />
                  <Footer />
            </main>
      );
}
