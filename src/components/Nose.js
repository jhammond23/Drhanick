// Nose.jsx
import React, { useRef } from 'react'
import './Nose.css' // Make sure Nose.css includes the same card system as Face.css

import faceHeader from '../media/ALH with patient consultation.jpg'
import rhinoplasty7 from '../media/face/lateralChinBefore2.jpg'
import rhinoplasty8 from '../media/face/lateralChinAfter2.jpg'

const Nose = () => {
  const rhinoplastyRef = useRef()
  const nasalSeptalPerforationRef = useRef()

  const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' })

  // Gallery anchors
  const GALLERY_BASE = '/gallery'
  const GALLERY = {
    rhinoplasty: `${GALLERY_BASE}#face-rhinoplasty`
  }

  return (
    <div className='nose-container face-container' style={{ marginTop: '100px' }}>
      {/* HERO */}
      <div className='header-section'>
        <div className='header-content'>
          <h1>Nose</h1>
          <p>
            Dr. Hanick is a nasal surgery specialist. Her training has allowed her to view the nose as both a critical,
            functioning organ and an important part of a harmonious, attractive face.
          </p>
          <div className='header-buttons'>
            <button onClick={() => scrollToRef(rhinoplastyRef)}>Rhinoplasty</button>
            <button onClick={() => scrollToRef(nasalSeptalPerforationRef)}>Nasal Septal Perforation</button>
          </div>
        </div>
        <div className='header-image'>
          <img src={faceHeader} alt='Consultation' />
        </div>
      </div>

      {/* CONTENT */}
      <div className='face-content'>
        {/* Rhinoplasty */}
        <section
          ref={rhinoplastyRef}
          id='rhinoplasty'
          className='face-card face-card--diagonal'
          aria-labelledby='rhinoplasty-title'
        >
          <div className='face-card__header'>
            <h2 id='rhinoplasty-title'>Rhinoplasty</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            {/* LEFT: Photos (now link to Gallery) */}
            <div className='face-card__media'>
              <div className='face-grid face-grid--two'>
                <a
                  href={GALLERY.rhinoplasty}
                  className='face-thumb face-thumb--link'
                  aria-label='View Rhinoplasty results in Patient Gallery'
                >
                  <img src={rhinoplasty7} alt='Rhinoplasty — before' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--before'>Before</span>
                </a>
                <a
                  href={GALLERY.rhinoplasty}
                  className='face-thumb face-thumb--link'
                  aria-label='View Rhinoplasty results in Patient Gallery'
                >
                  <img src={rhinoplasty8} alt='Rhinoplasty — after' loading='lazy' />
                  <span className='face-thumb__badge face-thumb__badge--after'>After</span>
                </a>
              </div>
            </div>

            {/* RIGHT: Copy */}
            <div className='face-card__copy'>
              <p className='face-card__lead'>
                Rhinoplasty can address both medical and cosmetic needs. For those unhappy with the appearance of their
                nose, Dr. Hanick offers surgery to enhance nasal shape and contour with precise attention to detail.
                Your goals will be discussed in detail and treatment tailored to your specific vision while preserving
                the crucial function of nasal breathing.
              </p>

              <a href={GALLERY.rhinoplasty} className='button button--gallery'>
                View in Patient Gallery
              </a>
            </div>
          </article>
        </section>

        {/* Nasal Septal Perforation */}
        <section
          ref={nasalSeptalPerforationRef}
          id='nasal-septal-perforation'
          className='face-card face-card--diagonal'
          aria-labelledby='nsp-title'
        >
          <div className='face-card__header'>
            <h2 id='nsp-title'>Nasal Septal Perforation Repair</h2>
            <div className='face-card__accent' />
          </div>

          <article className='face-card__cols'>
            <div className='face-card__copy face-card__copy--full'>
              <p className='face-card__lead'>
                A septal perforation may cause whistling, crusting, bleeding, and blockage. After evaluation, surgical
                closure can be an option in many cases. Come in for an evaluation and examination to see if surgery is
                right for you.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Nose