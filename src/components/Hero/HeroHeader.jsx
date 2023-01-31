import React from 'react';
import Logo from '../../assets/logo.png';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { FiFacebook , FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGitlab } from "react-icons/ai";

export default function HeroHeader() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <a href="#home">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div class="strips">
        <div class="s-one"></div>
        <div class="s-two"></div>
        <div class="s1-one"></div>
        <div class="s1-two"></div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          particles: {
            links: {
              color: "#000",
              distance: 50,
              enable: true,
              opacity: 0.05,
              width: 70,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
            },
            shape: {
              type: "cube",
            },
          },
        }}
      />
      <div className="hero-text-section">
        <h1 className="hero-text">I'm Abdalla Mansour Mearn and Full Stack</h1>
      </div>
      <div className="scroll-down">
        <div class="scroll"></div>
        <h3 className="text-scroll">
          <a href="#skills">Scroll Down</a>
        </h3>
      </div>
      <div className="socials">
        <div className="text-socails">
          <div className="links">
            <a
              href="https://www.facebook.com/profile.php?id=100078857436164"
              className="icons"
            >
              <FiFacebook />
            </a>
          </div>
          <div className="links">
            <a
              href="https://www.instagram.com/3bdallamansour/"
              className="icons"
            >
              <BsInstagram />
            </a>
          </div>
          <div className="links">
            <a href="https://github.com/abdalla-mansour" className="icons">
              <AiOutlineGitlab />
            </a>
          </div>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/abdalla-mansour-a70026249/"
              className="icons"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
