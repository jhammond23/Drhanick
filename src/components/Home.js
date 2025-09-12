import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
import pic1 from '../media/blepharoplasty.png';
import pic2 from '../media/chinaugmentation.png';
import pic3 from '../media/facelift.png';
import pic4 from '../media/foreheadbrowlift.png'
import pic5 from '../media/medspa.png'
import drhanick from '../media/headshot ALH color.jpg';
import drhanickbg from '../media/drhanick.png';
import mandy from '../media/mandy by wall.jpg';
import team from '../media/nursing-team-cropped.jpg';
import MouseFollower from './CursorFollower';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import face3 from '../media/face3-removebg-preview.png'
import Footer from './Footer';
import seal from '../media/board-certified-logo.png';
import seal2 from '../media/seal2.png';

const Home = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef(null);
  const [activeSection, setActiveSection] = useState('drhanick'); // Default to Dr. Hanick
  const [showMore, setShowMore] = useState(false);



  const reviews = [

    {
      text: "Dr. Hanick has been amazing! Dr. Hanick is very educated in her field. She thoroughly explains the process, healing, and everything in between. Her bedside manner is impeccable and she encourages any and all questions. She completed the procedure so quick! She made sure she was available and open between follow ups. I am extremely happy with my results and will be booking again.",
      name: "K.B.",
    },
    {
      text: "Dr Hanick was very personable, knowledgeable and explained things in great detail. Never felt rushed and had a great experience.",
      name: "E.G.",
    },
    {
      text: "The office staff and the ENT were terrific. I had two rambunctious toddlers, and they went out of their way to be helpful and kind. I appreciate that more than you know!",
      name: "E.K.",
    },
    {
      text: "Kind, thorough, informative.",
      name: "D.H.",
    },
    {
      text: "Very professional and friendly. I felt confident that my concerns were heard and Dr had time to hear and address my issues. Staff was very friendly and efficient.",
      name: "L.N.",
    },
    {
      text: "Dr. Hanick was excellent. She listened to my concerns and gave me confidence in her knowledge.",
      name: "J.B.",
    },
    {
      text: "Very positive experience.  Reception friendly and helpful.  Dr. Hanick was wonderful at handling this admittedly stressed patient!  I appreciated Mandy following up to see if I had gotten all my prescriptions.",
      name: "B.K.",
    }
  ];

  // Intersection Observer
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Spring animation
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 1000 },
  });

  // Intersection Observer for testimonial-section
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Spring animation for testimonial-section
  const testimonialFadeIn = useSpring({
    opacity: testimonialInView ? 1 : 0,
    transform: testimonialInView ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 1000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="home-container">
      {/* Hero section */}
      <div className='whitetoblue'>
        <div className="hero-section">
          <h1 className='h1'>Dr. Andrea Hanick</h1>
          <h2 className='hs1'>Facial Plastic Surgery</h2>
          <div className="buttons-container">
            <a href='/ask-a-question' className='button'>Ask a Question!</a>
            <a href='/contact-ENT' className='button booknow'>Book Now!</a>

          </div>
        </div>

      </div>

      {activeSection === 'drhanick' && (
        <div className='drhanick-section'>
          <div className='drhanick-column'>
            <div className='drhanick-content'>
              <h2 className='drhanick-h2'>Meet Dr. Andrea Hanick</h2>
              <p>
                Dr. Hanick is a double board certified, fellowship-trained facial plastic surgeon specializing in cosmetic and reconstructive surgery practicing in Columbia, Missouri. She combines compassionate, patient-centered care with surgical expertise to help you maximize your innate beauty and feel like your best self. Dr. Hanick focuses on surgery that will appear natural and harmonious with each patient’s unique facial features and always takes into account individual goals.
              </p>
              <p>Dr. Hanick offers surgical servies at the hospital or surgery center under general anesthesia as
                well as performing many surgeries and procedures in her comfortable, convenient procedure
                room.</p>

              {showMore && (
                <p>
                  <h3>Education</h3>
                  <ul>
                    <li>Fellowship, Facial Plastic and Reconstructive Surgery – Washington University, St. Louis, MO</li>
                    <li>Residency, Otolaryngology-Head and Neck Surgery – Cleveland Clinic, Cleveland, OH</li>
                    <li>Doctor of Medicine – Cleveland Clinic Lerner College of Medicine of Case Western Reserve University, Cleveland, OH</li>
                    <li>Bachelor of Science, Biochemistry – Washington and Lee University, Lexington, VA</li>
                  </ul>

                  <h3>Certifications</h3>
                  <ul>
                    <li>Board Certified – American Board of Facial Plastic and Reconstructive Surgery</li>
                    <li>Board Certified – American Board of Otolaryngology and Head and Neck Surgery</li>
                  </ul>


                  <p>
                    <a href="path-to-dr-hanick-cv.pdf" target="_blank" rel="noopener noreferrer">
                      View Dr. Hanick's CV (PDF)
                    </a>
                  </p>
                </p>
              )}
              <div className='show-more-button-cont'>
                <button onClick={toggleShowMore} className='button' id='show-more-button'>
                  {showMore ? 'Show Less' : 'Show More'}
                </button>
              </div>
              <img src={seal} className='seal' />
              <img src={seal2} className='seal' id='seal2' />
            </div>
          </div>

          <img src={drhanick} className='drhanick person' alt='Dr. Hanick' />
        </div>
      )}

      {/* Testimonials section */}
      <div className="testimonial-section section" ref={testimonialRef}>
        <animated.div style={testimonialFadeIn}>
          <h2>Testimonials</h2>
          <div className="testimonial-list" ref={testimonialRef} style={testimonialFadeIn}>
            {reviews.map((review, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
                </div>
                <p>{review.text}</p>
                <h4>{review.name}</h4>
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </div>
  );


};

export default Home;


{/* Call to action section */ }
{/* <div className="cta-section">
  <h2>Ready to unlock your natural beauty?</h2>
  <a href=''>
    <button className="cta button">Book Your Consultation</button>
  </a>
</div> */}
