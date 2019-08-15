import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: false
}

const Slideshow = () => {
    return (
        <Fade {...fadeProperties}>
            <div className="each-fade">
                <div className="image-container">
                    <img src={require('./images/slide_3.png')} />
                </div>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={require('./images/slide_2.png')} />
                </div>
            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={require('./images/slide_1.PNG')} />
                </div>
            </div>
        </Fade>
    )
}

export default Slideshow