import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export function CarouselDemoYourBrain() {
//     const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )
const images = [
  {
    key:0,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20175531.png?updatedAt=1760271958990"
  },
  {
    key:1,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20174711.png?updatedAt=1760271496310"
  },
  {
    key:2,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20175356.png?updatedAt=1760271857370"
  },
  {
    key: 3,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20174938.png?updatedAt=1760271594506"
  },
  {
    key: 4,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20175144.png?updatedAt=1760271727415"
  },
]
  return (
    <Carousel className="w-full mx-7" plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
      <CarouselContent>
        {images.map((imgg, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="rounded-sm">
                <CardContent className="flex  items-center justify-center">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <Image alt="image" src={imgg.link} width={700} height={200} className="w-full h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselDemoMedium() {
//     const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )
const images = [
  {
    key:0,
    link: "https://ik.imagekit.io/mrityunjay/logo-uxpin-merge-npm-packages.png.webp?updatedAt=1762889553318"
  }
]
  return (
    <Carousel className="w-full mx-7" plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
      <CarouselContent>
        {images.map((imgg, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="rounded-sm">
                <CardContent className="flex  items-center justify-center">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <Image alt="image" src={imgg.link} width={700} height={200} className="w-full h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselDemoSummarise() {
//     const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )
const images = [
  {
    key:0,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20182107.png?updatedAt=1760273733512"
  },
  {
    key:1,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20182246.png?updatedAt=1760273731762"
  },
  {
    key:2,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20182318.png?updatedAt=1760273732055"
  },
  {
    key: 3,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20182415.png?updatedAt=1760273737341"
  },
]
  return (
    <Carousel className="w-full mx-7" plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
      <CarouselContent>
        {images.map((imgg, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="rounded-sm">
                <CardContent className="flex  items-center justify-center">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <Image alt="image" src={imgg.link} width={700} height={200} className="w-full h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselDemoSomi() {
//     const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )
const images = [
  {
    key:0,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20182827.png?updatedAt=1760274069439"
  },
  {
    key:1,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20182917.png?updatedAt=1760274055822"
  },
  {
    key:2,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20182849.png?updatedAt=1760274046604"
  },
  {
    key: 3,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20182937.png?updatedAt=1760274051919"
  },
  {
    key: 4,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20182952.png?updatedAt=1760274050807"
  },
]
  return (
    <Carousel className="w-full mx-7" plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
      <CarouselContent>
        {images.map((imgg, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="rounded-sm">
                <CardContent className="flex  items-center justify-center">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <Image alt="image" src={imgg.link} width={700} height={200} className="w-full h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselDemoCult() {
//     const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )
const images = [
  {
    key:0,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20183518.png?updatedAt=1760274360655"
  },
  {
    key:1,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20183504.png?updatedAt=1760274360139"
  },
  {
    key:2,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20183430.png?updatedAt=1760274360884"
  },
  {
    key: 3,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20183535.png?updatedAt=1760274366716"
  },
  {
    key: 4,
    link: "https://ik.imagekit.io/mrityunjay/Screenshot%202025-10-12%20183357.png?updatedAt=1760274360714"
  },
]
  return (
    <Carousel className="w-full mx-7" plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
      <CarouselContent>
        {images.map((imgg, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="rounded-sm">
                <CardContent className="flex  items-center justify-center">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <Image alt="image" src={imgg.link} width={700} height={200} className="w-full h-auto" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}