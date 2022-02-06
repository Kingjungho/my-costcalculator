import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [enteredForm, setEnteredForm] = useState({
    title: '',
    amount: '',
    date: '',
  })

  const formChangeHandler = e => {
    const { name, value } = e.target
    setEnteredForm({
      ...enteredForm,
      [name]: value,
    })
  }
console.log(enteredForm);

  const plusItem = () => {
    [...props, {
      enteredForm
    }]
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={formChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input name="amount" type="number" min="0.01" step="0.01" onChange={formChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input name="date" type="date" min="2019-01-01" max="2022-12-31" onChange={formChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={plusItem}>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
