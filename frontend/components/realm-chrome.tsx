"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/** Site-wide frost / fire edge treatment for every page. */
export default function RealmChrome() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[35]" aria-hidden="true">
      {resolvedTheme === "winter" ? (
        <div className="frost-edge" />
      ) : (
        <div className="fire-edge" />
      )}
    </div>
  );
}
