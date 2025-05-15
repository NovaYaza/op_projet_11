import { Link } from 'react-router-dom';
import logo from '@assets/images/LOGO_footer.png';
import './Footer.scss';

function Footer() {
    return (
      <footer className='site-footer'>
        <Link to="/">
          <img src={logo} alt="Kasa" className="logo_footer" />
        </Link>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  
  export default Footer;