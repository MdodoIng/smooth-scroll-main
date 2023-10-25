"use client";

import { useEffect } from "react";
import Intro from "@/components/Intro/index";
import Description from "@/components/Description/index";
import Projects from "@/components/Projects/index";

const Home = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <Intro />
      <Description />
      <Projects />
    </main>
  );
};

export default Home;
