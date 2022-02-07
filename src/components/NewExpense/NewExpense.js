import './NewExpense.css'

import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = props => {
  const [showForm, setShowForm] = useState(false)
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }
  const showFormHandler = () => {
    setShowForm(true)
  }
  const hideFormHandler = hide => {
    setShowForm(hide)
  }
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideBtn={hideFormHandler}  />
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  )
}

export default NewExpense
