import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Salar de Atacama",
    src: "salar_de_atacama.jpg",
  },
  {
    title: "Valle de la luna",
    src: "valle_de_la_muerte.jpeg",
  },
  {
    title: "Miscanti Lake",
    src: "miscani_lake.jpeg",
  },
  {
    title: "Miniques Lagoons",
    src: "miniques_lagoon.jpg",
  },
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const imageContainer = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);
  return (
    <div ref={container} className="relative text-white mt-[25vh] p-[10%]">
      <div className="flex h-[700px] justify-between gap-[5%]">
        <div ref={imageContainer} className="relative h-full w-[40%]">
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill
            alt="project image"
            priority
            className="object-cover"
          />
        </div>
        <div className="flex h-full w-[20%] text-[1.6vw]">
          <p>
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and tola
            amaia.
          </p>
        </div>
        <div className="flex h-full w-[20%] items-end text-[1vw]">
          <p>
            Some, like the southern viscacha, vicuña and Darwins rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable.
          </p>
        </div>
      </div>

      <div className="flex flex-col relative mr-[200px]">
        {projects.map((project, index) => (
          <div key={index} onMouseOver={() => {setSelectedProject(index)}} className="w-full text-white uppercase text-[3vw] border-b border-white flex justify-end" >
            <h2 className="m-0 mt-10 mb-5 cursor-default">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
