import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import './App.css'

// App component
const App = () => {
  const [transactions, setTransactions] = useState([
    {
      "id": 1,
      "date": "2024-04-29",
      "description": "Versace",
      "category": "Clothing",
      "amount": "kshs 5500"
    },
    {
      "id": 2,
      "date": "2024-04-30",
      "description": "Vintage Leather Messenger Bag",
      "category": "Fashion/Accessories",
      "amount": "Kshs 2600"
    },
    {
      "id": 3,
      "date": "2024-04-29",
      "description": "Portable External Hard Drive (2TB)",
      "category": "Electronics",
      "amount": "Kshs 2500"
    },
    {
      "id": 4,
      "date": "2024-04-12",
      "description": "Yoga Mat and Accessories Set",
      "category": "Sport and Fitness/Yoga",
      "amount":"Kshs 4300"
    },
    {
      "id": 5,
      "date": "2024-04-26",
      "description": "Wireless Bluetooth Headphones",
      "category": "Electronics/Audio",
      "amount":"Kshs 3800"
    },
    {
      "date": "2024-02-25",
      "description": "Smart Wi-Fi Plug",
      "category": "Electronics",
      "amount": "Kshs 2000",
      "id": 6
    },
    {
      "date": "2024-04-25",
      "description": "Money Heist",
      "category": "Movie",
      "amount": "Kshs 1100",
      "id": 7
    }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
// Function to add new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
 // Filter transactions based on search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
 // JSX for rendering the components
  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;