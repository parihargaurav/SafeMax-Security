import React from 'react';

const Hero = ({ onScheduleConsultation }) => {
  return (
    <section className="h-screen bg-gradient-to-r from-blue-900 to-blue-600 flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-5xl font-bold mb-4">Secure Your Future with SafeMax Security</h1>
      <p className="text-lg mb-8">Your Trusted Partner in Cybersecurity</p>
      <button 
        onClick={onScheduleConsultation} 
        className="bg-yellow-500 hover:bg-yellow-600 text-lg px-8 py-3 rounded-full transition duration-300"
      >
        Schedule a Consultation
      </button>
    </section>
  );
};

export default Hero;
