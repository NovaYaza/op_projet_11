import { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <i className={`fa-solid fa-chevron-up icon-chevron ${isOpen ? 'rotated' : ''}`}></i>
      </div>
      <div className="collapse-content">
        {isOpen && <div className="collapse-inner">{children}</div>}
      </div>
    </div>
  );
}

export default Collapse;