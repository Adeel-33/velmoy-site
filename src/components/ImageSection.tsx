"use client";
import Image from "next/image";
import BigImage1 from "../../public/BigImage1.png";
import BigImage2 from "../../public/BigImage2.png";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ImageSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef || !imageRef) return;
    const tl = gsap.to(imageRef.current, {
      scale: 2,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <>
      <div
        ref={containerRef}
        className="w-full flex items-center justify-center h-32 sm:h-44 md:60 lg:h-96 z-70"
      >
        <div ref={imageRef} className="w-[40%] h-[40%] ">
          <Image src={BigImage2} alt="big image" />
        </div>
      </div>
    </>
  );
};
export default ImageSection;
