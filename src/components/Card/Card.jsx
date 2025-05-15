import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ id, title, image }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </Link>
  );
}

export default Card;