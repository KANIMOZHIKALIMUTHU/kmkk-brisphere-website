import React, { useState } from 'react';
import './index.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    rooms: 1,
    adults: 1,
    children: 0,
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Booking data submitted:', formData);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      alert('Order submitted successfully!');
      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit the order');
    }
  };

  return (
    <section className="order-form-section" id="orderform">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <label>Check-in Date</label>
        <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
        
        <label>Check-out Date</label>
        <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />

        <label>Rooms</label>
        <input type="number" name="rooms" min="1" value={formData.rooms} onChange={handleChange} required />

        <label>Adults</label>
        <input type="number" name="adults" min="1" value={formData.adults} onChange={handleChange} required />

        <label>Children</label>
        <input type="number" name="children" min="0" value={formData.children} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <button type="submit">Submit Order</button>
      </form>
    </section>
  );
};

export default OrderForm;
