import React from 'react';

const testimonials = [
  { name: "Alice Johnson", feedback: "SafeMax's expertise saved us from a potential cyber attack." },
  { name: "Michael Lee", feedback: "Their team is incredibly professional and dedicated." },
  { name: "Sara Patel", feedback: "I highly recommend SafeMax for any cybersecurity needs." }
];

const Testimonials = () => {
  return (
    <section className="p-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 border rounded shadow-md hover:shadow-lg transition">
            <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
            <p className="font-semibold text-blue-600">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
