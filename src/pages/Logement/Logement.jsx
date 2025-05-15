import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '@components/Carousel/Carousel.jsx';
import TagList from '@components/TagList/TagList.jsx';
import RatingStars from '@components/RatingStars/RatingStars.jsx';
import HostProfile from '@components/HostProfile/HostProfile.jsx';
import Collapse from '@components/Collapse/Collapse.jsx';
import './Logement.scss';

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch('/logements.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        if (!found) {
          navigate('/not-found'); // Redirige si ID invalide
        } else {
          setLogement(found);
        }
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données :', error);
        navigate('/not-found');
      });
  }, [id, navigate]);

  if (!logement) return null;

  const {
    title,
    location,
    description,
    equipments,
    tags,
    rating,
    host,
    pictures
  } = logement;

  return (
    <div className="logement-page">
      <Carousel pictures={pictures} />

      <div className="logement-header">
        <div className="left">
          <h1>{title}</h1>
          <p className="location">{location}</p>
          <TagList tags={tags} />
        </div>

        <div className="right">
          <HostProfile host={host} />
          <RatingStars rating={rating} />
        </div>
      </div>

      <div className="logement-collapse">
        <div className="collapse-column">
          <Collapse title="Description">{description}</Collapse>
        </div>
        <div className="collapse-column">
          <Collapse title="Équipements">
            <ul>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Logement;
