import React from 'react';
import './footer.css';
import { TbBrandFacebook } from 'react-icons/tb';
import { BsInstagram } from 'react-icons/bs';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const footer = () => {
    return (
      <footer>
        <a href="#home" className="footer__logo">
          Abdalla Mansour
        </a>
        <div class="strips">
          <div class="s-one"></div>
          <div class="s-two"></div>
          <div class="s1-one"></div>
          <div class="s1-two"></div>
        </div>
        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#code">Build</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#certificate">Certificate</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100078857436164">
            <TbBrandFacebook />
          </a>
          <a href="https://www.linkedin.com/in/abdalla-mansour-a70026249/">
            <FiLinkedin />
          </a>
          <a href="https://www.instagram.com/3bdallamansour/">
            <BsInstagram />
          </a>
          <a href="https://wa.me/+0201068978663">
            <BsWhatsapp />
          </a>
          <a href="https://github.com/abdalla-mansour">
            <FiGithub />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; ACODIV Tutorials. All rights reserved</small>
        </div>
      </footer>
    );
}

export default footer;