// Face.jsx
import React, { createRef, useState } from 'react'
import './Face.css'

import neckLift1 from '../media/face/neckLift1.png'
import neckLift2 from '../media/face/neckLift2.jpg'
import faceHeader from '../media/ALH w loops draped patient.jpg'
import earSugeryBefore from '../media/face/earSurgeryBefore.png'
import earSugeryAfter from '../media/face/earSurgeryAfter.png'
import faceLift1Before from '../media/face/faceliftlateralbefore1.jpg'
import faceLift1After from '../media/face/faceliftlateralafter1.jpg'
import eyeReconstructionBefore from '../media/reconstruction/eyeLidReconstruction-before.png'
import eyeReconstructionAfter from '../media/reconstruction/eyeLidReconstruction-after.png.jpg'
import chinBefore from '../media/face/lateralChinBefore.jpg'
import chinAfter from '../media/face/lateralChinAfter.jpg'
import tornEarlobeBefore from '../media/face/earRepairBefore.jpg'
import tornEarlobeAfter from '../media/face/earRepairAfter.jpg'

const Face = () => {
  const neckLiftRef = createRef()
  const faceLiftRef = createRef()
  const facialImplantsRef = createRef()
  const earSurgeryRef = createRef()
  const earWellRef = createRef()
  const genderAffirmation = createRef()
  const reconstructiveSurgery = createRef()

  const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' })

  // Gallery anchors (matches the scheme: `${section.id}-${slugify(proc.title)}`)
  const GALLERY_BASE = '/gallery'
  const GALLERY = {
    facelift: `${GALLERY_BASE}#face-facelift-smas`,
    neckLift: `${GALLERY_BASE}#face-neck-lift`,
    chinImplant: `${GALLERY_BASE}#face-chin-implant`,
    earSurgery: `${GALLERY_BASE}#face-otoplasty-ear-surgery`,
    earlobeRepair: `${GALLERY_BASE}#face-torn-earlobe-repair`,
    earWell: `${GALLERY_BASE}#face-earwell-infant-ear-molding`,
    facialReconstruction: `${GALLERY_BASE}#face-facial-reconstruction`
  }

  // ✅ Sensitive reveal (same pattern as Gallery: locked until click, then optional hide)
  const [reconUnlocked, setReconUnlocked] = useState(false)

  const handleReconThumbClick = (e) => {
    // First click: unlock only (do not navigate)
    if (!reconUnlocked) {
      e.preventDefault()
      setReconUnlocked(true)
    }
    // Second click: allowed to navigate to gallery anchor
  }

  const hideRecon = () => setReconUnlocked(false)

  return (
    <div className='face-container'>
      {/* HERO */}
      <div className='header-section'>
        <div className='header-content'>
          <h1>Facial Rejuvenation Services</h1>
          <p>
            Offering a comprehensive range of procedures from laser resurfacing to facelifts designed to enhance your
            natural beauty and rejuvenate your appearance.
          </p>
          <div className='header-buttons'>
            <button onClick={() => scrollToRef(faceLiftRef)}>Facelift</button>
            <button onClick={() => scrollToRef(neckLiftRef)}>Neck Lift</button>
            <button onClick={() => scrollToRef(facialImplantsRef)}>Facial Implants</button>
            <button onClick={() => scrollToRef(earSurgeryRef)}>Ear Surgery</button>
            <button onClick={() => scrollToRef(earWellRef)}>EarWell®</button>
            <button onClick={() => scrollToRef(reconstructiveSurgery)}>Reconstructive Surgery</button>
          </div>
        </div>
        <div className='header-image'>
          <img src={faceHeader} alt='SMAS Lift' />
        </div>
      </div>

      {/* CONTENT */}
      <div className='face-content'>
        {/* ===== Facelift ===== */}
        <section id='face-lift' ref={faceLiftRef} className='face-card face-card--diagonal' aria-labelledby='face-lift-title'>
          <div className='face-card__header'>
            <h2 id='face-lift-title'>Facelift</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <a href={GALLERY.facelift} className='face-thumb face-thumb--link' aria-label='View Facelift results in Patient Gallery'>
                  <img src={faceLift1Before} alt='Facelift — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </a>
                <a href={GALLERY.facelift} className='face-thumb face-thumb--link' aria-label='View Facelift results in Patient Gallery'>
                  <img src={faceLift1After} alt='Facelift — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </a>
              </div>
            </div>

            <div className='face-card__copy'>
              <p className='face-card__lead'>
                Rediscover a more youthful you with an artfully performed facelift. Designed to reduce the visible signs
                of aging, a facelift elevates sagging skin along the jaw line, smoothes out deeper facial creases and
                enhances the overall contour of the face. Often, a facelift is combined with a neck lift or brow lift
                for a balanced aesthetic result.
              </p>

              <a href={GALLERY.facelift} className='button button--gallery'>
                View in Patient Gallery
              </a>
            </div>
          </article>
        </section>

        {/* ===== Neck Lift ===== */}
        <section id='neck-lift' ref={neckLiftRef} className='face-card face-card--diagonal' aria-labelledby='neck-lift-title'>
          <div className='face-card__header'>
            <h2 id='neck-lift-title'>Neck Lift</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <a href={GALLERY.neckLift} className='face-thumb face-thumb--link' aria-label='View Neck Lift results in Patient Gallery'>
                  <img src={neckLift1} alt='Neck lift — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </a>
                <a href={GALLERY.neckLift} className='face-thumb face-thumb--link' aria-label='View Neck Lift results in Patient Gallery'>
                  <img src={neckLift2} alt='Neck lift — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </a>
              </div>
            </div>

            <div className='face-card__copy'>
              <p className='face-card__lead'>
                Rejuvenate your appearance and reduce the signs of aging with an expertly performed neck lift. This
                procedure is designed to tighten sagging skin and reduce wrinkles around the neck area, offering a
                smoother and more youthful contour. A neck lift is often performed to compliment a facelift.
              </p>

              <a href={GALLERY.neckLift} className='button button--gallery'>
                View in Patient Gallery
              </a>
            </div>
          </article>
        </section>

        {/* ===== Facial Implants ===== */}
        <section
          id='facial-implants'
          ref={facialImplantsRef}
          className='face-card face-card--diagonal'
          aria-labelledby='facial-implants-title'
        >
          <div className='face-card__header'>
            <h2 id='facial-implants-title'>Facial Implants</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <a href={GALLERY.chinImplant} className='face-thumb face-thumb--link' aria-label='View Chin Implant results in Patient Gallery'>
                  <img src={chinBefore} alt='Chin implant — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </a>
                <a href={GALLERY.chinImplant} className='face-thumb face-thumb--link' aria-label='View Chin Implant results in Patient Gallery'>
                  <img src={chinAfter} alt='Chin implant — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </a>
              </div>
            </div>

            <div className='face-card__copy'>
              <p className='face-card__lead'>
                Facial implants improve facial harmony and enhance facial contours by augmenting underlying facial bone
                structure. Implants are typically made of silicone and considered permanent. For example, chin implant
                augmentation can enhance the results of rhinoplasty in certain patients (photo). Cheek implants can be
                inserted without an external incision to restore or create optimal volume in the midface.
              </p>

              <a href={GALLERY.chinImplant} className='button button--gallery'>
                View in Patient Gallery
              </a>
            </div>
          </article>
        </section>

        {/* ===== Cosmetic Ear Surgery (now includes Torn Earlobe photos) ===== */}
        <section id='ear-surgery' ref={earSurgeryRef} className='face-card face-card--diagonal' aria-labelledby='ear-surgery-title'>
          <div className='face-card__header'>
            <h2 id='ear-surgery-title'>Torn Ear Lobe Repair</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <a href={GALLERY.earlobeRepair} className='face-thumb face-thumb--link' aria-label='View Earlobe Repair results in Patient Gallery'>
                  <img src={tornEarlobeBefore} alt='Torn earlobe repair — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </a>
                <a href={GALLERY.earlobeRepair} className='face-thumb face-thumb--link' aria-label='View Earlobe Repair results in Patient Gallery'>
                  <img src={tornEarlobeAfter} alt='Torn earlobe repair — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </a>
              </div>
            </div>

            <div className='face-card__copy'>
              <p className='face-card__lead'>Otoplasty can reposition overly projecting ears.</p>
              <p className='face-card__lead'>Earlobe repairs for scars or tears are usually performed in-office.</p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <a href={GALLERY.earlobeRepair} className='button button--gallery'>
                  View in Patient Gallery
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* ===== EarWell ===== */}
        <section id='ear-well' ref={earWellRef} className='face-card face-card--diagonal' aria-labelledby='ear-well-title'>
          <div className='face-card__header'>
            <h2 id='ear-well-title'>
              <a href='https://www.earwells.com/' target='_blank' rel='noopener noreferrer'>
                EarWell®
              </a>
            </h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            <div className='face-card__media'>
              <div className='face-grid face-grid--two face-grid--square'>
                <a href={GALLERY.earWell} className='face-thumb face-thumb--link' aria-label='View EarWell results in Patient Gallery'>
                  <img src={earSugeryBefore} alt='EarWell — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </a>
                <a href={GALLERY.earWell} className='face-thumb face-thumb--link' aria-label='View EarWell results in Patient Gallery'>
                  <img src={earSugeryAfter} alt='EarWell — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </a>
              </div>
            </div>

            <div className='face-card__copy'>
              <p className='face-card__lead'>
                Dr. Hanick is a provider of the{' '}
                <a href='https://www.earwells.com/' target='_blank' rel='noopener noreferrer'>
                  EarWell®
                </a>{' '}
                ear molding system for infants. Non-surgical infant ear molding can be performed until approximately age
                6 weeks. This may be covered by your health insurance. EarWell is a non-invasive, in office procedure
                that Dr. Hanick uses to mold the ear into a symmetric and anatomic shape safely and comfortably while
                the infant’s ear contour can still be changed without surgery.
              </p>

              <a href={GALLERY.earWell} className='button button--gallery'>
                View in Patient Gallery
              </a>
            </div>
          </article>
        </section>

        {/* ===== Reconstructive Surgery ===== */}
        <section
          id='reconstructive-surgery'
          ref={reconstructiveSurgery}
          className='face-card face-card--diagonal'
          aria-labelledby='reconstructive-title'
        >
          <div className='face-card__header'>
            <h2 id='reconstructive-title'>Reconstructive Surgery</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                {/* BEFORE */}
                <a
                  href={GALLERY.facialReconstruction}
                  className={[
                    'face-thumb',
                    'face-thumb--link',
                    'face-thumb--sensitive',
                    reconUnlocked ? 'is-unlocked' : ''
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-label={reconUnlocked ? 'View Reconstruction results in Patient Gallery' : 'Sensitive image. Click to view.'}
                  onClick={handleReconThumbClick}
                >
                  <img src={eyeReconstructionBefore} alt='Eyelid reconstruction — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>

                  {!reconUnlocked ? (
                    <div className='face-thumb__overlay' aria-hidden='true'>
                      <div>
                        <div className='face-thumb__overlayText'>Click to view</div>
                        <div className='face-thumb__overlaySub'>Image may not be suitable for all visitors</div>
                      </div>
                    </div>
                  ) : null}
                </a>

                {/* AFTER */}
                <a
                  href={GALLERY.facialReconstruction}
                  className={[
                    'face-thumb',
                    'face-thumb--link',
                    'face-thumb--sensitive',
                    reconUnlocked ? 'is-unlocked' : ''
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-label={reconUnlocked ? 'View Reconstruction results in Patient Gallery' : 'Sensitive image. Click to view.'}
                  onClick={handleReconThumbClick}
                >
                  <img src={eyeReconstructionAfter} alt='Eyelid reconstruction — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>

                  {!reconUnlocked ? (
                    <div className='face-thumb__overlay' aria-hidden='true'>
                      <div>
                        <div className='face-thumb__overlayText'>Click to view</div>
                        <div className='face-thumb__overlaySub'>Image may not be suitable for all visitors</div>
                      </div>
                    </div>
                  ) : null}
                </a>
              </div>

              {/* Hide button (off the image) */}
              {reconUnlocked ? (
                <div className='face-sensitive-controls'>
                  <button type='button' className='face-sensitive-hide-btn' onClick={hideRecon} aria-label='Hide images'>
                    Hide image
                  </button>
                </div>
              ) : null}
            </div>

            <div className='face-card__copy'>
              <p className='face-card__lead'>Reconstruction after skin cancer excision, trauma, or injury—eye, nose, and facial soft tissues.</p>

              <a href={GALLERY.facialReconstruction} className='button button--gallery'>
                View in Patient Gallery
              </a>
            </div>
          </article>
        </section>

      </div>
    </div>
  )
}

export default Face
