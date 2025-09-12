import React, { useRef } from "react";
import "./Eyes.css";
import "./Gallery.css"; // shared card styles
import faceHeader from "../media/face/mandy and ALH draped patient alh loopsShortened.jpg";

const Eyes = () => {
  const blepharoplastyRef = useRef();
  const browLiftRef = useRef();

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 100, behavior: "smooth" });

  return (
    <div className="eyes-container face-container" style={{ marginTop: "100px" }}>
      {/* HERO */}
      <div className="header-section">
        <div className="header-content">
          <h1>Eyes</h1>
          <p>
            Enhance your eyes with our specialized procedures. We offer
            blepharoplasty to rejuvenate eyelids and brow lifts to restore a youthful,
            alert look. Achieve brighter, more expressive eyes with our expert care.
          </p>
          <div className="header-buttons">
            <button onClick={() => scrollToRef(blepharoplastyRef)}>Blepharoplasty</button>
            <button onClick={() => scrollToRef(browLiftRef)}>Brow Lift</button>
          </div>
        </div>
        <div className="header-image">
          <img src={faceHeader} alt="Consultation" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="gallery-content">
        {/* Blepharoplasty */}
        <section
          ref={blepharoplastyRef}
          id="blepharoplasty"
          className="gallery-section"
          aria-labelledby="bleph-title"
        >
          <div className="section-header">
            <h2 id="bleph-title">Blepharoplasty</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              Blepharoplasty refers to surgery on the upper or lower eyelids. Because eyelid
              skin is thin and sun-exposed, it often ages faster than other facial areas.
              When the upper lid impedes peripheral vision, surgery can be medically
              necessary—and it also rejuvenates the eyes for a more open, rested look.
            </p>
            <p className="section-lead">
              If your eyes appear older or more tired than you feel, blepharoplasty may help.
            </p>
          </article>
        </section>

        {/* Brow Lift */}
        <section
          ref={browLiftRef}
          id="brow-lift"
          className="gallery-section"
          aria-labelledby="brow-title"
        >
          <div className="section-header">
            <h2 id="brow-title">Brow Lift</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              The brow/forehead often shows age first—brows can descend and feel heavy on the
              eyelids. A brow lift repositions the tissues to restore openness and symmetry.
            </p>
            <p className="section-lead">
              Techniques (endoscopic, temporal, etc.) are chosen for your anatomy and goals,
              and can be combined with facelift techniques for balanced rejuvenation.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Eyes;
