import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ markers: false });

export const animateProject = () => {
  const isMobile = window.innerWidth <= 768;

  gsap.utils.toArray(".project-tile").forEach((tile, index) => {
    gsap.from(tile, {
      scrollTrigger: {
        trigger: tile,
        start: "top 85%",
        end: "bottom 15%",
        markers: false,
      },
      opacity: 0,
      y: isMobile ? 30 : 50,
      duration: isMobile ? 0.5 : 0.7,
      delay: index * (isMobile ? 0.08 : 0.12),
      ease: "power2.out",
    });
  });
};
