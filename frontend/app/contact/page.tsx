import CinematicAtmosphere from "@/components/cinematic-atmosphere";
import SendRaven from "@/components/send-raven";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { protagonist, series } from "@/content/character";

export const metadata = {
  title: `The Raven — ${series.title}`,
  description: `Send a raven to ${protagonist.name}, ${protagonist.epithet}.`,
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[var(--stone)]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,36,51,0.14),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 grain" aria-hidden="true" />
      <CinematicAtmosphere letterbox={false} ravens dragons={false} className="fixed" />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <SiteHeader />

        <main className="flex flex-1 flex-col items-center px-6 py-16 sm:px-10 sm:py-20">
          <p className="font-heading text-[0.65rem] tracking-[0.4em] text-[var(--sigil)] uppercase">
            {series.title}
          </p>
          <h1 className="mt-4 font-heading text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-[0.18em] text-[var(--parchment)] uppercase">
            The Raven
          </h1>
          <div className="banner-rule mx-auto mt-6 w-36" aria-hidden="true" />
          <p className="mt-6 max-w-md text-center text-xl text-[var(--parchment-dim)]">
            Allies do not knock. They send a bird with a scroll.
          </p>

          <div className="mt-14 w-full">
            <SendRaven />
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
