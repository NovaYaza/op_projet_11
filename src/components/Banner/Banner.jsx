import bannerImage from '@assets/images/img_banner.png';
import './Banner.scss';

function Banner({ text }) {
    return (
      <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2>{text}</h2>
      </div>
    );
  }

export default Banner;