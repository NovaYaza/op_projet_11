import { Link } from 'react-router-dom';
import logo from '@assets/images/LOGO.png';
import './Header.scss';

function Header() {
  return (
    <header className="site-header">
      <Link to="/">
        <img src={logo} alt="Kasa" className="logo" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;