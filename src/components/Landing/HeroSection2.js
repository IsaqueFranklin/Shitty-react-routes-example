import React from 'react';
import { Button } from '../Navigation/Button';
import './HeroSection2.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Buy our cars</h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    More
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Trailer <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
