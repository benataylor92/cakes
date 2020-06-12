import React from 'react'
import { Slide } from 'react-slideshow-image';

import '../HomePageComponents/slideShowComponent.css';

function SlideShowComponent() {

    const properties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: true,
        onChange: (oldIndex, newIndex) => {
          console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
      }

    return (
        <div className="slide-container">
              <Slide {...properties}>
                <div className="each-slide1">
                    <span>Cook 1</span>
                </div>
                <div className="each-slide2">
                    <span>Cook 2</span>
                </div>
                <div className="each-slide3">
                    <span>Cook 3</span>
                </div>
              </Slide>
        </div>
    )
}

export default SlideShowComponent;