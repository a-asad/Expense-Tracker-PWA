import React from 'react';
import { context } from './context';

function Header() {
    const {transactions} = React.useContext(context);
 function getBalance(){
     let bal=0;
     for(let i in transactions)
         bal+=parseInt(transactions[i].amount);
    return bal;
 }
  return (
      <div className="header">
          <h1>
        Expense Tracker
        </h1>
        <h2>Balance : ${getBalance()}</h2>
      </div>
  );
}

export default Header;
