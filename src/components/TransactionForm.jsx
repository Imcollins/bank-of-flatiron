// Import necessary modules and hooks from React
import React, { useState } from 'react';

// Define TransactionForm component
const TransactionForm = ({ onAddTransaction }) => {
  // Define State variables for description, amount, date and category
  const [date, setDate] = useState(''); // Date state
  const [description, setDescription] = useState(''); // Description state
  const [category, setCategory] = useState(''); // Category state
  const [amount, setAmount] = useState(''); // Amount state
  
  

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Call the onAddTransaction function passed as prop with transaction data
    onAddTransaction({ date, description, category, amount })
    // Reset state variables to clear the form inputs
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  // JSX for the form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Date input */}
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        {/* Description input */}
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        {/* Category input */}
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>

        {/* Amount input */}
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        {/* Submit button */}
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;