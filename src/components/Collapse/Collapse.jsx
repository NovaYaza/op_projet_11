import { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggle}>
        <h3>{title}</h3>
        <i className={`fa-solid fa-chevron-up icon-chevron ${isOpen ? 'rotated' : ''}`}></i>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;