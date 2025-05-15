import { useEffect, useState } from 'react';
import Card from '@components/Card/Card.jsx';
import Banner from '@components/Banner/Banner.jsx';
import './Home.scss';

function Home() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error('Erreur chargement JSON :', error));
  }, []);

  return (
    <div className="home-container">
      <Banner text="Chez vous, partout et ailleurs" />

      <section className="cards-container">
        {locations.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            image={logement.cover}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;