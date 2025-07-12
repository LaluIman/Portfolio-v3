import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Footer() {
    const textRef = useRef();
    const socialsRef = useRef();

    useEffect(() => {
        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 90%',
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
        });

        gsap.from(socialsRef.current, {
            scrollTrigger: {
                trigger: socialsRef.current,
                start: 'top 90%',
            },
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power2.out',
            stagger: 1,
        });
    }, []);


    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-text" ref={textRef}>
                    <p className="footer-subtitle">Like what you see?</p>
                    <h2 className="footer-title">Let’s work together!</h2>
                    <a href="mailto:laluiman468@gmail.com" className="footer-button">
                        Chat with me
                    </a>
                </div>

                <div className="footer-socials" ref={socialsRef}>
                    <a href="https://www.instagram.com/lalui.man/" target="_blank" rel="noreferrer">
                        <img src="../src/assets/instagram.png" alt="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/lalu-iman-abdullah/" target="_blank" rel="noreferrer">
                        <img src="../src/assets/Linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://github.com/LaluIman" target="_blank" rel="noreferrer">
                        <img src="../src/assets/Github.png" alt="github" />
                    </a>
                </div>
            </div>

            <hr />
            <p className="footer-copyright">
                ©2025 Lalu Iman Abdullah Portfolio
            </p>
        </footer>
    )
}

export default Footer