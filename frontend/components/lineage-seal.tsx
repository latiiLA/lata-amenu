import type { LineageKind, ServiceRole } from "@/content/lineage";

const KIND_LABEL: Record<LineageKind, string> = {
  education: "House of Learning",
  order: "Order of the Forge",
  service: "Appointment",
};

type LineageSealProps = {
  mark: string;
  years: string;
  title: string;
  place: string;
  detail: string;
  kind: LineageKind;
  roles?: ServiceRole[];
};

export default function LineageSeal({
  mark,
  years,
  title,
  place,
  detail,
  kind,
  roles,
}: LineageSealProps) {
  const showRoleLadder = kind === "service" && roles && roles.length > 1;

  return (
    <li className="relative grid gap-6 pl-2 sm:grid-cols-[5.5rem_1fr] sm:gap-10 sm:pl-0">
      <div className="relative flex sm:flex-col sm:items-center">
        <div
          className="lineage-seal relative z-[1] flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[var(--sigil)]/50 bg-[var(--stone-lift)] shadow-[0_0_24px_rgba(143,36,51,0.25)]"
          aria-hidden="true"
        >
          <span className="font-heading text-lg tracking-wide text-[var(--sigil)]">{mark}</span>
          <span className="absolute inset-1 rounded-full border border-[var(--crimson)]/30" />
        </div>
      </div>

      <article className="lineage-scroll relative border border-[var(--sigil)]/20 bg-[linear-gradient(180deg,rgba(26,22,18,0.92),rgba(12,10,9,0.95))] px-6 py-7 sm:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-20 grain" />
        <div className="banner-rule absolute inset-x-6 top-0 h-px w-auto sm:inset-x-8" />

        <p className="font-heading text-[0.65rem] tracking-[0.28em] text-[var(--crimson)] uppercase">
          {KIND_LABEL[kind]} · {years}
        </p>
        <h3 className="font-heading mt-3 text-2xl font-semibold tracking-wide text-[var(--parchment)] sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 text-xl text-[var(--sigil)]">{place}</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--parchment-dim)]">
          {detail}
        </p>

        {showRoleLadder ? (
          <ol className="mt-6 space-y-3 border-t border-[var(--sigil)]/15 pt-5">
            {roles.map((role, i) => (
              <li
                key={role.title}
                className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
              >
                <span className="font-heading text-[0.65rem] tracking-[0.18em] text-[var(--ember)] uppercase">
                  Post {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-[var(--parchment)]">{role.title}</span>
                {role.years ? (
                  <span className="font-heading text-[0.6rem] tracking-[0.14em] text-[var(--parchment-dim)] uppercase">
                    {role.years}
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        ) : null}
      </article>
    </li>
  );
}
