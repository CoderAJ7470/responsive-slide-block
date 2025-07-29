import { useState } from 'react';
import { slideDataArray } from '../helpers/PhotoData';

import '../styles/slideBlock.css';

const SlideBlock = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleOnClickPrevious = () => {
    if (slideIndex === 0) {
      setSlideIndex(slideDataArray.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleOnClickNext = () => {
    if (slideIndex === slideDataArray.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className='slide-block-wrapper'>
      <div className='slide-items'>
        <div className='slider-buttons-and-text-wrapper'>
          <button
            className='slider-buttons'
            id='prevSlideButton'
            onClick={handleOnClickPrevious}
          >
            <i className='fa-solid fa-arrow-left slider-button-arrows'></i>
          </button>
          <button
            className='slider-buttons'
            id='nextSlideButton'
            onClick={handleOnClickNext}
          >
            <i className='fa-solid fa-arrow-right slider-button-arrows'></i>
          </button>
          <div className='text-wrapper'>
            <h2 className='image-heading'>
              {slideDataArray[slideIndex].heading}
            </h2>
            <p className='image-text'>{slideDataArray[slideIndex].slideText}</p>
          </div>
          <button className='additional-info-button'>
            {slideDataArray[slideIndex].buttonText}
            <i className='fa-solid fa-arrow-right arrow-right'></i>
          </button>
        </div>
        <div className='slider-and-dots-wrapper'>
          <div className='slider-wrapper'>
            {slideDataArray.map((slideDataObject) => (
              <img
                src={slideDataObject.slide}
                alt={slideDataObject.alt}
                key={slideDataObject.key}
                style={{ translate: `${-100 * slideIndex}%` }}
              />
            ))}
          </div>
          <div className='slide-dots-mobile'>
            {slideDataArray.map((_, index) => (
              <button key={index} onClick={() => setSlideIndex(index)}>
                <i className='fa-solid fa-circle'></i>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBlock;
