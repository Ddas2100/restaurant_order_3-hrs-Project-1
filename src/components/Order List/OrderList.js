import React from 'react';

const OrderList = ({ tableNumber, onDeleteOrder }) => {
  // Retrieve orders from local storage
  const orders = JSON.parse(localStorage.getItem(`table${tableNumber}`)) || [];

  const handleDelete = (index) => {
    // Delete the order at the specified index and update local storage
    orders.splice(index, 1);
    localStorage.setItem(`table${tableNumber}`, JSON.stringify(orders));
    onDeleteOrder();
  };

  return (
    <div>
      <h2>Table {tableNumber} Orders:</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            Order ID: {order.orderId}, Dish: {order.dish}, Quantity: {order.quantity}, Price: {order.price}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
