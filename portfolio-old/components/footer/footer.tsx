import {Ubuntu} from "next/font/google";
import {Tag} from "./tag";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Github, Linkedin, Twitter} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";

const ubuntu = Ubuntu({
  variable: "--font-shadow",
  weight: ["300", "400", "500", "700"],
  style: "normal",
});

export default function Footer() {
  return (
    <footer className="min-h-1/5 pt-12 pb-8 w-full bg-zinc-100/50 border-t  relative flex justify-center items-center flex-col">
      <h1 className={cn(`text-3xl md:text-4xl, ${ubuntu.className}`)}>
        Mrityunjay Tiwari
      </h1>
      <div className="ml-40">
        <Tag />
      </div>
      <div className="flex gap-7 mt-5">
        <Link href={"https://x.com/mrityunjay_18"} target="_blank">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-gray-600 hover:cursor-pointer">
                <Twitter height={18} width={18} />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Twitter</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link href={"https://github.com/mrityunjay-tiwari"} target="_blank">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-gray-600 hover:cursor-pointer">
                <Github height={18} width={18} />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <Link href={"https://www.linkedin.com/in/mrityunjay-tiwari-a81275190/"} target="_blank">
          <Tooltip>
            <TooltipTrigger>
              <span className="text-gray-600 hover:cursor-pointer">
                <Linkedin height={18} width={18} />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </Link>
      </div>
      <h1 className={cn(`text-sm text-gray-500 mt-5 font-extralight`)}>
        © Mrityunjay Tiwari
      </h1>
      {/* <div className="flex gap-4 mt-1">
        <h1 className={cn(`text-sm text-gray-500 font-extralight flex items-center gap-0.5`)}>
        <Mail width={11} height={11} /> mrityunjay.tiwari.apd22@itbhu.ac.in
      </h1>
      <h1 className={cn(`text-sm text-gray-500 font-extralight flex items-center gap-0.5`)}>
        <Phone width={11} height={11} /> +91 8340691783
      </h1>
      </div> */}
    </footer>
  );
}
