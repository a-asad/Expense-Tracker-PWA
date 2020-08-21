import React from 'react';
import Header from './header';
import './App.css'
import Total from './total';
import History from './history';
import AddTransaction from './AddTransaction';
import { TransactionProvider } from './context';

function App() {
  return (
    <TransactionProvider>
      <div className="mn">
      <div className="main">
      <Header></Header>
      <Total></Total>
      <History></History>
      <AddTransaction></AddTransaction>
    </div>
    </div>
    </TransactionProvider>
  );
}

export default App;