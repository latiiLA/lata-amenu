"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeRevealProvider } from "@/components/theme-reveal";
import RealmChrome from "@/components/realm-chrome";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="winter"
      enableSystem={false}
      themes={["fire", "winter"]}
      disableTransitionOnChange
      storageKey="seat-realm"
    >
      <ThemeRevealProvider>
        <RealmChrome />
        {children}
      </ThemeRevealProvider>
    </ThemeProvider>
  );
}
