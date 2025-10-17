import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ markers: false });

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
    duration: 1.2,
    delay: 1,
    ease: "power2.out",
  });

  gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        markers: false,
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: index * 0.1,
      ease: "power2.out",
    });
  });
};
