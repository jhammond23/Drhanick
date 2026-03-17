// Contact.jsx
import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-us-container'>
      <h1 className='contact-header'>Contact Dr. Andrea Hanick</h1>
      <p className='contact-description'>
        To schedule a consultation or if you have any questions about our services, please use one of the following
        contact methods:
      </p>

      <div className='contact-cards-container'>
        <div className='contact-card'>
          <h3>Phone</h3>
          <p className='contact-info'>+1 (573) 214-2000</p>
          <a href='tel:+15732142000' className='button contact-action-btn'>
            Call Now
          </a>
        </div>

        <div className='contact-card'>
          <h3>Address</h3>
          <p className='contact-info'>
            Dr. Andrea Hanick
            <br />
            Missouri Ear, Nose & Throat Center
            <br />
            1000 W. Nifong Building 3, Suite 100
            <br />
            Columbia, MO, 65203
          </p>
          <a
            href='https://www.google.com/maps?q=1000+W+Nifong+Blvd+Building+3,+Suite+100,+Columbia,+MO,+65203,+United+States'
            target='_blank'
            rel='noopener noreferrer'
            className='button contact-action-btn'
          >
            Get Directions
          </a>
        </div>
      </div>

      <div className='map-hours-container'>
        <div className='map-container'>
          <h3 className='map-title'>Our Location</h3>
          <div className='map-embed'>
            <iframe
              title="Dr. Hanick's Clinic Location"
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.291914603912!2d-92.33154478441744!3d38.915997279570075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c023f5d5c9b5db%3A0x33ab0d1c62f31a90!2s1000%20W%20Nifong%20Blvd%20Building%203%2C%20Columbia%2C%20MO%2065203%2C%20USA!5e0!3m2!1sen!2sus!4v1649381875046'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>

        <div className='hours-container'>
          <h3>Hours of Operation</h3>

          {/* Mobile-friendly table wrapper (prevents overflow on small screens) */}
          <div className='hours-table-wrap'>
            <table className='hours-table'>
              <tbody>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>8:00 am - 4:30 pm</td>
                  </tr>
                ))}
                <tr>
                  <td>Saturday</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
