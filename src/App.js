import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import NonSurgical from './components/NonSurgical';
import Eyes from './components/Eyes';
import Nose from './components/Nose';
import ContactDev from './components/ContactDev';
import ContactENT from './components/ContactENT';
import ContactQuestion from './components/ContactQuestion';
import Face from './components/Face';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- added this */}
      <div className='App'>
        <NavBar />
        <div className='service-page'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/face' element={<Face />} />
            <Route path='/non-surgical' element={<NonSurgical />} />
            <Route path='/eyes' element={<Eyes />} />
            <Route path='/nose' element={<Nose />} />
            <Route path='/contact-developer' element={<ContactDev />} />
            <Route path='/contact-ent' element={<ContactENT />} />
            <Route path='/ask-a-question' element={<ContactQuestion />} />
            <Route path='/gallery' element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
