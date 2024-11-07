import React, { useState } from 'react';
import axios from 'axios';

const Contact = ({ contactRef }) => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/appointments', formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', date: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to submit. Please try again.');
    }
  };

  return (
    <section ref={contactRef} className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          placeholder="Additional Comments"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      {status && <p className="mt-4 text-green-500">{status}</p>}
    </section>
  );
};

export default Contact;
