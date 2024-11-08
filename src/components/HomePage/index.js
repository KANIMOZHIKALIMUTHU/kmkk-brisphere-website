import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Discover from '../Discover';
import Services from '../Services';
import './index.css'; // Include CSS for the home page

const HomePage = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);

  const handleBookButtonClick = () => {
    navigate('/order-form', {
        state: { checkIn, checkOut } // Pass dates as state
      });
  };

  const increaseRooms = () => {
    setRooms(rooms + 1);
  };

  const decreaseRooms = () => {
    if (rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  return (
    <div>
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Work from Ladakh</h1>
          <p>India’s first true digital tourism ecosystem</p>
          <div className="booking-info">
            <div className="date-picker">
              <label>CHECK-IN</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
            </div>
            <div className="date-picker">
              <label>CHECK-OUT</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
            </div>
            <div className="room-counter">
              <label>ROOMS</label>
              <div className="counter-controls">
                <button onClick={decreaseRooms}>−</button>
                <span>{rooms}</span>
                <button onClick={increaseRooms}>+</button>
              </div>
            </div>
            <button className="book-button" onClick={handleBookButtonClick}>BOOK</button>
          </div>
        </div>
      </section>
      <Discover />
      <Services />
    </div>
  );
};

export default HomePage;
