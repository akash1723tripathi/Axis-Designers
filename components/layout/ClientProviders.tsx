"use client";

import { PageTransitionProvider } from "@/components/layout/PageTransition";

export const ClientProviders = ({ children }: { children: React.ReactNode }) => {
      return <PageTransitionProvider>{children}</PageTransitionProvider>;
};
