import React from 'react';
import './Hero.css';
import HeroHeader from './HeroHeader';
import HeroFooter from './HeroFooter';

function Hero () {
    return (
        <div className='hero-container' id="home">
            <HeroHeader />
            <div className="hero-media">
            </div>
            <HeroFooter />
        </div>
    )
}

export default Hero;