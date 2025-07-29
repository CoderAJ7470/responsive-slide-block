import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const activeDotElement = document.querySelector(`#dot_${slideIndex}`);

    activeDotElement.classList.add('active-dot');

    return () => activeDotElement.classList.remove('active-dot');
  }, [slideIndex]);

  return (
    <div className='slide-block-wrapper'>
      <div className='slide-items'>
        <div className='slider-buttons-and-text-wrapper'>
          <button
            className='slider-buttons'
            id='prevSlideButton'
            onClick={handleOnClickPrevious}
            tabIndex={0}
            aria-label={`Select to go to the previous slide. Currently viewing slide ${
              slideIndex + 1
            } of ${slideDataArray.length}`}
          >
            <i className='fa-solid fa-arrow-left slider-button-arrows'></i>
          </button>
          <button
            className='slider-buttons'
            id='nextSlideButton'
            onClick={handleOnClickNext}
            tabIndex={0}
            aria-label={`Select to go to the next slide. Currently viewing slide ${
              slideIndex + 1
            } of ${slideDataArray.length}`}
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
          <div
            className='slider-wrapper'
            role='application'
            aria-label='photo slide'
          >
            {slideDataArray.map((slideDataObject) => (
              <img
                src={slideDataObject.slide}
                alt={slideDataObject.alt}
                key={slideDataObject.key}
                style={{ translate: `${-100 * slideIndex}%` }}
              />
            ))}
          </div>
          <div className='slide-dots'>
            {slideDataArray.map((_, index) => (
              <button
                className='slide-dots-button'
                key={index}
                id={`dot_${index}`}
                onClick={() => setSlideIndex(index)}
                tabIndex={0}
                aria-label={`dot ${index + 1}. Showing slide ${
                  slideIndex + 1
                } of ${slideDataArray.length}.`}
              >
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
