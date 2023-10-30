import React, { useState } from 'react';

const OrderForm = ({ addOrder, onFormSubmit }) => {
  const [orderId, setOrderId] = useState('');
  const [dish, setDish] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [tableNumber, setTableNumber] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      orderId,
      dish,
      quantity,
      price,
      tableNumber,
    };

    addOrder(order);
    // Store data in local storage
    const orders = JSON.parse(localStorage.getItem(`table${tableNumber}`)) || [];
    orders.push(order);
    localStorage.setItem(`table${tableNumber}`, JSON.stringify(orders));

    // Clear input fields
    setOrderId('');
    setDish('');
    setQuantity('');
    setPrice('');

    // Notify the parent component (App.js) that the form has been submitted
    onFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Order ID:
        <input type="number" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      </label>
      <label>
        Dish:
        <input type="text" value={dish} onChange={(e) => setDish(e.target.value)} />
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Table Number:
        <select value={tableNumber} onChange={(e) => setTableNumber(e.target.value)}>
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
        </select>
      </label>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
