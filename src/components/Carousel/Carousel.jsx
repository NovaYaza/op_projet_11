import { useState } from 'react';
import './Carousel.scss';

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % pictures.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  if (pictures.length === 0) return null;

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={prev}><i className="fa-solid fa-chevron-left"></i></button>
          <button className="carousel-button next" onClick={next}><i className="fa-solid fa-chevron-right"></i></button>
        </>
      )}
      <img src={pictures[current]} alt={`Slide ${current + 1}`} />
      {pictures.length > 1 && (
        <span className="carousel-counter">
          {current + 1} / {pictures.length}
        </span>
      )}
    </div>
  );
}

export default Carousel;