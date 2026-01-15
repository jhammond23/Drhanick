// Nose.jsx
import React, { useRef } from "react";
import "./Nose.css"; // Make sure Nose.css includes the same card system as Face.css

import faceHeader from "../media/ALH with patient consultation.jpg";
import rhinoplasty7 from "../media/nose/rhino2-before.png";
import rhinoplasty8 from "../media/nose/rhino2-after.png";

const Nose = () => {
  const rhinoplastyRef = useRef();
  const nasalSeptalPerforationRef = useRef();

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 100, behavior: "smooth" });

  return (
    <div className="nose-container face-container" style={{ marginTop: "100px" }}>
      {/* HERO */}
      <div className="header-section">
        <div className="header-content">
          <h1>Nose</h1>
          <p>
            Dr. Hanick is a nasal surgery specialist. Her training has allowed her to
            view the nose as both a critical, functioning organ and an important part
            of a harmonious, attractive face.
          </p>
          <div className="header-buttons">
            <button onClick={() => scrollToRef(rhinoplastyRef)}>Rhinoplasty</button>
            <button onClick={() => scrollToRef(nasalSeptalPerforationRef)}>
              Nasal Septal Perforation
            </button>
          </div>
        </div>
        <div className="header-image">
          <img src={faceHeader} alt="Consultation" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="face-content">
        {/* Rhinoplasty */}
        <section
          ref={rhinoplastyRef}
          id="rhinoplasty"
          className="face-card face-card--diagonal"
          aria-labelledby="rhinoplasty-title"
        >
          <div className="face-card__header">
            <h2 id="rhinoplasty-title">Rhinoplasty</h2>
            <div className="face-card__accent" />
          </div>

          <article className="face-card__cols">
            {/* LEFT: Photos */}
            <div className="face-card__media">
              <div className="face-grid face-grid--two">
                <div className="face-thumb">
                  <img src={rhinoplasty7} alt="Rhinoplasty — before" loading="lazy" />
                  <span className="face-thumb__badge face-thumb__badge--before">Before</span>
                </div>
                <div className="face-thumb">
                  <img src={rhinoplasty8} alt="Rhinoplasty — after" loading="lazy" />
                  <span className="face-thumb__badge face-thumb__badge--after">After</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Copy */}
            <div className="face-card__copy">
              <p className="face-card__lead">
                Rhinoplasty can address both medical and cosmetic needs. For those unhappy with the
                appearance of their nose, Dr. Hanick offers surgery to enhance nasal shape
                and contour with precise attention to detail. Your goals will be discussed in
                detail and treatment tailored to your specific vision while preserving the
                crucial function of nasal breathing.
              </p>

              {/* Gallery jump (Rhinoplasty exists in Gallery -> Nose -> Rhinoplasty) */}
              <a href="/gallery#nose-rhinoplasty" className='button button--gallery'>
                View Rhinoplasty Results in Patient Gallery
              </a>
            </div>
          </article>
        </section>

        {/* Nasal Septal Perforation */}
        <section
          ref={nasalSeptalPerforationRef}
          id="nasal-septal-perforation"
          className="face-card face-card--diagonal"
          aria-labelledby="nsp-title"
        >
          <div className="face-card__header">
            <h2 id="nsp-title">Nasal Septal Perforation Repair</h2>
            <div className="face-card__accent" />
          </div>

          <article className="face-card__cols">
            {/* Text-only card spans full width on mobile per CSS */}
            <div className="face-card__copy face-card__copy--full">
              <p className="face-card__lead">
                A septal perforation may cause whistling, crusting, bleeding, and blockage.
                After evaluation, surgical closure can be an option in many cases. Come in for an evaluation and examination to
                see if surgery is right for you.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Nose;
