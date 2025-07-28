import photo1 from '../assets/images/photo_1.jpg';
// import photo2 from '../assets/images/photo_2.jpg';

import '../styles/slideBlock.css';

const SlideBlock = () => {
  return (
    <div className='slide-block-wrapper'>
      <div className='slider-buttons-wrapper'>
        <button className='slider-button' id='prevSlideButton'>
          Prev
        </button>
        <button className='slider-button' id='nextSlideButton'>
          Next
        </button>
      </div>
      <div className='image-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi
          tempora iste nesciunt illo. Ex recusandae officia impedit. Repellat
          sapiente quidem animi in laborum nisi iure saepe, dolore perferendis
          nemo praesentium sunt, ipsum error eum dolores, magni optio sint
          mollitia.
        </p>
      </div>
      <div className='slider-wrapper'>
        <img src={photo1} alt='test photo' />
      </div>
    </div>
  );
};

export default SlideBlock;
