import React from 'react';
import './Modal.css';

const Modal = ({ hero, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={hero.image_url} alt={hero.name} className="modal-hero-image" />
        <h2 className="modal-hero-name">{hero.name}</h2>
        <p className="modal-hero-description">{hero.description}</p>
      </div>
    </div>
  );
};

export default Modal;

