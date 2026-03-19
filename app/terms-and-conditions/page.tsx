import { TermsHero, TermsContent } from "@/components/terms";
import { Footer } from "@/components/shared";

export default function TermsAndConditionsPage() {
      return (
            <main className="relative min-h-screen">
                  <TermsHero />
                  <TermsContent />
                  <Footer />
            </main>
      );
}
