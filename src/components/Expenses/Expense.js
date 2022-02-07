import ExpensesList from './ExpensesList'
import './Expense.css'
import NewExpense from '../NewExpense/NewExpense'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
function Expense() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  const [filteredYear, setFilteredYear] = useState('2020')
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const filterChangeHandler = filterDate => {
    setFilteredYear(filterDate)
  }

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => [...prevExpense, expense])
  }

  const filteredExpenses = DUMMY_EXPENSES.filter(
    expense => expense.date.getFullYear() === Number(filteredYear)
  )

  return (
    <li>
      <NewExpense expenses={DUMMY_EXPENSES} onAddExpense={addExpenseHandler} />
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList filterExpense={filteredExpenses} />
      </div>
    </li>
  )
}

export default Expense
