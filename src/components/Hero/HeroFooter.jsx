import React from 'react';
import imgSrc from '../../assets/iphone.png';

export default function HeroFooter() {
  return (
    <div className="hero-phone-black">
      <div className="hero-phone-template">
        <img src={imgSrc} className="phone" alt="iphone" />
      </div>
    </div>
  );
}
