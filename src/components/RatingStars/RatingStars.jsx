import './RatingStars.scss';

function RatingStars({ rating }) {
  const totalStars = 5;
  const filled = parseInt(rating);

  return (
    <div className="rating-stars">
      {[...Array(totalStars)].map((_, i) => (
        <i
          key={i}
          className={`fa-star ${i < filled ? 'fa-solid' : 'fa-regular'}`}
        ></i>
      ))}
    </div>
  );
}

export default RatingStars;