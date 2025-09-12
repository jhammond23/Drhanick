import React, { createRef } from "react";
import "./Face.css";
import "./Gallery.css"; // shared card + accent styles

import neckLift1 from "../media/face/neckLift1.png";
import neckLift2 from "../media/face/neckLift2.jpg";
import neckLift3 from "../media/face/neckLift3.png";
import neckLift4 from "../media/face/neckLift4.png";
import faceHeader from "../media/ALH w loops draped patient.jpg";
import earSugeryBefore from "../media/face/earSurgeryBefore.png";
import earSugeryAfter from "../media/face/earSurgeryAfter.png";
import faceLift1Before from "../media/face/1facialRejuvenation-before.jpg";
import faceLift1After from "../media/face/1facialRejuvenation-after.jpg";
import faceLift2Before from "../media/face/faceLift2-before.png";
import faceLift2After from "../media/face/faceLift2-after.png";
import eyeReconstructionBefore from "../media/reconstruction/eyeLidReconstruction-before.png";
// NOTE: double extension looks wrong; verify actual filename (.png or .jpg)
import eyeReconstructionAfter from "../media/reconstruction/eyeLidReconstruction-after.png.jpg";
import noseReconstructionBefore from "../media/reconstruction/noseReconstruction-before.png";
import noseReconstructionAfter from "../media/reconstruction/noseReconstruction-after.png";
import chinBefore from "../media/face/lateralChinBefore.jpg";
import chinAfter from "../media/face/lateralChinAfter.jpg";

