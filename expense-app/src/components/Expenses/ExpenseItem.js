import React from "react";
import Card from "../UI/card";
import Expensedate from "./Expensedate";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
 
  return (
    <Card className="expense-item">
      <Expensedate date={props.date}></Expensedate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs{props.amount}</div>
        <div className="expense-item__place">{props.LocationOfExpense}</div>
        
      </div>
      
    </Card >
  );
}

export default ExpenseItem; 
