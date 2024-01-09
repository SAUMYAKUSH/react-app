import React, { useState } from "react";
import Card from "../UI/card";
import Expensedate from "./Expensedate";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
 const[title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluatd by React');
 const clickHandler =() =>{
  setTitle('Updated!');
  console.log(title);
 };
  return (
    <Card className="expense-item">
      <Expensedate date={props.date}></Expensedate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs{props.amount}</div>
        <div className="expense-item__place">{props.LocationOfExpense}</div>
        
      </div>
      <button onClick={clickHandler}>Change Title</button>
      
    </Card >
  );
}

export default ExpenseItem; 