const Face = () => {
  const neckLiftRef = createRef();
  const faceLiftRef = createRef();
  const facialImplantsRef = createRef();
  const earSurgeryRef = createRef();
  const earWellRef = createRef();
  const genderAffirmation = createRef();
  const reconstructiveSurgery = createRef();

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 100, behavior: "smooth" });

  return (
    <div className="face-container">
      {/* HERO */}
      <div className="header-section">
        <div className="header-content">
          <h1>Facial Rejuvenation Services</h1>
          <p>
            Offering a comprehensive range of procedures from laser resurfacing
            to facelifts designed to enhance your natural beauty and rejuvenate
            your appearance.
          </p>
          <div className="header-buttons">
            <button onClick={() => scrollToRef(neckLiftRef)}>Neck Lift</button>
            <button onClick={() => scrollToRef(faceLiftRef)}>Facelift</button>
            <button onClick={() => scrollToRef(facialImplantsRef)}>
              Facial Implants
            </button>
            <button onClick={() => scrollToRef(genderAffirmation)}>
              Gender Affirmation
            </button>
            <button onClick={() => scrollToRef(earSurgeryRef)}>
              Ear Surgery
            </button>
            <button onClick={() => scrollToRef(earWellRef)}>EarWell®</button>
            <button onClick={() => scrollToRef(reconstructiveSurgery)}>
              Reconstructive Surgery
            </button>
          </div>
        </div>
        <div className="header-image">
          <img src={faceHeader} alt="SMAS Lift" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="gallery-content">
        {/* ===== Neck Lift ===== */}
        <section
          id="neck-lift"
          ref={neckLiftRef}
          className="gallery-section"
          aria-labelledby="neck-lift-title"
        >
          <div className="section-header">
            <h2 id="neck-lift-title">Neck Lift</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              Rejuvenate your appearance and reduce the signs of aging with an
              expertly performed neck lift. This tightens sagging skin and
              softens neck wrinkles, and can be paired with a facelift or done
              alone.
            </p>

            <div className="procedure-grid two-col">
              <div className="img-slot">
                <img src={neckLift1} alt="Neck lift — before" loading="lazy" />
                <span className="img-badge before">Before</span>
              </div>
              <div className="img-slot">
                <img src={neckLift2} alt="Neck lift — after" loading="lazy" />
                <span className="img-badge after">After</span>
              </div>
            </div>
          </article>
        </section>

        {/* ===== Facelift ===== */}
        <section
          id="face-lift"
          ref={faceLiftRef}
          className="gallery-section"
          aria-labelledby="face-lift-title"
        >
          <div className="section-header">
            <h2 id="face-lift-title">Facelift</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              Reduce visible signs of aging, smooth deep creases, and enhance
              facial contours. Often combined with a neck lift or brow lift for
              balanced results.
            </p>

            <div className="procedure-grid two-col">
              <div className="img-slot">
                <img
                  src={faceLift1Before}
                  alt="Facelift — before"
                  loading="lazy"
                />
                <span className="img-badge before">Before</span>
              </div>
              <div className="img-slot">
                <img
                  src={faceLift1After}
                  alt="Facelift — after"
                  loading="lazy"
                />
                <span className="img-badge after">After</span>
              </div>
            </div>
          </article>
        </section>

        {/* ===== Facial Implants ===== */}
        <section
          id="facial-implants"
          ref={facialImplantsRef}
          className="gallery-section"
          aria-labelledby="facial-implants-title"
        >
          <div className="section-header">
            <h2 id="facial-implants-title">Facial Implants</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              Permanent implants (e.g., chin, cheek) improve facial harmony and
              profile. Chin augmentation is frequently paired with rhinoplasty.
            </p>

            <div className="procedure-grid two-col">
              <div className="img-slot">
                <img src={chinBefore} alt="Chin implant — before" loading="lazy" />
                <span className="img-badge before">Before</span>
              </div>
              <div className="img-slot">
                <img src={chinAfter} alt="Chin implant — after" loading="lazy" />
                <span className="img-badge after">After</span>
              </div>
            </div>
          </article>
        </section>

        {/* ===== Gender Affirmation (no images) ===== */}
        <section
          id="gender-affirmation"
          ref={genderAffirmation}
          className="gallery-section"
          aria-labelledby="gender-affirmation-title"
        >
          <div className="section-header">
            <h2 id="gender-affirmation-title">Gender Affirmation</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              Personalized procedures including tracheal shave, facial
              feminization and masculinization—tailored for both aesthetic
              excellence and personal goals.
            </p>
          </article>
        </section>

        {/* ===== Cosmetic Ear Surgery (no images) ===== */}
        <section
          id="ear-surgery"
          ref={earSurgeryRef}
          className="gallery-section"
          aria-labelledby="ear-surgery-title"
        >
          <div className="section-header">
            <h2 id="ear-surgery-title">Cosmetic Ear Surgery</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              Otoplasty can reposition overly projecting ears. Earlobe repairs
              for scars or tears are usually performed in-office.
            </p>
          </article>
        </section>

        {/* ===== EarWell ===== */}
        <section
          id="ear-well"
          ref={earWellRef}
          className="gallery-section"
          aria-labelledby="ear-well-title"
        >
          <div className="section-header">
            <h2 id="ear-well-title">
              <a
                href="https://www.earwells.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                EarWell®
              </a>
            </h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              Non-surgical infant ear molding for 0–6 weeks. Safely reshapes
              the ear while cartilage is still formable.
            </p>

            <div className="procedure-grid two-col square">
              <div className="img-slot">
                <img src={earSugeryBefore} alt="EarWell — before" loading="lazy" />
                <span className="img-badge before">Before</span>
              </div>
              <div className="img-slot">
                <img src={earSugeryAfter} alt="EarWell — after" loading="lazy" />
                <span className="img-badge after">After</span>
              </div>
            </div>
          </article>
        </section>

        {/* ===== Reconstructive Surgery ===== */}
        <section
          id="reconstructive-surgery"
          ref={reconstructiveSurgery}
          className="gallery-section"
          aria-labelledby="reconstructive-title"
        >
          <div className="section-header">
            <h2 id="reconstructive-title">Reconstructive Surgery</h2>
            <div className="section-accent" />
          </div>

          <article>
            <p className="section-lead">
              Reconstruction after skin cancer excision, trauma, or injury—eye,
              nose, and facial soft tissues.
            </p>

            <div className="procedure-grid two-col">
              <div className="img-slot">
                <img
                  src={eyeReconstructionBefore}
                  alt="Eyelid reconstruction — before"
                  loading="lazy"
                />
                <span className="img-badge before">Before</span>
              </div>
              <div className="img-slot">
                <img
                  src={eyeReconstructionAfter}
                  alt="Eyelid reconstruction — after"
                  loading="lazy"
                />
                <span className="img-badge after">After</span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Face;
