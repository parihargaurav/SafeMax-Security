import React, { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Hero onScheduleConsultation={scrollToContact} />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
