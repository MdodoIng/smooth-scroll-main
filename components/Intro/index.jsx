import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const Index = () => {
  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    timeline
      .from(background.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div className="relative w-full flex justify-center">
      <div
        ref={background}
        className="w-full h-[140vh] absolute brightness-[.60]"
      >
        <Image
          src={"/images/background.jpeg"}
          fill
          alt="background image"
          priority
          className="object-cover"
        />
      </div>
      <div className="flex justify-center relative mt-[35vh]">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed=".3"
          className="absolute brightness-[.70] w-[350px] h-[475px]"
        >
          <Image
            src={"/images/intro.png"}
            alt="intro image"
            fill
            priority
            className="object-cover origin-top"
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="text-white text-[7vw] z-[3] text-center whitespace-nowrap"
        >
          SMOOTH SCROLL
        </h1>
      </div>
    </div>
  );
};

export default Index;
