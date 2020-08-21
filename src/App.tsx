import React from 'react';
import Header from './header';
import './App.css'
import Total from './total';
import History from './history';
import AddTransaction from './AddTransaction';
import { TransactionProvider } from './context';
import firebase from './firebase';

function App() {
  const messaging=firebase.messaging();
  messaging.requestPermission().then(()=>{
    return messaging.getToken()
  }).catch((err)=>{console.log('Error',err)})
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