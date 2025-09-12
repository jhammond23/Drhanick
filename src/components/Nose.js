import React, { useRef } from "react";
import "./Nose.css";
import "./Gallery.css"; // shared card + grid styles

import faceHeader from "../media/ALH with patient consultation.jpg";
import rhinoplasty7 from "../media/nose/rhino2-before.png";
import rhinoplasty8 from "../media/nose/rhino2-after.png";
// If you want more cases, import and add them below

const Nose = () => {
  const rhinoplastyRef = useRef();
  const nasalSeptalPerforationRef = useRef();

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 100, behavior: "smooth" });

  return (
    <div className="nose-container" style={{ marginTop: "100px" }}>
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
      <div className="gallery-content">
        {/* Rhinoplasty */}
        <section
          ref={rhinoplastyRef}
          id="rhinoplasty"
          className="gallery-section"
          aria-labelledby="rhinoplasty-title"
        >
          <div className="section-header">
            <h2 id="rhinoplasty-title">Rhinoplasty</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              Rhinoplasty can address both medical and cosmetic needs. If you struggle
              with nasal breathing, surgery may improve airflow. For cosmetic goals,
              Dr. Hanick refines nasal shape and contour with precise, natural-looking results.
            </p>

            {/* Photos left, text right comes from shared CSS */}
            <div className="procedure-grid two-col">
              <div className="img-slot">
                <img src={rhinoplasty7} alt="Rhinoplasty — case 2, before" loading="lazy" />
                <span className="img-badge before">Before</span>
              </div>
              <div className="img-slot">
                <img src={rhinoplasty8} alt="Rhinoplasty — case 2, after" loading="lazy" />
                <span className="img-badge after">After</span>
              </div>
            </div>
          </article>
        </section>

        {/* Nasal Septal Perforation */}
        <section
          ref={nasalSeptalPerforationRef}
          id="nasal-septal-perforation"
          className="gallery-section"
          aria-labelledby="nsp-title"
        >
          <div className="section-header">
            <h2 id="nsp-title">Nasal Septal Perforation Repair</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              A septal perforation may cause whistling, crusting, bleeding, and blockage.
              After evaluation, surgical closure can be an option in many cases. Come in to
              see if surgery is right for you.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Nose;
