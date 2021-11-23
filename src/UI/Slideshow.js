
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    '../assets/images/image1.jpg',
    '../assets/images/image2.jpg',
    '../assets/images/image3.jpg',
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade>
                <div className="each-fade  Image">
                    <div className="image-container">
                        <img src={fadeImages[0]} />
                    </div>
                  
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} />
                    </div>
                 
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[2]} />
                    </div>
                  
                </div>
            </Fade>
        </div>
    )
}

export default Slideshow;