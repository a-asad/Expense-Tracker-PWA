import React from 'react';
import { context } from './context';

function Total() {
const {transactions} = React.useContext(context);
 function getIncome(){
     let income=0; 
     for(let i in transactions)
        if(parseInt(transactions[i].amount) > 0)
         income+=parseInt(transactions[i].amount);
    return income;
 }
 function getExpense(){
    let exp=0; 
    for(let i in transactions)
       if(parseInt(transactions[i].amount) < 0)
        exp+=parseInt(transactions[i].amount);
   return -exp;
}
  return (
    <div className="total">
      <div className="income">
        Income
  <div className="total-amount">${getIncome()}</div>
      </div>
      <div className="expense">
        Expense
  <div className="total-amount">${getExpense()}</div>
      </div>
    </div>
  );
}

export default Total;
