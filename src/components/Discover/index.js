import React from 'react';
import './index.css';

const testimonials = [
  {
    name: 'Arjun Raghav',
    review: `I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more`,
  },
  {
    name: 'Arjun Raghav',
    review: `I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more`,
  },
  {
    name: 'Arjun Raghav',
    review: `I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more`,
  },
  {
    name: 'Anand Solanki',
    review: `I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more`,
  },
];

const Discover = () => {
  return (
    <section className="discover-section" id="discover">
      <h1>Discover</h1>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.review}</p>
        </div>
      ))}
    </section>
  );
};

export default Discover;
