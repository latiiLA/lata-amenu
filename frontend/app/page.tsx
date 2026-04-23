import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="m-5">
        <div className="flex flex-row justify-between ">
          <div>Lata</div>
          <div><ModeToggle/></div>
        </div>       
        <h1>Hello</h1>
      </main>
    </div>
  );
}
