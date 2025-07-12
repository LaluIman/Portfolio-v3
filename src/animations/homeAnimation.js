import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHero = () => {
  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
  });

  gsap.from(".hero-title", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 0.4,
    ease: "power3.out",
  });

  gsap.from(".scroll-down", {
    opacity: 0,
    y: 10,
    duration: 1,
    delay: 1,
    ease: "sine.inOut",
  });

  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top 80%",
      end: "bottom 20%",
    },
    opacity: 0,
    y: 50,
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.15,
  });
  
};
