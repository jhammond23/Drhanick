import React, { useEffect, useState } from "react";
import "./Home.css";

import drhanick from "../media/headshot ALH color.jpg";
import seal from "../media/board-certified-logo.png";
import seal2 from "../media/seal2.png";
import cv from "../media/pdfs/Hanick-CV-2024.pdf";

const Home = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const reviews = [
    {
      text:
        "Dr. Hanick has been amazing! Dr. Hanick is very educated in her field. She thoroughly explains the process, healing, and everything in between. Her bedside manner is impeccable and she encourages any and all questions. She completed the procedure so quick! She made sure she was available and open between follow ups. I am extremely happy with my results and will be booking again.",
      name: "K.B.",
    },
    {
      text:
        "Dr Hanick was very personable, knowledgeable and explained things in great detail. Never felt rushed and had a great experience.",
      name: "E.G.",
    },
    {
      text:
        "The office staff and the ENT were terrific. I had two rambunctious toddlers, and they went out of their way to be helpful and kind. I appreciate that more than you know!",
      name: "E.K.",
    },
    { text: "Kind, thorough, informative.", name: "D.H." },
    {
      text:
        "Very professional and friendly. I felt confident that my concerns were heard and Dr had time to hear and address my issues. Staff was very friendly and efficient.",
      name: "L.N.",
    },
    {
      text:
        "Dr. Hanick was excellent. She listened to my concerns and gave me confidence in her knowledge.",
      name: "J.B.",
    },
    {
      text:
        "Very positive experience. Reception friendly and helpful. Dr. Hanick was wonderful at handling this admittedly stressed patient!",
      name: "B.K.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Fallback for very old browsers that ignore <a download>
  const handleDownloadCV = (e) => {
    if (!("download" in HTMLAnchorElement.prototype)) {
      e.preventDefault();
      const a = document.createElement("a");
      a.href = cv;
      a.download = "Dr_Andrea_Hanick_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  return (
    <div className="home-container">
      {/* HERO */}
      <div className="whitetoblue">
        <div className="hero-section">
          <h1 className="h1">Dr. Andrea Hanick</h1>
          <h2 className="hs1">Facial Plastic Surgery</h2>
          <div className="buttons-container">
            <a href="/ask-a-question" className="button">
              Ask a Question!
            </a>
            <a href="/contact-ENT" className="button booknow">
              Book Now!
            </a>
          </div>
        </div>
      </div>

      {/* MEET DR. HANICK */}
      <section className="bio-hero" aria-labelledby="bio-title">
        <div className="bio-hero__inner">
          <figure className="bio-hero__photo">
            <img
              src={drhanick}
              alt="Portrait of Dr. Andrea Hanick"
              loading="lazy"
            />
          </figure>

          <article className="bio-hero__copy">
            {/* Seals stacked ABOVE the text */}
            <div
              className="bio-hero__badgeBox"
              aria-label="Professional certifications"
            >
              <img src={seal} alt="ABFPRS Board Certified" />
              <img src={seal2} alt="AAO-HNS Seal" />
            </div>

            <h2 id="bio-title" className="bio-hero__title">
              Meet Dr. Andrea Hanick
            </h2>

            <p className="bio-hero__lead">
              Dr. Hanick is a double board certified, fellowship-trained facial
              plastic surgeon specializing in cosmetic and reconstructive surgery
              practicing in Columbia, Missouri. She combines compassionate,
              patient-centered care with surgical expertise to help you maximize
              your innate beauty and feel like your best self. Dr. Hanick
              focuses on surgery that will appear natural and harmonious with
              each patient’s unique facial features and always takes into account
              individual goals.
            </p>

            <p className="bio-hero__lead">
              Dr. Hanick offers surgical services at the hospital or surgery
              center under general anesthesia, as well as performing many
              surgeries and procedures in her comfortable, convenient procedure
              room.
            </p>

            <div
              className="bio-hero__actions"
              role="group"
              aria-label="Primary actions"
            >
              <a href="/ask-a-question" className="btn-small btn-solid">
                Ask a Question
              </a>
              <a href="/contact-ENT" className="btn-small btn-outline">
                Book Now
              </a>

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-small btn-outline"
                aria-label="View Dr. Hanick’s CV (opens in a new tab)"
              >
                View CV
              </a>

              <a
                href={cv}
                download="Dr_Andrea_Hanick_CV.pdf"
                onClick={handleDownloadCV}
                className="btn-small btn-ghost"
                aria-label="Download Dr. Hanick’s CV (PDF)"
              >
                Download CV
              </a>
            </div>

<details className="bio-hero__details">
  <summary className="bio-hero__summary">
    Education & Certifications
  </summary>
  <div className="bio-hero__detail-body">
    <h3>Education</h3>
    <ul>
      <li>
        Fellowship, Facial Plastic and Reconstructive Surgery – Washington University, St. Louis, MO
      </li>
      <li>
        Residency, Otolaryngology–Head and Neck Surgery – Cleveland Clinic, Cleveland, OH
      </li>
      <li>
        Doctor of Medicine – Cleveland Clinic Lerner College of Medicine of Case Western Reserve University, Cleveland, OH
      </li>
      <li>
        Bachelor of Science, Biochemistry – Washington and Lee University, Lexington, VA
      </li>
    </ul>

    <h3>Certifications</h3>
    <ul>
      <li>
        American Board of Facial Plastic and Reconstructive Surgery — Board Certified
      </li>
      <li>
        American Board of Otolaryngology–Head and Neck Surgery — Board Certified
      </li>
      <li>
        <a
          href="https://www.aafprs.org/profileplus?id=337655"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Dr. Hanick’s AAFPRS Profile
        </a>
      </li>
    </ul>
  </div>
</details>
          </article>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <div className="testimonial-section section">
        <h2>Testimonials</h2>
        <div className="testimonial-list">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="testimonial-card"
              aria-label={`Testimonial from ${review.name}`}
            >
              <p>{review.text}</p>
              <h4>{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;