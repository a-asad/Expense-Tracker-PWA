import React from 'react';
import {context} from './context';

function History() {
    let {transactions, dispatch} = React.useContext(context);

    function deleteTransaction(e:React.MouseEvent<HTMLButtonElement>){
        dispatch({delIndex:parseInt(e.currentTarget.id), type:"remove"});
    }
  return (
    <div className="history">
      <h3>Transaction History</h3>
      <hr/>
          {transactions.length === 0?"No transactions added yet!":
        transactions.map((trans:any, id:any) =>{
            return (
                <div key={id} className={`historyItems ${trans.amount>=0?"historyIncome":"historyExpense"}`}>
                    <span>{trans.desc}</span>
                    <span>${trans.amount}
                        <span id={id} onClick={deleteTransaction} className={`${trans.amount>=0?"deleteBtnIncome":"deleteBtnExpense"}`}>X</span>
                    </span>
                </div>
            )
        })}
    </div>
  );
}

export default History;
