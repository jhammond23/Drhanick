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
import PageMetadata from './components/PageMetadata';

export function AppContent() {
  return (
    <>
      <PageMetadata />
      <ScrollToTop /> {/* <-- added this */}
      <div className='App'>
        <a className='skip-link' href='#main-content'>Skip to main content</a>
        <NavBar />
        <main className='service-page' id='main-content'>
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
            <Route path='*' element={<section className='not-found'><h1>Page Not Found</h1><p>This page could not be found.</p><p><a href='/'>Visit the homepage</a> or <a href='/contact'>contact the office</a>.</p></section>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() { return <Router><AppContent /></Router>; }
