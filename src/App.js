import React, { useState, useEffect } from 'react';
import OrderForm from './components/Order Form/OrderForm';
import OrderList from './components/Order List/OrderList';
import './App.css';

function App() {
  const [showOrderLists, setShowOrderLists] = useState(false);
  const [orderDeleted, setOrderDeleted] = useState(false);
  const addOrder = (order) => {
    // This function will be passed to the OrderForm component to add new orders.
    // You can use this function to update the state or perform other actions.
  };

  const handleOrderDelete = () => {
    setOrderDeleted(!orderDeleted);
  };

  useEffect(() => {
    if (showOrderLists) {
      // Clear the order lists on each form submission
      setShowOrderLists(false);
    }
  }, [showOrderLists]);

  return (
    <div>
      <h1>Restaurant Order App</h1>

      <h2>Order Form</h2>
      <OrderForm addOrder={addOrder} onFormSubmit={() => setShowOrderLists(true)} />

      {showOrderLists && (
        <div>
          <OrderList tableNumber="1" onDeleteOrder={handleOrderDelete} />
          <OrderList tableNumber="2" onDeleteOrder={handleOrderDelete} />
          <OrderList tableNumber="3" onDeleteOrder={handleOrderDelete} />
        </div>
      )}
    </div>
  );
}

export default App;