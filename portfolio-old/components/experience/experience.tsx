import {cn} from "@/lib/utils";
import TypewriterExpitle from "./experience-title";
import { ArrowLeft } from "lucide-react";
import { IoIosArrowForward } from "react-icons/io";

function CornerPlus() {
  return (
    <>
      <div className="absolute top-28 left-0 w-4 h-4 -translate-[1px] border-t border-l border-zinc-200 after:content-['+'] after:absolute after:-top-[15px] after:-left-1.5 after:text-zinc-300 after:text-lg after:font-extralight"></div>
      <div className="absolute top-28 right-0 w-4 h-4 -translate-[1px] translate-x-[1px] border-t border-r border-zinc-200 after:content-['+'] after:absolute after:-top-[15px] after:-right-[6.5px] after:text-zinc-300 after:text-lg after:font-extralight"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b translate-[1.5px] -translate-x-[1.5px] border-l border-zinc-200 after:content-['+'] after:absolute after:-bottom-[14px] after:-left-[6px] after:text-zinc-300 after:text-lg after:font-extralight"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r translate-[1.5px] border-zinc-200 after:content-['+'] after:absolute after:-bottom-[14px] after:-right-[6.5px] after:text-zinc-300 after:text-lg after:font-extralight"></div>
    </>
  );
}

export default function Experience() {
  return (
    <>
      <section  
        className={cn(
          `min-h-1/2 md:w-[63%] w-[80%] justify-self-center flex flex-col justify-center items-center mt-20 mb-16 relative`
        )}
      >
        <TypewriterExpitle />
        <CornerPlus />
        <div className="border w-full">
          <div className="w-full  h-auto p-0.5 md:p-2 bg-slate-50/50 overflow-hidden">
            <h1 className="ml-2 md:ml-8 text-left text-base md:text-xl lg:text-2xl capitalize pt-2 md:pt-4 tracking-[-0.015em] text-black font-normal md:text-nowrap">
              Education :
            </h1>
            <div className="flex-col md:flex md:flex-row items-baseline gap-1 text-nowrap"></div>
            <h1 className="max-w-80 mx-2 md:mx-8 capitalize tracking-[-0.015em] text-black font-light">
              4th Year @ IIT(BHU) Varanasi, India
            </h1>
          </div>
            <div className="max-w-[52rem] h-[0.5px] bg-neutral-300 mx-10 mt-1"></div>
          <div className="w-full  h-auto p-0.5 md:p-2 md:pt-1 bg-slate-50/50 overflow-hidden">
            <h1 className="ml-2 md:ml-8 text-left text-base md:text-xl lg:text-2xl capitalize pt-2 md:pt-4 tracking-[-0.015em] text-black font-normal md:text-nowrap">
              Experience :
            </h1>
            <div className="flex-col md:flex md:flex-row items-baseline gap-1 text-nowrap">
              <h1 className="ml-2 md:ml-8 text-left text-base md:text-lg lg:text-xl capitalize pt-1 md:pt-2 tracking-[-0.015em] text-black font-normal md:text-nowrap">
                <span className="hidden md:inline-flex">
                  Artificial Financial Intelligence
                </span>{" "}
                <span className="inline md:hidden">AFI</span> (ChainRisk){" "}
              </h1>
              <h1 className="mt-0 ml-2 md:ml-0 text-left text-balance text-base capitalize tracking-[-0.015em] text-black font-light">
                (DeFi Web3 StartUp) :
              </h1>
            </div>
            <h1 className="max-w-80 mx-2 md:mx-8 text-left text-sm md:text-lg capitalize tracking-[-0.015em] text-black font-light">
              Product Intern :{" "}
            </h1>
            <div className="mt-1 mx-8 mb-4">
              <ul className="font-extralight">
                <li className="flex items-center">
                  <IoIosArrowForward className="w-3 h-3 text-gray-400" />Designed a gamification model using tokenomics, referrals, and
                  leaderboards to boost user engagement.
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward className="w-3 h-3 text-gray-400" />Mapped user journey, designed staking-based incentives, &
                  analyzed the ecosystem tobuild a gamified model.
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward className="w-3 h-3 text-gray-400" />Designed layered tokenomics with on-chain leaderboards,
                  referral multipliers, and rewards to boost retention.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
