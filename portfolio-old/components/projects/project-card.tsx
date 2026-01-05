// export default function ProjectsCard() {
//   return (
//     <section className="relative">
//       <div className="h-96 w-[350px] rounded-2xl shadow border bg-white"></div>
//     </section>
//   );
// }

"use client";

import React from "react";
import {WobbleCard} from "../aceternity/wobble-card";
import {Badge} from "../ui/badge";
import {
  CarouselDemoCult,
  CarouselDemoMedium,
  CarouselDemoSomi,
  CarouselDemoSummarise,
  CarouselDemoYourBrain,
} from "./image-carousel";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {Github, LinkIcon} from "lucide-react";
import Link from "next/link";

function CornerPlus() {
  return (
    <>
      <div className="absolute top-0 left-0 w-4 h-4 -translate-[1px] border-t border-l border-zinc-300 after:content-['+'] after:absolute after:-top-[15px] after:-left-1.5 after:text-zinc-300 after:text-lg after:font-extralight"></div>
      <div className="absolute top-0 right-0 w-4 h-4 -translate-[1px] translate-x-[1px] border-t border-r border-zinc-300 after:content-['+'] after:absolute after:-top-[15px] after:-right-[6.5px] after:text-zinc-300 after:text-lg after:font-extralight"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b translate-[1.5px] -translate-x-[1.5px] border-l border-zinc-300 after:content-['+'] after:absolute after:-bottom-[14px] after:-left-[6px] after:text-zinc-300 after:text-lg after:font-extralight"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r translate-[1.5px] border-zinc-300 after:content-['+'] after:absolute after:-bottom-[14px] after:-right-[6.5px] after:text-zinc-300 after:text-lg after:font-extralight"></div>
    </>
  );
}

export function YourBrainCard() {
  return (
    <div className="relative">
      <CornerPlus />

      <WobbleCard containerClassName="col-span-1 min-h-[300px] border bg-linear-to-br from-slate-200/40 to-white/50">
        {/* <Image alt="image" src={'https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'} width={700} height={200} className="w-full h-auto rounded-md" /> */}
        <div className="w-full flex justify-center items-center">
          <CarouselDemoYourBrain />
        </div>
        {/* <div className="w-full flex justify-center items-center"><InfiniteSliderHoverSpeed /></div> */}
        <div className="flex justify-between items-end">
          <h2 className="max-w-80 mx-10 text-left text-balance text-base md:text-xl lg:text-2xl capitalize  pt-4 tracking-[-0.015em] text-black font-normal">
            YourBrain
          </h2>
          <div className="flex gap-2.5 pr-12 mb-2 z-30">
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={"https://github.com/mrityunjay-tiwari/your-brain-be"}
                  target="_blank"
                >
                  <Github className="w-4 h-4" />
                </Link>

                {/* <Button variant="outline">Hover</Button> */}
              </TooltipTrigger>
              <TooltipContent>
                <p>SourceCode</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href={"https://yourbrain.vercel.app/"} target="_blank">
                  <LinkIcon className="w-4 h-4" />
                </Link>
                {/* <Button variant="outline">Hover</Button> */}
              </TooltipTrigger>
              <TooltipContent>
                <p>Live Link</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="max-w-[26rem] h-[0.5px] bg-neutral-300 mx-10"></div>
        <p className="mt-4 mx-10 max-w-[26rem] text-sm text-neutral-900 text-justify font-light">
          Hereby you can save all your YouTube and Twitter links categorically
          with your personal note, further also can search, share, edit or
          delete them.
        </p>
        <div className="mx-10 mt-7 gap-2 flex w-full">
          <Badge variant={"tech"}>React</Badge>
          <Badge variant={"tech"}>Express</Badge>
          <Badge variant={"tech"}>MongoDB</Badge>
          <Badge variant={"tech"}>NodeJS</Badge>
          <Badge variant={"tech"}>TypeScript</Badge>
        </div>
        <div className="mx-10 mt-1 gap-2 flex">
          <Badge variant={"tech"}>Langchain</Badge>
          <Badge variant={"tech"}>TailwindCSS</Badge>
        </div>
        <div className="mx-10 mt-1.5">
          <Badge variant={"tech"}>Full Stack Project</Badge>
        </div>
      </WobbleCard>
    </div>
  );
}

