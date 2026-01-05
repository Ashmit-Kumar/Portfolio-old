"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function EmailRedirectContactMeButton() {
    const email = 'mrityunjay.tiwari.apd22@itbhu.ac.in'
  return (
    <>
      <Button
        size={"lg"}
        className="rounded-full text-black hover:text-white bg-linear-to-r from-gray-200 to-neutral-200 hover:from-yellow-400 hover:to-slate-900 transform transition duration-700 ease-in-out font-normal mt-8 hover:cursor-pointer"
        onClick={() => (window.location.href = `mailto:${email}`)}
      >
        {" "}
        Contact Me <ArrowRight className="animate-pulse" />
      </Button>
    </>
  );
}
