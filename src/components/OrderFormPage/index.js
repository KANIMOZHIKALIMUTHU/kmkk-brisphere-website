import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import OrderForm from '../OrderForm';
import './index.css'; // Optional for additional styling

const OrderFormPage = () => {
  const location = useLocation();
  const { checkIn, checkOut } = location.state || {};
  return (
    <div>
      <Header />
      <section className="order-form-section">
        <OrderForm checkIn={checkIn} checkOut={checkOut} />
      </section>
    </div>
  );
};

export default OrderFormPage;
