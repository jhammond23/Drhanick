// Gallery.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Gallery.css'

/* ---------- Face ---------- */
import earWellBefore from '../media/face/earWellBefore.jpg'
import earWellAfter from '../media/face/earWellAfter.jpg'
import earRepairBefore from '../media/face/earRepairBefore.jpg'
import earRepairAfter from '../media/face/earRepairAfter.jpg'
import facialRejuvenationBefore from '../media/face/1facialRejuvenation-before.jpg'
import facialRejuvenationAfter from '../media/face/1facialRejuvenation-after.jpg'
import faceLiftBefore from '../media/face/faceliftbefore-new.jpg'
import faceLiftAfter from '../media/face/faceliftafter-new.jpg'
import necklift1Before from '../media/face/neckLift1.png'
import necklift1After from '../media/face/neckLift2.jpg'
import necklift2Before from '../media/face/neckLift3.png'
import necklift2After from '../media/face/neckLift4.png'
import earSugeryBefore from '../media/face/earSurgeryBefore.png'
import earSugeryAfter from '../media/face/earSurgeryAfter.png'
import faceLiftLateral from '../media/face/faceliftLateral1.jpg'
import faceLiftLateral2 from '../media/face/faceliftLateral2.jpg'
import faceLiftFrontal from '../media/face/faceliftFrontal.jpg'
import eyeReconstructionBefore from '../media/reconstruction/eyeLidReconstruction-before.png'
import eyeReconstructionAfter from '../media/reconstruction/eyeLidReconstruction-after.png.jpg'
import noseReconstructionBefore from '../media/reconstruction/noseReconstruction-before.png'
import noseReconstructionAfter from '../media/reconstruction/noseReconstruction-after.png'
import lateralChinBefore from '../media/face/lateralChinBefore.jpg'
import lateralChinAfter from '../media/face/lateralChinAfter.jpg'
import frontalChinBefore from '../media/face/frontalChinBefore.png'
import frontalChinAfter from '../media/face/frontalChinAfter.png'
import lateralChinTogether from '../media/face/lateralChinTogether.png'
import faceLift3Before from '../media/face/faceLift3Before.jpg'
import faceLift3After from '../media/face/faceLift3After.jpg'
import frontalRinoBefore2 from '../media/face/frontalChinBefore2.jpg'
import frontalRinoAfter2 from '../media/face/frontalChinAfter2.jpg'
import lateralRinoBefore2 from '../media/face/lateralChinBefore2.jpg'
import lateralRinoAfter2 from '../media/face/lateralChinAfter2.jpg'
import lips3After from '../media/face/lips3After.png'
import lips3Before from '../media/face/lips3Before.png'
import lips2After from '../media/face/lips2After.png'
import lips2Before from '../media/face/lips2Before.png'
import lipsAfter from '../media/face/lipsAfter.png'
import lipsBefore from '../media/face/lipsBefore.png'
import foreheadBefore from '../media/face/foreheadBefore.png'
import foreheadAfter from '../media/face/foreheadAfter.png'
import neckBefore from '../media/face/neckBefore.png'
import neckAfter from '../media/face/neckAfter.png'
import rhino4before from '../media/nose/rhino4-before.png'
import rhino4after from '../media/nose/rhino4-after.png'
import rhino5before from '../media/nose/rhino5-before.png'
import rhino5after from '../media/nose/rhino5-after.png'

/* ---------- Nose ---------- */
import rhino1Before from '../media/nose/rhino1-before.png'
import rhino1After from '../media/nose/rhino1-after.png'
import rhino2Before from '../media/nose/rhino2-before.png'
import rhino2After from '../media/nose/rhino2-after.png'
import rhino3Before from '../media/nose/rhino3-before.png'
import rhino3After from '../media/nose/rhino3-after.png'

/* ---------- Eyes (Brow Lift) ---------- */
import browLiftBefore from '../media/face/browliftBefore.png'
import browLiftAfter from '../media/face/browliftAfter.png'

