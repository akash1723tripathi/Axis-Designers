import { PrivacyHero, PrivacyContent } from "@/components/privacy";
import { Footer } from "@/components/shared";

export default function PrivacyPolicyPage() {
      return (
            <main className="relative min-h-screen">
                  <PrivacyHero />
                  <PrivacyContent />
                  <Footer />
            </main>
      );
}
