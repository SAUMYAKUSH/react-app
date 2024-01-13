import Card from "../UI/card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020"); //date select krne k bad waps ye compo chale isliye state
  const filterChangeHandler = (selectedYear) => {
    // jo bhi target year value thi use selectedYear me as a param. liye
    setFilteredYear(selectedYear); // aur fir usi selected date ko filteredYear me set kr diye
  };
  const filteredExpenses = props.items.filter((expenses) => {
    // props.item me filter lagaye aur expenses variable le liye per props.items array ke liye isiliye ab props.item ko expenses se denote kiye niche
    
    return expenses.date.getFullYear().toString() === filteredYear; // agar ye true hota h to jo bhi filtered ya selected year select kiye usi year ke sare value filter hoke year wise filteredExpenses me store ho gye aur niche map function chala diye isi filtered year wise array ke liye taki jis year ka bhi ho wahi bs show ho
  });
 console.log(filteredExpenses)
 console.log(filteredYear)
  return (
    <div>
    <Card className="expenses">
        
      {filteredExpenses.map((obj,index) => (
        <ExpenseItem
          title={obj.title}
          amount={obj.amount}
          date={obj.date}
          key={index}
          LocationOfExpenditure={obj.LocationOfExpenditure}
        ></ExpenseItem>
      ))}

      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
       
    </Card>
    </div>
  );
};

export default Expenses;