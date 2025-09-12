import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Gallery.css";

/* ---------- Face ---------- */
import earBefore from "../media/face/earRepairBefore.jpg";
import earAfter from "../media/face/earRepairAfter.jpg";
import earWellBefore from "../media/face/earWellBefore.jpg";
import earWellAfter from "../media/face/earWellAfter.jpg";
import facialRejuvenationBefore from "../media/face/1facialRejuvenation-before.jpg";
import facialRejuvenationAfter from "../media/face/1facialRejuvenation-after.jpg";
import faceLiftBefore from "../media/face/faceLift2-before.png";
import faceLiftAfter from "../media/face/faceLift2-after.png";
import necklift1Before from "../media/face/neckLift1.png";
import necklift1After from "../media/face/neckLift2.jpg";
import necklift2Before from "../media/face/neckLift3.png";
import necklift2After from "../media/face/neckLift4.png";
import earSugeryBefore from "../media/face/earSurgeryBefore.png";
import earSugeryAfter from "../media/face/earSurgeryAfter.png";
import faceLiftLateral from "../media/face/faceliftLateral1.jpg";
import faceLiftLateral2 from "../media/face/faceliftLateral2.jpg";
import faceLiftFrontal from "../media/face/faceliftFrontal.jpg";
import eyeReconstructionBefore from "../media/reconstruction/eyeLidReconstruction-before.png";
import eyeReconstructionAfter from "../media/reconstruction/eyeLidReconstruction-after.png.jpg";
import noseReconstructionBefore from "../media/reconstruction/noseReconstruction-before.png";
import noseReconstructionAfter from "../media/reconstruction/noseReconstruction-after.png";
import lateralChinBefore from "../media/face/lateralChinBefore.jpg";
import lateralChinAfter from "../media/face/lateralChinAfter.jpg";
import frontalChinBefore from "../media/face/frontalChinBefore.png";
import frontalChinAfter from "../media/face/frontalChinAfter.png";
import lateralChinTogether from "../media/face/lateralChinTogether.png";
import faceLift3Before from "../media/face/faceLift3Before.jpg";
import faceLift3After from "../media/face/faceLift3After.jpg";
import frontalChinBefore2 from "../media/face/frontalChinBefore2.jpg";
import frontalChinAfter2 from "../media/face/frontalChinAfter2.jpg";
import lateralChinBefore2 from "../media/face/lateralChinBefore2.jpg";
import lateralChinAfter2 from "../media/face/lateralChinAfter2.jpg";

/* ---------- Nose ---------- */
import rhino1Before from "../media/nose/rhino1-before.png";
import rhino1After from "../media/nose/rhino1-after.png";
import rhino2Before from "../media/nose/rhino2-before.png";
import rhino2After from "../media/nose/rhino2-after.png";
import rhino3Before from "../media/nose/rhino3-before.png";
import rhino3After from "../media/nose/rhino3-after.png";

/* ---------- Non-surgical ---------- */
import coolPeelBefore from "../media/nonsurgical/coolPeel-before.jpg";
import coolPeelAfter from "../media/nonsurgical/coolPeel-after.png";
import co2laserBefore from "../media/nonsurgical/co2Before1.png";
import co2laserAfter from "../media/nonsurgical/co2After1.png";
import lipBefore from "../media/nonsurgical/lipFiller2Before.png";
import lipAfter from "../media/nonsurgical/lipFiller2After.jpg";
import co2Before2 from '../media/nonsurgical/co2Before2.png';
import co2After2 from '../media/nonsurgical/co2After2.png';

