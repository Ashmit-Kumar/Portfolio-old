import React from "react";
import Link from "next/link";
import {ArrowRight, CloudLightning, CloudLightningIcon} from "lucide-react";
import Image from "next/image";
import {TextEffect} from "@/components/motion-primitives/text-effect";
import {Variants} from "motion/react";
import {AnimatedGroup} from "@/components/motion-primitives/animated-group";
import {LogoCloud} from "./infintie-slider";
import {InfiniteSlider} from "@/components/motion-primitives/infinite-slider";
import {Button} from "../ui/button";
import {
  Playpen_Sans,
  Roboto,
  Roboto_Mono,
  Rubik,
  Ubuntu,
} from "next/font/google";
import {cn} from "@/lib/utils";
import ShimmerText from "./name";
import {RiNextjsFill, RiReactjsFill, RiTailwindCssFill} from "react-icons/ri";
import {SiExpress, SiPostgresql} from "react-icons/si";
import {BiLogoPostgresql} from "react-icons/bi";
import {AppleStyleDock} from "./tech-stack";
import {FaGripLinesVertical} from "react-icons/fa";
import {TbMinusVertical} from "react-icons/tb";
import PulseDot from "./flicker-badge";
import EmailRedirectContactMeButton from "./email-redirect-button";

const transitionVariants: {item: Variants} = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const playpen = Playpen_Sans({
  variable: "--font-shadow",
  weight: "300",
  style: "normal",
});

const roboto = Rubik({
  variable: "--font-shadow",
  weight: "300",
  style: "normal",
});

const ubuntu = Ubuntu({
  variable: "--font-shadow",
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

const rubik = Rubik({
  variable: "--font-shadow",
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export default function HeroSection({projectsLink} : {projectsLink : string}) {
  return (
    <>
      <main className="overflow-hidden">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
          >
            <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
            <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
            <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          </div>

          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
            >
              <h1></h1>
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div
              aria-hidden
              className="absolute inset-0 -mx-4 rounded-3xl p-3 z-0 pointer-events-none mt-28 w-4/5 justify-self-center h-auto bg-transparent"
            >
              <div className="relative flex bg-transparent overflow-hidden">
                {/* subtle radial overlay */}
                <div className="bg-radial-[at_99%_5%] to-background z-1 -inset-17 absolute from-transparent to-73% rounded-r-2xl" />
              </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 ">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0 flex flex-col ">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="/contact"
                    className="hover:bg-background dark:hover:border-t-border bg-white group mx-auto px-4 flex w-fit items-center gap-4 rounded-full border p-1 pl-4  transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm flex gap-2 items-center justify-center">
                      <div className="relative w-3 h-3 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-in z-10 absolute justify-self-center"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-300 animate-[ping_1.5s_ease-in-out_infinite] absolute justify-self-center"></div>
                      </div>

                      <div className="flex items-center gap-0.5">
                        5+ Projects Completed{" "}
                      </div>
                    </span>
                    {/* <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span> */}

                    {/* <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"> */}
                    {/* <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span> */}
                    {/* </div>
                    </div> */}
                  </Link>
                </AnimatedGroup>

                {/* <TextEffect
                                      preset="fade-in-blur"
                                      speedSegment={0.3}
                                      as="h1"
                                      className={cn(`mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem], ${roboto.className}`)}> */}
                <ShimmerText
                  text="Mrityunjay Tiwari"
                  className={cn(
                    `mx-auto mt-8 max-w-4xl text-balance font-normal text-5xl md:text-7xl lg:mt-6 pb-4 xl:text-[5.25rem], ${ubuntu.className}`
                  )}
                />
                {/* </TextEffect> */}
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className={cn(`mx-auto max-w-2xl text-balance text-lg mt-0.5, ${rubik.variable} font-[300]`)}
                >
                  {`I'm currently 4th year undergrad at IIT(BHU), Varanasi.`}
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className={cn(`mx-auto max-w-2xl text-lg text-nowrap, ${rubik.variable} font-[300]`)}
                >
                  {`I have expertise in crafting beautiful websites with scalable and complex backend !`}
                </TextEffect>
                <div className="mt-5 space-x-4">
                  <Link href={""}>
                    <EmailRedirectContactMeButton />
                  </Link>
                  <Link href={projectsLink}>
                    <Button
                      size={"lg"}
                      className="rounded-full text-white bg-linear-to-r from-slate-700 to-zinc-400 hover:from-yellow-400 hover:to-slate-900 transform transition duration-700 ease-in-out font-normal mt-8"
                    >
                      {" "}
                      View Projects <ArrowRight className="animate-pulse" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* What we offer */}

            <div className="mt-10 text-center justify-self-center gap-2.5 flex flex-col">
              {/* <LogoCloud /> */}
              {/* <RiNextjsFill className="w-7 h-7" />
              <RiReactjsFill className="w-7 h-7" />
              <RiTailwindCssFill className="w-7 h-7" />
              <SiExpress className="w-7 h-7" />
              <BiLogoPostgresql className="w-7 h-7" /> */}
              <h1 className="text-sm text-zinc-600 mb-1">My Tech Stack : </h1>
              <AppleStyleDock />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