export function BrainCard() {
  return (
    <div className="relative left-0.5 md:left-0">
      <CornerPlus />
      <WobbleCard containerClassName="max-w-[91vw] col-span-1 min-h-[300px] bg-zinc-50/50 border-l border-t">
        {/* <Image alt="image" src={'https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'} width={700} height={200} className="w-full h-auto rounded-md" /> */}
        <div className="w-full flex justify-center items-center">
          <CarouselDemoYourBrain />
        </div>
        {/* <div className="w-full flex justify-center items-center"><InfiniteSliderHoverSpeed /></div> */}

        <div className="-ml-3.5 md:-ml-0">
          <div className="flex justify-between items-end">
            <h2 className="max-w-80 mx-10 text-left text-balance text-base md:text-xl lg:text-2xl capitalize  pt-4 tracking-[-0.015em] text-black">
              YourBrain
            </h2>
            <div className="flex gap-2.5 pr-12 mb-2 z-30">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={"https://github.com/mrityunjay-tiwari/your-brain-be"}
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                  </Link>

                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>SourceCode</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"https://yourbrain.vercel.app/"} target="_blank">
                    <LinkIcon className="w-4 h-4" />
                  </Link>
                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Link</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="max-w-[26rem] h-[0.5px] bg-neutral-300 mx-10"></div>
          <p className="mt-4 mx-10 max-w-[26rem] text-sm text-neutral-900 text-justify font-light">
            Hereby you can save all your YouTube and Twitter links categorically
            with your personal note, further also can search, share, edit or
            delete them.
          </p>
          <div className="mx-10 mt-7 gap-2 flex">
            <Badge variant={"tech"}>React</Badge>
            <Badge variant={"tech"}>Express</Badge>
            <Badge variant={"tech"}>MongoDB</Badge>
            <Badge variant={"tech"}>TypeScript</Badge>
          </div>
          <div className="mx-10 mt-1 gap-2 flex">
            <Badge variant={"tech"}>TailwindCSS</Badge>
            <Badge variant={"tech"}>NodeJS</Badge>
          </div>
          <div className="mx-10 mt-1.5">
            <Badge variant={"tech"}>Full Stack Project</Badge>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
export function MediumCard() {
  return (
    <div className="relative left-0.5 md:left-0">
      <CornerPlus />
      <WobbleCard containerClassName="max-w-[91vw] col-span-1 min-h-[300px] bg-zinc-50/50 border-l border-t">
        {/* <Image alt="image" src={'https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'} width={700} height={200} className="w-full h-auto rounded-md" /> */}
        <div className="w-full flex justify-center items-center">
          <CarouselDemoMedium />
        </div>
        {/* <div className="w-full flex justify-center items-center"><InfiniteSliderHoverSpeed /></div> */}

        <div className="-ml-3.5 md:-ml-0">
          <div className="flex justify-between items-end">
            <h2 className="max-w-80 mx-10 text-left text-balance text-base md:text-xl lg:text-2xl capitalize  pt-4 tracking-[-0.015em] text-black">
              NPM Package 
            </h2>
            <div className="flex gap-2.5 pr-12 mb-2 z-30">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={"https://github.com/mrityunjay-tiwari/medium-info-api"}
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                  </Link>

                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>SourceCode</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"https://www.npmjs.com/search?q=medium-info-api"} target="_blank">
                    <LinkIcon className="w-4 h-4" />
                  </Link>
                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Link</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="max-w-[26rem] h-[0.5px] bg-neutral-300 mx-10"></div>
          <p className="mt-4 mx-10 max-w-[26rem] text-sm text-neutral-900 text-justify font-light">
            {`This npm package let's you fetch all the info (Title, Author's Name, Avatar, 
            Publish Date, Clap, Comments Count etc.) about any Medium article 
            using just the article URL.`}
            Hereby you can save all your YouTube and Twitter links categorically
            with your personal note, further also can search, share, edit or
            delete them.
          </p>
          <div className="mx-10 mt-7 gap-2 flex">
            <Badge variant={"tech"}>Express</Badge>
            <Badge variant={"tech"}>TypeScript</Badge>
            <Badge variant={"tech"}>Cheerio</Badge>
            <Badge variant={"tech"}>Playwright</Badge>
          </div>
          <div className="mx-10 mt-1.5">
            <Badge variant={"tech"}>Backend Project</Badge>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}

export function SummarizeCard() {
  return (
    <div className="relative left-0.5 md:left-0">
      <CornerPlus />
      <WobbleCard containerClassName="max-w-[91vw] col-span-1 min-h-[300px] bg-zinc-50/50 border-l border-t">
        {/* <Image alt="image" src={'https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'} width={700} height={200} className="w-full h-auto rounded-md" /> */}
        <div className="w-full flex justify-center items-center">
          <CarouselDemoSummarise />
        </div>
        {/* <div className="w-full flex justify-center items-center"><InfiniteSliderHoverSpeed /></div> */}

        <div className="-ml-3.5 md:-ml-0">
          <div className="flex justify-between items-end">
            <h2 className="max-w-80 mx-10 text-left text-balance text-base md:text-xl lg:text-2xl capitalize  pt-4 tracking-[-0.015em] text-black">
              Summarize
            </h2>
            <div className="flex gap-2.5 pr-12 mb-2 z-30">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={"https://github.com/mrityunjay-tiwari/summarize"}
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                  </Link>

                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>SourceCode</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={"https://summarize-omega.vercel.app/"}
                    target="_blank"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </Link>
                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Link</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="max-w-[26rem] h-[0.5px] bg-neutral-300 mx-10"></div>
          <p className="mt-4 mx-10 max-w-[26rem] text-sm text-neutral-900 text-justify font-light">
            Hereby simply put your PDF and get quick summary as flash cards in
            one click, also save your summaries on your personal dashboard.
          </p>
          <div className="mx-10 mt-7 gap-2 flex">
            <Badge variant={"tech"}>NextJS</Badge>
            <Badge variant={"tech"}>TypeScript</Badge>
            <Badge variant={"tech"}>PostgreSQL</Badge>
            <Badge variant={"tech"}>Prisma</Badge>
          </div>
          <div className="mx-10 mt-1 gap-2 flex">
            <Badge variant={"tech"}>Langchain</Badge>
            <Badge variant={"tech"}>TailwindCSS</Badge>
            <Badge variant={"tech"}>Motion</Badge>
          </div>
          <div className="mx-10 mt-1.5">
            <Badge variant={"tech"}>Full Stack Project</Badge>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}

export function SomiConveyorBelt() {
  return (
    <div className="relative left-0.5 md:left-0 ">
      <CornerPlus />
      <WobbleCard containerClassName="max-w-[91vw] sm:max-w-none col-span-1 min-h-[300px] bg-zinc-50/50 border-l border-t">
        {/* <Image alt="image" src={'https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'} width={700} height={200} className="w-full h-auto rounded-md" /> */}
        <div className="w-full flex justify-center items-center">
          <CarouselDemoSomi />
        </div>
        {/* <div className="w-full flex justify-center items-center"><InfiniteSliderHoverSpeed /></div> */}
        <div className="-ml-3.5 md:-ml-0">
          <div className="flex justify-between items-end">
            <h2 className="max-w-80 mx-10 text-left text-balance text-base md:text-xl lg:text-2xl capitalize  pt-4 tracking-[-0.015em] text-black">
              Somi Conveyor Belt
            </h2>
            <div className="flex gap-2.5 pr-12 mb-2 z-30">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={"https://github.com/mrityunjay-tiwari/somiinvestor"}
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                  </Link>

                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>SourceCode</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={"https://somiinvestor.vercel.app/"}
                    target="_blank"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </Link>
                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Link</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="max-w-[26rem] h-[0.5px] bg-neutral-300 mx-10"></div>
          <h1 className="mt-4 mx-10 max-w-[26rem] text-sm text-neutral-900 text-justify font-light">
            Hereby I revamped (redesigned and developed) the entire official
            website of Somi Conveyor Belt.
            <div className="text-red-500 text-xs">{`*Currently working on it's responsiveness`}</div>
          </h1>
          <div className="mx-10 mt-7 gap-2 flex">
            <Badge variant={"tech"}>NextJS</Badge>
            <Badge variant={"tech"}>TypeScript</Badge>
            <Badge variant={"tech"}>TailwindCSS</Badge>
            <Badge variant={"tech"}>Motion</Badge>
          </div>
          <div className="mx-10 mt-1.5">
            <Badge variant={"tech"}>Frontend Project</Badge>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}

export function CultCouncil() {
  return (
    <div className="relative left-0.5 md:left-0">
      <CornerPlus />
      <WobbleCard containerClassName="max-w-[91vw] col-span-1 min-h-[300px] bg-zinc-50/50 border-l border-t">
        {/* <Image alt="image" src={'https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20114911.png?updatedAt=1753857136729'} width={700} height={200} className="w-full h-auto rounded-md" /> */}
        <div className="w-full flex justify-center items-center">
          <CarouselDemoCult />
        </div>
        {/* <div className="w-full flex justify-center items-center"><InfiniteSliderHoverSpeed /></div> */}

        <div className="-ml-3.5 md:-ml-0">
          <div className="flex justify-between items-end">
            <h2 className="max-w-80 mx-10 text-left  md:text-xl lg:text-2xl capitalize  pt-4 tracking-[-0.015em] text-black">
              Cultural Council, <span className="text-sm">IIT BHU </span>
            </h2>
            <div className="flex gap-2.5 pr-12 mb-2 z-30">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={"https://github.com/mrityunjay-tiwari/cult-council"}
                    target="_blank"
                  >
                    <Github className="w-4 h-4" />
                  </Link>

                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>SourceCode</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={"https://cult-council-mhwi.vercel.app/"}
                    target="_blank"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </Link>
                  {/* <Button variant="outline">Hover</Button> */}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live Link</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="max-w-[26rem] h-[0.5px] bg-neutral-300 mx-10"></div>
          <p className="mt-4 mx-10 max-w-[26rem] text-sm text-neutral-900 text-justify font-light">
            Hereby I designed and developed the entire website of Cultural
            Council, IIT (BHU), Varanasi.
          </p>
          <div className="mx-10 mt-7 gap-2 flex">
            <Badge variant={"tech"}>React</Badge>
            <Badge variant={"tech"}>JavaScript</Badge>
            <Badge variant={"tech"}>TailwindCSS</Badge>
            <Badge variant={"tech"}>Motion</Badge>
          </div>
          <div className="mx-10 mt-1.5">
            <Badge variant={"tech"}>Frontend Project</Badge>
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