const Gallery = () => {
    // Anchors for quick-jump nav
    const faceRef = useRef(null);
    const noseRef = useRef(null);
    const eyesRef = useRef(null);
    const nonsurgicalRef = useRef(null);

    const sections = useMemo(
        () => [
            {
                id: "face",
                title: "Face",
                ref: faceRef,
                procedures: [
                    {
                        title: "Chin Implant", items: [
                            { src: lateralChinBefore, alt: "Chin implant — lateral view, before" },
                            { src: lateralChinAfter, alt: "Chin implant — lateral view, after" },
                            { src: frontalChinBefore, alt: "Chin implant — frontal view, before" },
                            { src: frontalChinAfter, alt: "Chin implant — frontal view, after" },
                            { src: lateralChinTogether, alt: "Chin implant — lateral view (together)" },
                            { src: frontalChinBefore2, alt: "Chin implant — frontal view, before" },
                            { src: frontalChinAfter2, alt: "Chin implant — frontal view, after" },
                            { src: lateralChinBefore2, alt: "Chin implant — lateral view, before" },
                            { src: lateralChinAfter2, alt: "Chin implant — lateral view, after" },
                        ]
                    },
                    {
                        title: "Facelift (SMAS)",
                        items: [
                            { src: faceLiftBefore, alt: "Facelift (SMAS) — Case 2, before" },
                            { src: faceLiftAfter, alt: "Facelift (SMAS) — Case 2, after" },
                            { src: facialRejuvenationBefore, alt: "Facial rejuvenation — Case 1, before" },
                            { src: facialRejuvenationAfter, alt: "Facial rejuvenation — Case 1, after" },
                            { src: faceLift3Before, alt: "Facelift (SMAS) — Case 3, before" },
                            { src: faceLift3After, alt: "Facelift (SMAS) — Case 3, after" },
                        ],
                    },

                    {
                        title: "Facelift Side-by-Side Views", items: [
                            { src: faceLiftLateral, alt: "Facelift lateral view" },
                            { src: faceLiftLateral2, alt: "Facelift lateral view 2" },
                            { src: faceLiftFrontal, alt: "Facelift frontal view" },
                        ]
                    },

                    {
                        title: "Neck Lift",
                        items: [
                            { src: necklift1Before, alt: "Neck lift — Case 1, before" },
                            { src: necklift1After, alt: "Neck lift — Case 1, after" },
                            { src: necklift2Before, alt: "Neck lift — Case 2, before" },
                            { src: necklift2After, alt: "Neck lift — Case 2, after" },
                        ],
                    },
                    {
                        title: "Torn Earlobe Repair",
                        items: [
                            { src: earBefore, alt: "Torn earlobe — before repair" },
                            { src: earAfter, alt: "Torn earlobe — after repair" }
                        ],
                    },
                    {
                        title: "EarWell® Infant Ear Molding",
                        items: [
                            { src: earWellBefore, alt: "EarWell infant ear molding — before" },
                            { src: earWellAfter, alt: "EarWell infant ear molding — after" },
                        ],
                    },
                    {
                        title: "Otoplasty / Ear Surgery",
                        items: [
                            { src: earSugeryBefore, alt: "Otoplasty (ear surgery) — before" },
                            { src: earSugeryAfter, alt: "Otoplasty (ear surgery) — after" },
                        ],
                    },
                    {
                        title: "Facial Reconstruction", items: [
                            { src: eyeReconstructionBefore, alt: "Eyelid reconstruction — before" },
                            { src: eyeReconstructionAfter, alt: "Eyelid reconstruction — after" },
                            { src: noseReconstructionBefore, alt: "Nose reconstruction — before" },
                            { src: noseReconstructionAfter, alt: "Nose reconstruction — after" },
                        ]
                    },

                ],
            },
            {
                id: "nose",
                title: "Nose",
                ref: noseRef,
                procedures: [
                    {
                        title: "Rhinoplasty",
                        items: [
                            { src: rhino1Before, alt: "Rhinoplasty — Case 1, before" },
                            { src: rhino1After, alt: "Rhinoplasty — Case 1, after" },
                            { src: rhino2Before, alt: "Rhinoplasty — Case 2, before" },
                            { src: rhino2After, alt: "Rhinoplasty — Case 2, after" },
                            { src: rhino3Before, alt: "Rhinoplasty — Case 3, before" },
                            { src: rhino3After, alt: "Rhinoplasty — Case 3, after" },
                        ],
                    }
                ],
            },
            {
                id: "eyes",
                title: "Eyes",
                ref: eyesRef,
                procedures: [
                    {
                        title: "Upper Blepharoplasty",
                        items: [{ placeholder: true, label: "Add image" }, { placeholder: true, label: "Add image" }],
                    },
                    {
                        title: "Lower Blepharoplasty",
                        items: [{ placeholder: true, label: "Add image" }, { placeholder: true, label: "Add image" }],
                    },
                ],
            },
            {
                id: "non-surgical",
                title: "Non-Surgical",
                ref: nonsurgicalRef,
                procedures: [
                    {
                        title: "CoolPeel®", items: [
                            { src: coolPeelBefore, alt: "CoolPeel® — before" },
                            { src: coolPeelAfter, alt: "CoolPeel® — after" },
                        ]
                    },
                    {
                        title: "CO₂ Laser Resurfacing",
                        items: [
                            { src: co2laserBefore, alt: "CO₂ laser resurfacing — Case 1, before" },
                            { src: co2laserAfter, alt: "CO₂ laser resurfacing — Case 1, after" },
                            { src: co2Before2, alt: "CO₂ laser resurfacing — Case 2, before" },
                            { src: co2After2, alt: "CO₂ laser resurfacing — Case 2, after" },
                        ],
                    },
                    {
                        title: "Lip Filler (Hyaluronic Acid)",
                        items: [
                            { src: lipBefore, alt: "Lip filler (HA) — Case 1, before" },
                            { src: lipAfter, alt: "Lip filler (HA) — Case 1, after" },
                        ],
                    }
                ],
            },
        ],
        []
    );

    /* ===== Sticky quick links: active section highlight ===== */
    const [activeId, setActiveId] = useState(sections[0].id);
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveId(e.target.id);
                });
            },
            { root: null, threshold: 0.4, rootMargin: "-10% 0px -45% 0px" }
        );
        sections.forEach((s) => s.ref.current && obs.observe(s.ref.current));
        return () => obs.disconnect();
    }, [sections]);

    const scrollTo = (ref) => {
        if (!ref?.current) return;
        const top = ref.current.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: "smooth" });
    };

    /* ===== Lightbox with keyboard nav ===== */
    const [lightbox, setLightbox] = useState(null);
    const closeBtnRef = useRef(null);

    const getImagesFor = (sectionIndex, procIndex) =>
        sections[sectionIndex].procedures[procIndex].items.filter((it) => !it.placeholder);

    const openLightbox = (sectionIndex, procIndex, itemIndex) => {
        const all = sections[sectionIndex].procedures[procIndex].items;
        const clicked = all[itemIndex];
        if (!clicked?.src) return;

        const images = all.filter((it) => !it.placeholder);
        const safeIndex = images.findIndex((im) => im.src === clicked.src) || 0;
        const { src, alt = "" } = images[safeIndex];

        setLightbox({ sectionIndex, procIndex, index: safeIndex, src, alt });
    };

    const updateLightboxIndex = (nextIndex) => {
        if (!lightbox) return;
        const images = getImagesFor(lightbox.sectionIndex, lightbox.procIndex);
        if (!images.length) return;
        const idx = (nextIndex + images.length) % images.length;
        const { src, alt = "" } = images[idx];
        setLightbox({ ...lightbox, index: idx, src, alt });
    };

    const goNext = () => updateLightboxIndex(lightbox.index + 1);
    const goPrev = () => updateLightboxIndex(lightbox.index - 1);
    const closeLightbox = () => setLightbox(null);

    // Lock body scroll and enable keyboard shortcuts while lightbox is open
    useEffect(() => {
        if (!lightbox) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        // focus close button after open
        setTimeout(() => closeBtnRef.current?.focus(), 0);

        const onKey = (e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lightbox]);

    // Badge helper (Before / After)
    const badgeFor = (alt = "") => {
        const t = alt.toLowerCase();
        if (t.includes("before")) return "Before";
        if (t.includes("after")) return "After";
        return null;
    };

    return (
        <div className="gallery-page">
            {/* Sticky quick links - auto-generated from sections */}
            <nav className="gallery-nav" aria-label="Patient Gallery Sections">
                {sections.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => scrollTo(s.ref)}
                        className={activeId === s.id ? "active" : undefined}
                        aria-current={activeId === s.id ? "true" : undefined}
                        aria-controls={s.id}
                    >
                        {s.title}
                    </button>
                ))}
            </nav>

            {/* Hero */}
            <header className="gallery-hero">
                <div className="gallery-hero__inner">
                    <h1>Patient Gallery</h1>
                    <p>
                        Explore real patient results organized by treatment area. Click any image to view it larger. Use the quick links above to jump between sections.
                    </p>
                </div>
            </header>

            {/* Sections */}
            <main className="gallery-content">
                {sections.map((section, sIdx) => (
                    <section
                        key={section.id}
                        id={section.id}
                        ref={section.ref}
                        className="gallery-section"
                        aria-labelledby={`${section.id}-title`}
                    >
                        <div className="section-header">
                            <h2 id={`${section.id}-title`}>{section.title}</h2>
                            <div className="section-accent" />
                        </div>

                        {section.procedures.map((proc, pIdx) => (
                            <article className="procedure-card" key={`${section.id}-${pIdx}`}>
                                <div className="procedure-title">
                                    <h3>{proc.title}</h3>
                                </div>

                                <div className="procedure-grid">
                                    {proc.items.map((item, i) => {
                                        if (item.placeholder) {
                                            return (
                                                <div className="img-slot placeholder" key={i} aria-label="Placeholder">
                                                    <span>{item.label || "Add image"}</span>
                                                </div>
                                            );
                                        }
                                        const badge = badgeFor(item.alt);
                                        return (
                                            <button
                                                className="img-slot"
                                                key={i}
                                                onClick={() => openLightbox(sIdx, pIdx, i)}
                                                aria-label={item.alt || "Open image"}
                                            >
                                                <img src={item.src} alt={item.alt || ""} loading="lazy" />
                                                {badge ? <span className={`img-badge ${badge.toLowerCase()}`}>{badge}</span> : null}
                                            </button>
                                        );
                                    })}
                                </div>
                            </article>
                        ))}
                    </section>
                ))}
            </main>

            {/* Lightbox */}
            {lightbox && (
                <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image viewer">
                    <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
                        <img src={lightbox.src} alt={lightbox.alt || ""} />
                        {lightbox.alt ? <p className="lightbox__caption">{lightbox.alt}</p> : null}

                        {/* Close */}
                        <button
                            className="lightbox__close"
                            onClick={closeLightbox}
                            aria-label="Close"
                            ref={closeBtnRef}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Prev / Next */}
                        <button className="lightbox__arrow prev" onClick={goPrev} aria-label="Previous image">
                            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                            </svg>
                        </button>
                        <button className="lightbox__arrow next" onClick={goNext} aria-label="Next image">
                            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
