import Card from "../UI/card";
import Expensedate from "./Expensedate";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
 const clickHandler =() =>{
  console.log('Clicked!!!');
 }
  return (
    <Card className="expense-item">
      <Expensedate date={props.date}></Expensedate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs{props.amount}</div>
        <div className="expense-item__place">{props.LocationOfExpense}</div>
        
      </div>
      <button onClick={clickHandler}>Change Title</button>
      
    </Card >
  );
}

export default ExpenseItem; 
