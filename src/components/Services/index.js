import React from 'react';
import './index.css';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2>Services</h2>
      <div className="service-item">
        <h3>High Speed Internet</h3>
        <p>Optical fiber connections provided not only in your cabins but in all scenic working spaces and dining areas.</p>
      </div>
      <div className="service-item">
        <h3>Transportation</h3>
        <p>Reliable transport services for convenient travel within Ladakh.</p>
      </div>
      <div className="service-item">
        <h3>Homely Stay</h3>
        <p>Spacious interiors, comfortable beds, and well-equipped kitchens for a seamless work-life balance.</p>
      </div>
      <div className="service-item">
        <h3>Food Delivery</h3>
        <p>Healthy breakfasts and pleasant dinners serviced at your space, with options for additional paid orders.</p>
      </div>
    </section>
  );
};

export default Services;
