import React from 'react';
import { transReducer } from './reducer';

let transactions:any = []

export const context = React.createContext(transactions);

export const TransactionProvider = ({children}:any)=>{
  let [red, dispatch] = React.useReducer(transReducer, transactions);
  return(
    <context.Provider value={{transactions:red, dispatch}}>
      {children}
    </context.Provider>
  )
}