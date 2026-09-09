"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function RealmWords({ className = "" }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const words =
    mounted && resolvedTheme === "winter" ? "Winter is Coming" : "Fire and Blood";

  return (
    <p className={className}>
      — {words} —
    </p>
  );
}
