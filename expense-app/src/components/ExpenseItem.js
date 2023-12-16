import "./ExpenseItem.css"

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'food';
  const expenseAmount = 10;
  const LocationOfExpenditure = "Prayagraj";
  return (
    <div className="expense-item">
      <div>
        <h1>Expense Items</h1>
      </div>
      <div style={{display:"flex","flex-direction":"column"}}>

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">Rs{expenseAmount}</div>
        <div className="expense-item__price">{LocationOfExpenditure}</div>
      </div>
      <div className="expense-item__description">
        <h2>Petrol</h2>
        <div className="expense-item__price">Rs{expenseAmount}</div>
      </div>
      
    </div>
    </div>
  );
}

export default ExpenseItem; 
