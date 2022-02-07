import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = props => {
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

  const submitHandler = e => {
    e.preventDefault()

    const expenseData = {
      title: enteredForm.title,
      amount: +enteredForm.amount,
      date: new Date(enteredForm.date),
    }
    props.onSaveExpenseData(expenseData)
    setEnteredForm({
      title: '',
      amount: '',
      date: '',
    })
  }

  const cancleHandler = () => {
    props.onHideBtn(false)
  }

  const hideFormHandler = () => {
    if (
      enteredForm.title === '' ||
      enteredForm.amount === '' ||
      enteredForm.date === ''
    ) {
      alert('값을 전부 입력해주세요 !')
      return
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={enteredForm.title}
            onChange={formChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredForm.amount}
            onChange={formChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredForm.date}
            onChange={formChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={cancleHandler}>Cancel</button>
        <button onClick={hideFormHandler}>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
