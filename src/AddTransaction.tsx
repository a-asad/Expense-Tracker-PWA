import React, { useState } from 'react';
import { context } from './context';


function AddTransaction() {
    let {dispatch} = React.useContext(context);
    let [desc, setDesc] = useState("");
    let [amnt, setAmnt] = useState("");
    function setDescription(e:React.ChangeEvent<HTMLInputElement>)
    {
        setDesc(e.currentTarget.value);
    }
    function setAmount(e:React.ChangeEvent<HTMLInputElement>)
    {
        setAmnt(e.currentTarget.value);
    }
    function Add(){
        if(desc === "")
        {
            alert("Error! Enter a valid description!");
            return;
        }
        if(amnt === "" || parseInt(amnt) === 0)
        {
            alert("Error! Enter a valid amount!");
            return;
        }
        let trans = {desc:desc,amount:amnt};
        setDesc("");
        setAmnt("");
        dispatch({data:trans, type:"add"});
    }

  return (
    <div className="add-transaction">
      <h3>Add Transaction</h3>
      <hr/>
      <label htmlFor="desc">Description:</label>
      <input type="text" id="desc" placeholder="Enter description" value={desc} onChange={setDescription}/>
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" placeholder="-ive -> expense, +ive -> income" value={amnt} onChange={setAmount}/>
      <button className="btn" onClick={Add}>Add</button>
    </div>
  );
}

export default AddTransaction;
