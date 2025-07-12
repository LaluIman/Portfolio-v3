import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateProject = () => {
  // Check if device is mobile
  const isMobile = window.innerWidth <= 768;
  
  gsap.from(".project-tile", {
    scrollTrigger: {
      trigger: ".projects-gallery",
      start: "top 80%",
      end: "bottom 20%",
    },
    opacity: 0,
    y: isMobile ? 30 : 50,
    duration: isMobile ? 0.6 : 0.8,
    ease: "power2.out",
    stagger: isMobile ? 0.1 : 0.15,
    markers: false,
  });
};
