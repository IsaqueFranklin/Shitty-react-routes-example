import React from 'react';
import { Button } from '../Navigation/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Mechanics</h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    SABER MAIS
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    VER TRAILER <i className='far fa-play-circle'></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
