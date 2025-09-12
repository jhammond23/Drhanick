// Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Components.css';

const Services = () => {
  return (
    <div className="container service">
      <h1>Services</h1>
      <p>
        At our clinic, we offer a variety of surgical and non-surgical services
        to help you look and feel your best. Choose from the options below to
        learn more about each procedure.
      </p>
      <div className="services-list">
        <Link to="/blepharoplasty" className="services-list-item">
          <h3>Blepharoplasty</h3>
          <p>
            A procedure that removes excess skin, muscle, and fat from the
            upper and lower eyelids.
          </p>
        </Link>
        <Link to="/chinaugmentation" className="services-list-item">
          <h3>Chin Augmentation</h3>
          <p>
            A surgical procedure that reshapes or enhances the size of the chin.
          </p>
        </Link>
        <Link to="/otoplasty" className="services-list-item">
          <h3>Otoplasty</h3>
          <p>
            A surgical procedure that corrects the shape, position, or
            proportion of the external ear.
          </p>
        </Link>
        <Link to="/facelift" className="services-list-item">
          <h3>Face Lift</h3>
          <p>
            A surgical procedure that tightens and removes sagging skin on the
            face and neck.
          </p>
        </Link>
        <Link to="/foreheadbrowlift" className="services-list-item">
          <h3>Forehead and Brow Lift</h3>
          <p>
            A surgical procedure that raises the eyebrows and reduces the
            appearance of forehead wrinkles and frown lines.
          </p>
        </Link>
        <Link to="/medspa" className="services-list-item">
          <h3>Med Spa</h3>
          <p>
            A range of non-surgical treatments and therapies to improve your
            skin's health and appearance.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Services;