/* ---------- Non-surgical ---------- */
import coolPeelBefore from '../media/nonsurgical/coolPeel-before.jpg'
import coolPeelAfter from '../media/nonsurgical/coolPeel-after.png'
import co2laserBefore from '../media/nonsurgical/co2Before1.png'
import co2laserAfter from '../media/nonsurgical/co2After1.png'
import lipBefore from '../media/nonsurgical/lipFiller2Before.png'
import lipAfter from '../media/nonsurgical/lipFiller2After.jpg'
import co2Before2 from '../media/nonsurgical/co2Before2.png'
import co2After2 from '../media/nonsurgical/co2After2.png'
import lesionAfter from '../media/nonsurgical/lesionAfter.png'
import lesionBefore from '../media/nonsurgical/lesionBefore.png'
import lesion2Before from '../media/nonsurgical/lesion2Before.jpg'
import lesion2After from '../media/nonsurgical/lesion2After.jpg'
import lesionBeforeAfter from '../media/nonsurgical/lesionBefore&After.jpg'

/* ---------- Non-surgical (Professional Skin Care) ---------- */
import skincare from '../media/nonsurgical/Alex-supine-alh-w-sponge.jpg'

const Gallery = () => {
  const faceRef = useRef(null)
  const eyesRef = useRef(null)
  const nonsurgicalRef = useRef(null)

  const slugify = (str = '') =>
    str
      .toLowerCase()
      .replace(/[®™]/g, '')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

  const TETRA_PRO_URL = 'https://cartessaaesthetics.com/products/tetra-pro'

  const PROC_SLUG_OVERRIDES = {
    'Facelift': 'facelift-smas',
    'Neck Lift': 'neck-lift',
    'Chin Implant': 'chin-implant',
    'EarWell® Infant Ear Molding': 'earwell-infant-ear-molding',
    'Torn Ear Lobe Repair': 'torn-earlobe-repair',
    'Facial Reconstruction': 'facial-reconstruction',
    'Rhinoplasty': 'rhinoplasty',
    'Upper Blepharoplasty': 'upper-blepharoplasty',
    'Lower Blepharoplasty': 'lower-blepharoplasty',
    'Brow Lift': 'brow-lift',
    'CoolPeel®': 'coolpeel',
    'CO₂ Laser Resurfacing': 'co2-laser-resurfacing',
    'Lip Filler (Hyaluronic Acid)': 'lip-filler',
    'Professional Skin Care': 'professional-skin-care'
  }

  const getProcId = (sectionId, procTitle) => `${sectionId}-${PROC_SLUG_OVERRIDES[procTitle] || slugify(procTitle)}`

  const sections = useMemo(
    () => [
      {
        id: 'face',
        title: 'Face',
        ref: faceRef,
        procedures: [
          {
            title: 'Rhinoplasty',
            patients: [
              {
                title: 'Patient 1',
                caption: 'Cosmetic and functional rhinoplasty with chin augmentation using silastic implant.',
                items: [
                  { src: lateralChinBefore, alt: 'Chin implant — lateral view, before' },
                  { src: lateralChinAfter, alt: 'Chin implant — lateral view, after' },
                  { src: frontalChinBefore, alt: 'Chin implant — frontal view, before' },
                  { src: frontalChinAfter, alt: 'Chin implant — frontal view, after' },
                ]
              },
              {
                title: 'Patient 2',
                caption: 'Cosmetic and functional rhinoplasty with improved nasal tip rotation.',
                items: [
                  { src: rhino1Before, alt: 'Rhinoplasty — before (frontal)' },
                  { src: rhino1After, alt: 'Rhinoplasty — after (frontal)' },
                  { src: rhino2Before, alt: 'Rhinoplasty — before (profile)' },
                  { src: rhino2After, alt: 'Rhinoplasty — after (profile)' },
                  { src: rhino3Before, alt: 'Rhinoplasty — before (nose close-up)' },
                  { src: rhino3After, alt: 'Rhinoplasty — after (nose close-up)' }
                ]
              },
              {
                title: 'Patient 3',
                caption: 'Cosmetic rhinoplasty with dorsal hump reduction.',
                items: [
                  { src: frontalRinoBefore2, alt: 'Rhinoplasty — before (frontal)' },
                  { src: frontalRinoAfter2, alt: 'Rhinoplasty — after (frontal)' },
                  { src: lateralRinoBefore2, alt: 'Rhinoplasty — before (profile)' },
                  { src: lateralRinoAfter2, alt: 'Rhinoplasty — after (profile)' }
                ]
              }
            ]
          },
          {
            title: 'Chin Implant',
            patients: [
              {
                title: 'Patient 1',
                caption: 'Cosmetic and functional rhinoplasty with chin augmentation using silastic implant.',
                items: [
                  { src: lateralChinBefore, alt: 'Chin implant — lateral view, before' },
                  { src: lateralChinAfter, alt: 'Chin implant — lateral view, after' },
                  { src: frontalChinBefore, alt: 'Chin implant — frontal view, before' },
                  { src: frontalChinAfter, alt: 'Chin implant — frontal view, after' },
                  { src: lateralChinTogether, alt: 'Chin implant — lateral view (together)' }
                ]
              }
            ]
          },
          {
            title: 'Facelift',
            patients: [
              {
                title: 'Patient 1',
                caption: 'Facial rejuvenation with facelift, necklift, temporal browlift and upper blepharoplasty.',
                items: [
                  { src: faceLiftBefore, alt: 'Facelift — before', fit: 'contain' },
                  { src: faceLiftAfter, alt: 'Facelift — after', fit: 'contain' },
                  { src: faceLiftLateral2, alt: 'Facelift — lateral view (together), second set' }
                ]
              },
              {
                title: 'Patient 2',
                caption: 'Facial rejuvenation with facelift, necklift.',
                items: [
                  { src: faceLift3Before, alt: 'Facelift — before' },
                  { src: faceLift3After, alt: 'Facelift — after' }
                ]
              }
            ]
          },
          {
            title: 'Neck Lift',
            patients: [
              {
                title: 'Patient 1',
                caption: 'Central neck laxity addressed with necklift.',
                items: [
                  { src: necklift1Before, alt: 'Neck lift — before (lateral)' },
                  { src: necklift1After, alt: 'Neck lift — after (lateral)' },
                  { src: necklift2After, alt: 'Neck lift — before (frontal)' },
                  { src: necklift2Before, alt: 'Neck lift — after (frontal)' }
                ]
              },
              {
                title: 'Patient 2',
                caption: 'Prior trauma and radiation changes addressed with necklift.',
                items: [
                  { src: neckBefore, alt: 'Neck — before' },
                  { src: neckAfter, alt: 'Neck — after' }
                ]
              }
            ]
          },
          {
            title: 'EarWell® Infant Ear Molding',
            patients: [
              {
                title: 'Patient 1',
                caption: 'Moderate lop-ear deformity corrected with ear molding.',
                items: [
                  { src: earWellBefore, alt: 'EarWell infant ear molding — before' },
                  { src: earWellAfter, alt: 'EarWell infant ear molding — after' }
                ]
              },
              {
                title: 'Patient 2',
                caption: 'Prominent ear due to conchal crus deformity corrected with ear molding.',
                items: [
                  { src: earSugeryBefore, alt: 'Otoplasty (ear surgery) — before' },
                  { src: earSugeryAfter, alt: 'Otoplasty (ear surgery) — after' }
                ]
              }
            ]
          },
          {
            title: 'Torn Ear Lobe Repair',
            patients: [
              {
                title: 'Patient 1',
                caption: 'Earring pull-through repair; ears were re-pierced 1 year later after adequate healing.',
                items: [
                  { src: earRepairBefore, alt: 'Torn ear lobe repair — before' },
                  { src: earRepairAfter, alt: 'Torn ear lobe repair — after' }
                ]
              }
            ]
          },
          {
            title: 'Facial Reconstruction',
            patients: [
              {
                title: 'Patient 1',
                caption: 'Lower eyelid defect reconstruction after Mohs surgery for removal of eyelid skin cancer.',
                sensitiveGroup: true,
                items: [
                  { src: eyeReconstructionBefore, alt: 'Eyelid reconstruction — before', sensitive: true },
                  { src: eyeReconstructionAfter, alt: 'Eyelid reconstruction — after', sensitive: true }
                ]
              },
              {
                title: 'Patient 2',
                caption: 'Complex, multi-staged nasal reconstruction after extensive skin and soft tissue cancer reconstruction and radiation therapy.',
                sensitiveGroup: true,
                items: [
                  { src: noseReconstructionBefore, alt: 'Nose reconstruction — before', sensitive: true },
                  { src: noseReconstructionAfter, alt: 'Nose reconstruction — after', sensitive: true }
                ]
              }
            ]
          },
          {
            title: 'Browlift and Blepharoplasty',
            patients: [
              {
                title: 'Patient 1',
                caption: 'Temporal browlift and upper blepharoplasty.',
                items: [
                  { src: browLiftBefore, alt: 'Brow lift — before' },
                  { src: browLiftAfter, alt: 'Brow lift — after' }
                ]
              },
              {
                title: 'Patient 2',
                caption: 'Direct browlift, upper and lower blepharoplasty as well as eyelid xanthelasma (cholesterol deposit) removal.',
                items: [
                  { src: foreheadBefore, alt: 'Forehead — before' },
                  { src: foreheadAfter, alt: 'Forehead — after' }
                ]
              }
            ]
          },
          {
            title: 'CoolPeel®',
            patients: [
              {
                title: 'Patient 1',
                caption: 'One treatment CoolPeel with 48 hr downtime (light redness) and 2 weeks later notable improvement in skin tone and evenness; note: patient also received botox and subtle lip augmentation with hyaluronic acid filler (Volbella).',
                items: [
                  { src: coolPeelBefore, alt: 'CoolPeel® — before' },
                  { src: coolPeelAfter, alt: 'CoolPeel® — after' }
                ]
              }
            ]
          },
          {
            title: 'CO₂ Laser Resurfacing',
            patients: [
              {
                title: 'Patient 1',
                caption: (
                  <>
                    <a href={TETRA_PRO_URL} target='_blank' rel='noopener noreferrer'>
                      Tetra PRO
                    </a>{' '}
                    CO₂ laser resurfacing as well as nasal “mole” removal with CO2 laser, onetreatment.
                  </>
                ),
                items: [
                  { src: co2Before2, alt: 'CO₂ laser resurfacing — Case 2, before' },
                  { src: co2After2, alt: 'CO₂ laser resurfacing — Case 2, after' }
                ]
              },
              {
                title: 'Patient 2',
                caption: 'CO2 laser nasal “mole” removal, one treatment.',
                items: [
                  { src: lesionBefore, alt: 'Lesion — before' },
                  { src: lesionAfter, alt: 'Lesion — after' }
                ]
              },
              {
                title: 'Patient 3',
                caption: 'CO2 laser nasal “mole” removal, one treatment.',
                items: [
                  { src: lesion2Before, alt: 'Lesion — before (case 2)' },
                  { src: lesion2After, alt: 'Lesion — after (case 2)' },
                  { src: lesionBeforeAfter, alt: 'Lesion — before and after (combined image)' }
                ]
              }
            ]
          },
          {
            title: 'Lip Filler (Hyaluronic Acid)',
            patients: [
              {
                title: 'Patient 1',
                caption: 'Lip restoration with hyaluronic acid filler.',
                items: [
                  { src: lipBefore, alt: 'Lip filler (HA) — before' },
                  { src: lipAfter, alt: 'Lip filler (HA) — after' }
                ]
              },
              {
                title: 'Patient 2',
                caption: 'Lip augmentation with hyaluronic acid filler.',
                items: [
                  { src: lipsBefore, alt: 'Lips — before' },
                  { src: lipsAfter, alt: 'Lips — after' }
                ]
              },
              {
                title: 'Patient 3',
                caption: 'Subtle lip augmentation with hyaluronic acid filler.',
                items: [
                  { src: lips2Before, alt: 'Lips — before (set 2)' },
                  { src: lips2After, alt: 'Lips — after (set 2)' }
                ]
              },
              {
                title: 'Patient 4',
                caption: 'Lip augmentation and improvement of underlying asymmetry with hyaluronic acid filler.',
                items: [
                  { src: lips3Before, alt: 'Lips — before (set 3)' },
                  { src: lips3After, alt: 'Lips — after (set 3)' }
                ]
              }
            ]
          }
        ]
      }
    ],
    []
  )

  const [activeId, setActiveId] = useState(sections[0].id)
  const [unlockedSensitive, setUnlockedSensitive] = useState(() => new Set())

  const sensitiveKey = (sIdx, pIdx, cIdx, i) => `${sIdx}:${pIdx}:${cIdx}:${i}`
  const isSensitiveUnlocked = (key) => unlockedSensitive.has(key)

  const unlockSensitive = (key) => {
    setUnlockedSensitive((prev) => {
      const next = new Set(prev)
      next.add(key)
      return next
    })
  }

  const hideSensitive = (key) => {
    setUnlockedSensitive((prev) => {
      const next = new Set(prev)
      next.delete(key)
      return next
    })
  }

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { root: null, threshold: 0.4, rootMargin: '-10% 0px -45% 0px' }
    )

    sections.forEach((s) => s.ref.current && obs.observe(s.ref.current))
    return () => obs.disconnect()
  }, [sections])

  const scrollTo = (ref) => {
    if (!ref?.current) return
    const top = ref.current.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top, behavior: 'smooth' })
  }

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash?.replace('#', '')
      if (!hash) return

      const el = document.getElementById(hash)
      if (!el) return

      const top = el.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top, behavior: 'smooth' })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  const [lightbox, setLightbox] = useState(null)
  const closeBtnRef = useRef(null)

  const getImagesFor = (sectionIndex, procIndex, patientIndex) => {
    const proc = sections[sectionIndex]?.procedures?.[procIndex]
    const patient = proc?.patients?.[patientIndex]
    return (patient?.items || []).filter((it) => !it.placeholder && it.src)
  }

  const openLightbox = (sectionIndex, procIndex, patientIndex, itemIndex) => {
    const proc = sections[sectionIndex]?.procedures?.[procIndex]
    const patient = proc?.patients?.[patientIndex]
    const all = patient?.items || []
    const clicked = all[itemIndex]
    if (!clicked?.src) return

    const images = all.filter((it) => !it.placeholder && it.src)
    const found = images.findIndex((im) => im.src === clicked.src)
    const safeIndex = found >= 0 ? found : 0
    const { src, alt = '' } = images[safeIndex] || {}

    setLightbox({ sectionIndex, procIndex, patientIndex, index: safeIndex, src, alt })
  }

  const updateLightboxIndex = (nextIndex) => {
    if (!lightbox) return
    const images = getImagesFor(lightbox.sectionIndex, lightbox.procIndex, lightbox.patientIndex)
    if (!images.length) return
    const idx = (nextIndex + images.length) % images.length
    const { src, alt = '' } = images[idx]
    setLightbox({ ...lightbox, index: idx, src, alt })
  }

  const goNext = () => updateLightboxIndex(lightbox.index + 1)
  const goPrev = () => updateLightboxIndex(lightbox.index - 1)
  const closeLightbox = () => setLightbox(null)

  useEffect(() => {
    if (!lightbox) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setTimeout(() => closeBtnRef.current?.focus(), 0)

    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  const badgeFor = (alt = '') => {
    const t = alt.toLowerCase()
    if (t.includes('before')) return 'Before'
    if (t.includes('after')) return 'After'
    return null
  }

  return (
    <div className='gallery-page'>
      {/* Sticky quick links */}
      <nav className='gallery-nav' aria-label='Patient Gallery Sections'>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.ref)}
            className={activeId === s.id ? 'active' : undefined}
            aria-current={activeId === s.id ? 'true' : undefined}
            aria-controls={s.id}
          >
            {s.title}
          </button>
        ))}
      </nav>

      {/* Hero */}
      <header className='gallery-hero'>
        <div className='gallery-hero__inner'>
          <h1>Patient Gallery</h1>
          <p>
            This gallery contains photos illustrating surgical procedures and may not be suitable for all visitors, all
            photos are used with written patient permission, images are not retouched, and are only intended to provide
            examples of obtained results.
          </p>

          <div
            className='gallery-hero__jump-links'
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '20px',
              justifyContent: 'center'
            }}
          >
            {sections.flatMap((section) =>
              section.procedures.map((proc) => {
                const procId = getProcId(section.id, proc.title)
                return (
                  <button
                    key={procId}
                    type='button'
                    className='button button--gallery'
                    onClick={() => scrollToId(procId)}
                  >
                    {proc.title}
                  </button>
                )
              })
            )}
          </div>
        </div>
      </header>

      {/* Disclaimer */}
      <div className='gallery-disclaimer'>
        <p>
          Explore real patient results organized by treatment area and patient. Click any image to view it larger. Use
          the quick links above to jump between sections.
        </p>
      </div>

      {/* Sections */}
      <main className='gallery-content'>
        {sections.map((section, sIdx) => (
          <section
            key={section.id}
            id={section.id}
            ref={section.ref}
            className='gallery-section'
            aria-labelledby={`${section.id}-title`}
          >
            <div className='section-header'>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <div className='section-accent' />
            </div>

            {section.procedures.map((proc, pIdx) => {
              const procId = getProcId(section.id, proc.title)
              const isReconstruction = proc.title.toLowerCase().includes('facial reconstruction')

              return (
                <article
                  className='procedure-card'
                  key={`${section.id}-${pIdx}`}
                  id={procId}
                  aria-labelledby={`${procId}-title`}
                >
                  <div className='procedure-title'>
                    <h3 id={`${procId}-title`}>{proc.title}</h3>
                  </div>

                  {isReconstruction ? (
                    <div className='sensitive-note' role='note' aria-label='Sensitive content warning'>
                      Some images in this section may not be suitable for all visitors. Thumbnails are blurred. Click to
                      view.
                    </div>
                  ) : null}

                  {(proc.patients || []).map((patient, cIdx) => (
                    <div className='patient-block' key={`${procId}-patient-${cIdx}`}>
                      <div className='patient-block__header'>
                        {patient.title ? <h4 className='patient-block__title'>{patient.title}</h4> : null}
                        <p className='patient-block__caption'>{patient.caption}</p>
                      </div>

                      <div className='procedure-grid'>
                        {(patient.items || []).map((item, i) => {
                          if (item.placeholder) {
                            return (
                              <div className='img-slot placeholder' key={i} aria-label='Placeholder'>
                                <span>{item.label || 'Add image'}</span>
                              </div>
                            )
                          }

                          const badge = badgeFor(item.alt)
                          const key = sensitiveKey(sIdx, pIdx, cIdx, i)

                          const isSensitive = !!item.sensitive
                          const unlocked = isSensitive ? isSensitiveUnlocked(key) : true

                          const slotClass = [
                            'img-slot',
                            item.fit === 'contain' ? 'img-slot--contain' : '',
                            isSensitive ? 'img-slot--sensitive' : '',
                            isSensitive && unlocked ? 'is-unlocked' : ''
                          ]
                            .filter(Boolean)
                            .join(' ')

                          const handleThumbClick = () => {
                            if (!isSensitive) {
                              openLightbox(sIdx, pIdx, cIdx, i)
                              return
                            }

                            if (!unlocked) {
                              unlockSensitive(key)
                              return
                            }

                            openLightbox(sIdx, pIdx, cIdx, i)
                          }

                          return (
                            <div key={i}>
                              <button
                                className={slotClass}
                                onClick={handleThumbClick}
                                aria-label={item.alt || 'Open image'}
                              >
                                <img src={item.src} alt={item.alt || ''} loading='lazy' />
                                {badge ? <span className={`img-badge ${badge.toLowerCase()}`}>{badge}</span> : null}

                                {isSensitive && !unlocked ? (
                                  <div className='img-overlay' aria-hidden='true'>
                                    <div>
                                      <div className='img-overlay__text'>Click to view</div>
                                      <div className='img-overlay__sub'>Image may not be suitable for all visitors</div>
                                    </div>
                                  </div>
                                ) : null}
                              </button>

                              {isSensitive && unlocked ? (
                                <div className='sensitive-controls'>
                                  <button
                                    type='button'
                                    className='sensitive-hide-btn'
                                    onClick={() => hideSensitive(key)}
                                    aria-label='Hide image'
                                  >
                                    Hide image
                                  </button>
                                </div>
                              ) : null}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </article>
              )
            })}
          </section>
        ))}
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div className='lightbox' onClick={closeLightbox} role='dialog' aria-modal='true'>
          <div className='lightbox__inner' onClick={(e) => e.stopPropagation()}>
            <div
              className='lightbox__topbar'
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '10px'
              }}
            >
              <button
                className='lightbox__close'
                onClick={closeLightbox}
                aria-label='Close'
                ref={closeBtnRef}
                style={{
                  position: 'static'
                }}
              >
                <svg width='22' height='22' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M6 6l12 12M18 6L6 18' stroke='white' strokeWidth='2.4' strokeLinecap='round' />
                </svg>
              </button>
            </div>

            <img src={lightbox.src} alt={lightbox.alt || ''} />
            {lightbox.alt ? <p className='lightbox__caption'>{lightbox.alt}</p> : null}

            <button className='lightbox__arrow prev' onClick={goPrev} aria-label='Previous image'>
              <svg width='22' height='22' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M15 6l-6 6 6 6' stroke='white' strokeWidth='2.4' strokeLinecap='round' fill='none' />
              </svg>
            </button>

            <button className='lightbox__arrow next' onClick={goNext} aria-label='Next image'>
              <svg width='22' height='22' viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M9 6l6 6-6 6' stroke='white' strokeWidth='2.4' strokeLinecap='round' fill='none' />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery