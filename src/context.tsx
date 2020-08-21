import React from 'react';
import { transReducer } from './reducer';

let transactions:transaction[] = []

export const context = React.createContext<context>({transactions:transactions, dispatch:null});

export const TransactionProvider = ({children}:any)=>{
  let [red, dispatch] = React.useReducer(transReducer, transactions);
  return(
    <context.Provider value={{transactions:red, dispatch}}>
      {children}
    </context.Provider>
  )
}