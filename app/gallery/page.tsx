"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CommonGallery } from "@/components/shared";
import { Footer } from "@/components/shared";

function GalleryContent() {
      const searchParams = useSearchParams();
      const industry = searchParams.get("industry") || undefined;

      return <CommonGallery industry={industry} />;
}

export default function GalleryPage() {
      return (
            <main className="relative min-h-screen">
                  <Suspense>
                        <GalleryContent />
                  </Suspense>
                  <Footer />
            </main>
      );
}
