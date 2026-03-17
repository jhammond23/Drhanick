import React, { useRef } from 'react'
import './Eyes.css'
import faceHeader from '../media/ALH with patient consultation.jpg'

// ✅ Brow Lift images
import faceLiftBefore from '../media/face/browliftBefore.png'
import faceLiftAfter from '../media/face/browliftAfter.png'

// blefaroplasty images
import blephBefore from '../media/face/foreheadBefore.png'
import blephAfter from '../media/face/foreheadAfter.png'

const Eyes = () => {
  const blepharoplastyRef = useRef()
  const browLiftRef = useRef()

  const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' })

  // ✅ Gallery anchor updated to match the combined section in Gallery.jsx
  const GALLERY_BASE = '/gallery'
  const GALLERY = {
    browliftAndBleph: `${GALLERY_BASE}#face-browlift-and-blepharoplasty`
  }

  return (
    <div className='eyes-container face-container' style={{ marginTop: '100px' }}>
      {/* HERO */}
      <div className='header-section'>
        <div className='header-content'>
          <h1>Eyes</h1>
          <p>
            Enhance your eyes with our specialized procedures. We offer blepharoplasty to rejuvenate eyelids and brow
            lifts to restore a youthful, alert look. Achieve brighter, more expressive eyes with our expert care.
          </p>
          <div className='header-buttons'>
            <button onClick={() => scrollToRef(blepharoplastyRef)}>Blepharoplasty</button>
            <button onClick={() => scrollToRef(browLiftRef)}>Brow Lift</button>
          </div>
        </div>
        <div className='header-image'>
          <img src={faceHeader} alt='Consultation' />
        </div>
      </div>

      {/* CONTENT */}
      <div className='face-content'>
        {/* Blepharoplasty */}
        <section
          ref={blepharoplastyRef}
          id='blepharoplasty'
          className='face-card face-card--diagonal'
          aria-labelledby='bleph-title'
        >
          <div className='face-card__header'>
            <h2 id='bleph-title'>Blepharoplasty</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            {/* LEFT: Photos */}
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <div className='face-thumb'>
                  <img src={blephBefore} alt='Blepharoplasty — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </div>
                <div className='face-thumb'>
                  <img src={blephAfter} alt='Blepharoplasty — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Copy + gallery link */}
            <div className='face-card__copy'>
              <p className='face-card__lead'>
                Blepharoplasty refers to surgery on the upper or lower eyelids. Because eyelid skin is thin and
                sun-exposed, it often ages faster than other facial areas. When the upper lid impedes peripheral vision,
                surgery can be medically necessary—and it also rejuvenates the eyes for a more open, rested look.
              </p>
              <p className='face-card__lead'>
                If your eyes appear older or more tired than you feel, blepharoplasty may help.
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <a href={GALLERY.browliftAndBleph} className='button button--gallery'>
                  View in Patient Gallery
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* Brow Lift */}
        <section
          ref={browLiftRef}
          id='brow-lift'
          className='face-card face-card--diagonal'
          aria-labelledby='brow-title'
        >
          <div className='face-card__header'>
            <h2 id='brow-title'>Brow Lift</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            {/* LEFT: Photos */}
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <div className='face-thumb'>
                  <img src={faceLiftBefore} alt='Brow lift — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </div>
                <div className='face-thumb'>
                  <img src={faceLiftAfter} alt='Brow lift — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Copy + gallery link */}
            <div className='face-card__copy'>
              <p className='face-card__lead'>
                The brow/forehead often shows age first—brows can descend and feel heavy on the eyelids. A brow lift
                repositions the tissues to restore openness and symmetry.
              </p>
              <p className='face-card__lead'>
                Techniques (endoscopic, temporal, etc.) are chosen for your anatomy and goals, and can be combined with
                facelift techniques for balanced rejuvenation.
              </p>

              <a href={GALLERY.browliftAndBleph} className='button button--gallery'>
                View in Patient Gallery
              </a>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Eyes