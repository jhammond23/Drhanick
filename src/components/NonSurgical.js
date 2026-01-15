import React, { useRef } from 'react';
import './NonSurgical.css';

import faceHeader from '../media/face/crystal stock face feel mandy hands.jpg';
import co2Before1 from '../media/nonsurgical/co2Before1.png';
import co2After1 from '../media/nonsurgical/co2After1.png';
import coolPeel1 from '../media/nonsurgical/coolPeel-before.jpg';
import coolPeel2 from '../media/nonsurgical/coolPeel-after.png';
import mandy from '../media/mandy by wall.jpg';
import lipFillerBefore from '../media/nonsurgical/lipFiller2Before.png';
import lipFillerAfter from '../media/nonsurgical/lipFiller2After.jpg';

const NonSurgical = () => {
  const coolPeelRef = useRef();
  const co2LaserRef = useRef();
  const fillerRef = useRef();
  const professionalSkinCareRef = useRef();
  const mandyBuieRef = useRef();

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });

  // Gallery anchors (only add buttons where the Gallery actually has a section)
  const GALLERY_BASE = '/gallery';
  const GALLERY = {
    coolPeel: `${GALLERY_BASE}#non-surgical-coolpeel`,
    co2: `${GALLERY_BASE}#non-surgical-co2-laser-resurfacing`,
    filler: `${GALLERY_BASE}#non-surgical-lip-filler`,
  };

  return (
    <div className='non-surgical-container face-container' style={{ marginTop: '100px' }}>
      {/* HERO */}
      <div className='header-section'>
        <div className='header-content'>
          <h1>Non-Surgical Aesthetic Treatments</h1>
          <p>
            Explore our range of non-surgical treatments designed to rejuvenate and enhance your appearance without the need for surgery, all in our comfortable, private treatment room.
          </p>
          <div className='header-buttons'>
            <button onClick={() => scrollToRef(coolPeelRef)}>CoolPeel®</button>
            <button onClick={() => scrollToRef(co2LaserRef)}>CO₂ Laser Resurfacing</button>
            <button onClick={() => scrollToRef(fillerRef)}>Cosmetic Filler</button>
            <button onClick={() => scrollToRef(professionalSkinCareRef)}>Professional Skin Care</button>
            <button onClick={() => scrollToRef(mandyBuieRef)}>Meet Mandy Buie, LPN</button>
          </div>
        </div>
        <div className='header-image'>
          <img src={faceHeader} alt='Consultation' />
        </div>
      </div>

      {/* CONTENT */}
      <div className='face-content'>
        {/* CoolPeel */}
        <section
          ref={coolPeelRef}
          id='coolpeel'
          className='face-card face-card--diagonal'
          aria-labelledby='coolpeel-title'
        >
          <div className='face-card__header'>
            <h2 id='coolpeel-title'>CoolPeel®</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            {/* LEFT: before/after */}
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <div className='face-thumb'>
                  <img src={coolPeel1} alt='CoolPeel — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </div>
                <div className='face-thumb'>
                  <img src={coolPeel2} alt='CoolPeel — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </div>
              </div>
            </div>

            {/* RIGHT: copy */}
            <div className='face-card__copy'>
              <p className='face-card__lead'>
                A fractional CO₂ treatment designed to refresh skin with minimal downtime. Learn more about{' '}
                <a href='https://www.cool-peel.com' target='_blank' rel='noopener noreferrer'>
                  CoolPeel®
                </a>
                .
              </p>

              <a href={GALLERY.coolPeel} className='button button--gallery'>
                View CoolPeel® Results in Patient Gallery
              </a>
            </div>
          </article>
        </section>

        {/* CO₂ Laser Resurfacing */}
        <section
          ref={co2LaserRef}
          id='co2-laser-resurfacing'
          className='face-card face-card--diagonal'
          aria-labelledby='co2-title'
        >
          <div className='face-card__header'>
            <h2 id='co2-title'>CO₂ Laser Resurfacing</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            {/* LEFT: before/after */}
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <div className='face-thumb'>
                  <img src={co2Before1} alt='CO₂ laser resurfacing — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </div>
                <div className='face-thumb'>
                  <img src={co2After1} alt='CO₂ laser resurfacing — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </div>
              </div>
            </div>

            {/* RIGHT: copy */}
            <div className='face-card__copy'>
              <p className='face-card__lead'>
                Fractional CO₂ laser is a gold-standard resurfacing option for sun damage and age-related texture changes. Treatments can be performed in-office with comfort measures, or under sedation when combined with other services.
              </p>
              <p className='face-card__lead'>Example patient photos courtesy of Cartessa Laser.</p>

              <a href={GALLERY.co2} className='button button--gallery'>
                View CO₂ Laser Results in Patient Gallery
              </a>
            </div>
          </article>
        </section>

        {/* Cosmetic Filler */}
        <section
          ref={fillerRef}
          id='cosmetic-filler'
          className='face-card face-card--diagonal'
          aria-labelledby='filler-title'
        >
          <div className='face-card__header'>
            <h2 id='filler-title'>Cosmetic Filler</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            {/* LEFT: before/after */}
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <div className='face-thumb'>
                  <img src={lipFillerBefore} alt='Lip filler — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </div>
                <div className='face-thumb'>
                  <img src={lipFillerAfter} alt='Lip filler — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </div>
              </div>
            </div>

            {/* RIGHT: copy */}
            <div className='face-card__copy'>
              <p className='face-card__lead'>
                Dr. Hanick performs cosmetic filler for a variety of treatment areas, most frequently for lip and midfacial restoration and/or augmentation.
              </p>

              <a href={GALLERY.filler} className='button button--gallery'>
                View Filler Results in Patient Gallery
              </a>
            </div>
          </article>
        </section>

        {/* Professional Skin Care (combined) */}
        <section
          ref={professionalSkinCareRef}
          id='professional-skin-care'
          className='face-card face-card--diagonal'
          aria-labelledby='pro-skin-title'
        >
          <div className='face-card__header'>
            <h2 id='pro-skin-title'>Professional Skin Care</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            <div className='face-card__copy face-card__copy--full'>
              <p className='face-card__lead'>
                Our professional skin care options include <strong>chemical peels</strong>, <strong>microneedling</strong>, and <strong>dermaplaning</strong>—treatments that can improve texture, tone, fine lines, hyperpigmentation, and overall clarity with tailored protocols.
              </p>
              <p className='face-card__lead'>
                These services are commonly paired with a personalized home regimen to help you maintain results between visits.
              </p>
            </div>
          </article>
        </section>

        {/* Mandy (immediately after Professional Skin Care) */}
        <section
          ref={mandyBuieRef}
          id='mandy-buie'
          className='face-card face-card--diagonal'
          aria-labelledby='mandy-title'
        >
          <div className='face-card__header'>
            <h2 id='mandy-title'>Meet Mandy Buie, LPN</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            {/* LEFT: photo */}
            <div className='face-card__media face-card__media--narrow'>
              <div className='face-thumb face-thumb--focus-top'>
                <img src={mandy} alt='Mandy Buie, LPN' loading='lazy' />
              </div>
            </div>

            {/* RIGHT: text */}
            <div className='face-card__copy'>
              <p className='face-card__lead'>
                Mandy is a wonderful asset to the MOENT Facial Plastic Surgery team! She specializes in non-surgical treatments designed to rejuvenate aging skin, helping patients achieve a refreshed, youthful appearance.
              </p>
              <p className='face-card__lead'>
                Her expertise includes PCA professional skincare and chemical peels, microneedling, dermaplaning, and Botox injections. Mandy also supports Dr. Hanick during in-office procedures such as CO₂ laser resurfacing.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default NonSurgical;
