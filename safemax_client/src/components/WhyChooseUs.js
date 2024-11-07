import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Why Choose SafeMax?</h2>
      <p className="text-gray-700 mb-8">
        SafeMax combines experience, expertise, and a client-centered approach to deliver unparalleled security services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Trusted by Top Companies</h3>
          <p>We’ve protected organizations across industries, helping them stay secure.</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Proven Expertise</h3>
          <p>Our team of certified experts brings years of experience to every project.</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Advanced Technology</h3>
          <p>We utilize cutting-edge tools to keep you ahead of cyber threats.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
