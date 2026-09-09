import { redirect } from "next/navigation";

/** Starring merged into The Arsenal — keep old URL working. */
export default function StarringRedirect() {
  redirect("/cast");
}
