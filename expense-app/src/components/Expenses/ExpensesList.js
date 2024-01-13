import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
const ExpensesList = props => {

    if (props.items.length === 0 ){
        return <h2 className="expenses-List fallback">Found no expenses.</h2>
    }
   
    return <ul className="expenses-list">
      {props.items.map((obj,index) => (
         <ExpenseItem
            title={obj.title}
            amount={obj.amount}
            date={obj.date}
            key={index}
            LocationOfExpenditure={obj.LocationOfExpenditure}
          ></ExpenseItem> 
          ))}
    </ul>
};

export default ExpensesList;