import {cn} from "@/lib/utils";
import {Playpen_Sans} from "next/font/google";
import { PiArrowBendLeftUpThin } from "react-icons/pi";

const playpen = Playpen_Sans({
  variable: "--font-shadow",
  weight: "300",
  style: "normal",
});

export function Tag() {
  return (
    <div className="relative w-48 h-auto flex items-center justify-center bg-transparent ml-10 gap-0.5">
      {/* Curved arrow */}
      <div className="relative w-full h-full text-zinc-400 ">

      <PiArrowBendLeftUpThin className="w-8 h-8 rotate-[-20deg] " />
      </div>
      {/* Rotated Text */}
      <span
        className={cn(
          `absolute rotate-[-10deg] -translate-y-1 text-zinc-600 font-light, ${playpen.className}`
        )}
      >
        I write clean code.
      </span>
    </div>
  );
}
