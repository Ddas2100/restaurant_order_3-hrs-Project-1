import React, { useState } from 'react';

function OrderForm({ onOrderSubmit }) {
  const [orderId, setOrderId] = useState('');
  const [dish, setDish] = useState('');
  const [quantity, setQuantity] = useState('');
  const [tableNumber, setTableNumber] = useState(1);

  const handleOrderSubmit = () => {
    const order = {
      orderId: Number(orderId),
      dish,
      quantity: Number(quantity),
      tableNumber,
    };

    onOrderSubmit(order);

    // Clear the form fields
    setOrderId('');
    setDish('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Order Form</h2>
      <div>
        <label>
          Order ID:
          <input type="number" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Dish:
          <input type="text" value={dish} onChange={(e) => setDish(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Table Number:
          <select value={tableNumber} onChange={(e) => setTableNumber(e.target.value)}>
            <option value="1">Table 1</option>
            <option value="2">Table 2</option>
            <option value="3">Table 3</option>
          </select>
        </label>
      </div>
      <button onClick={handleOrderSubmit}>Submit</button>
    </div>
  );
}

export default OrderForm;
