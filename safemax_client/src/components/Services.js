import React from 'react';

const services = [
  { title: "Vulnerability Assessment", description: "Identify and address vulnerabilities before they become threats." },
  { title: "Penetration Testing", description: "Simulate attacks to test your defenses and prevent real intrusions." },
  { title: "Cybersecurity Consultation", description: "Get expert guidance on securing your business infrastructure." }
];

const Services = () => {
  return (
    <section className="p-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
