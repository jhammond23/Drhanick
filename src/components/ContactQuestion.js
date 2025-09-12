import React, { useState, useEffect } from 'react';
import './ContactDev.css';

const ContactQuestion = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherService, setOtherService] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [formValid, setFormValid] = useState(false);

  const toggleService = (service) => {
    setSelectedServices(prevSelected => 
      prevSelected.includes(service) 
        ? prevSelected.filter(item => item !== service) 
        : [...prevSelected, service]
    );
  };

  const isSelected = (service) => selectedServices.includes(service);

  const selectTime = (time) => {
    setPreferredTime(time);
  };

  const isTimeSelected = (time) => preferredTime === time;

  useEffect(() => {
    const isValid = selectedServices.length > 0 && preferredTime && (!isSelected('other') || otherService.trim());
    setFormValid(isValid);
  }, [selectedServices, preferredTime, otherService]);

  return (
    <div className='contact-bg'>
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-header-block1">
            <h1>Ask a Question</h1>
          </div>
          <div className='contact-blurb'>Send us any questions you have and we will be in touch soon!</div>
        </div>
        <form
          className="contact-form"
          action="https://formspree.io/f/xdknodnd"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New submission from your website!" />
          <input type="hidden" name="services" value={selectedServices.join(', ')} />
          <input type="hidden" name="preferredTime" value={preferredTime} />
          <div className="form-field">
            <label htmlFor="name" className="form-label">Hi, my name is</label>
            <input type="text" id="name" name="name" placeholder="First & Last Name*" required className="form-input" />
          </div>

          <div className="form-field">
            <label htmlFor="phone" className="form-label">You can call me at</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone*" required className="form-input" />
          </div>

          <div className="form-field">
            <label htmlFor="email" className="form-label">My email is</label>
            <input type="email" id="email" name="email" placeholder="Email*" required className="form-input" />
          </div>

          <div className="form-field">
            <label className="form-label">I'm interested in</label>
            <div className="service-buttons">
              <button type="button" className={`service-button ${isSelected('facial rejuvenation') ? 'selected' : ''}`} onClick={() => toggleService('facial rejuvenation')}>Facial Rejuvenation</button>
              <button type="button" className={`service-button ${isSelected('nasal surgery') ? 'selected' : ''}`} onClick={() => toggleService('nasal surgery')}>Nasal Surgery</button>
              <button type="button" className={`service-button ${isSelected('laser') ? 'selected' : ''}`} onClick={() => toggleService('laser')}>Laser</button>
              <button type="button" className={`service-button ${isSelected('other') ? 'selected' : ''}`} onClick={() => toggleService('other')}>Other/Not Sure</button>
            </div>
          </div>

          {isSelected('other') && (
            <div className="form-field">
              <label htmlFor="otherService" className="form-label">Please specify</label>
              <input 
                type="text" 
                id="otherService" 
                name="otherService" 
                placeholder="Please specify*" 
                required={isSelected('other')} 
                className="form-input" 
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
              />
            </div>
          )}

          <div className="form-field">
            <label className="form-label">Preferred time for a call</label>
            <div className="time-buttons">
              <button type="button" className={`time-button ${isTimeSelected('morning') ? 'selected' : ''}`} onClick={() => selectTime('morning')}>Morning</button>
              <button type="button" className={`time-button ${isTimeSelected('afternoon') ? 'selected' : ''}`} onClick={() => selectTime('afternoon')}>Afternoon</button>
              <button type="button" className={`time-button ${isTimeSelected('anytime') ? 'selected' : ''}`} onClick={() => selectTime('anytime')}>It doesn't matter</button>
            </div>
          </div>

          <div className="form-field message-field">
            <label htmlFor="message" className="form-label">What questions do you have?</label>
            <textarea id="message" name="message" placeholder="Message" required className="form-textarea"></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={!formValid}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactQuestion;
