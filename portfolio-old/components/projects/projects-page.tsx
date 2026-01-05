import { cn } from "@/lib/utils";
import { BrainCard, CultCouncil, MediumCard, SomiConveyorBelt, SummarizeCard, YourBrainCard } from "./project-card";
import TypewriterTitle from "./project-title";

export default function ProjectPage() {
  return(
    <section className={cn(`min-h-screen flex flex-col justify-center items-center mt-20 mb-16 relative`)}>
      {/* <h1 className="mb-10">Selected Projects</h1> */}
      <TypewriterTitle />
      <div className="max-w-[950px]  px-4 sm:px-8 md:px-0 mx-20 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-28 gap-y-14 place-items-center">
        <BrainCard />
        <SummarizeCard />
        <MediumCard />
        <SomiConveyorBelt />
        <CultCouncil />
      </div>
    </section>
  )
}