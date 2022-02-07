import ExpensesList from './ExpensesList'
import './Expense.css'
import NewExpense from '../NewExpense/NewExpense'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import { useState } from 'react'

function Expense() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: '종이',
      amount: 300,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e2',
      title: '새로산 티비',
      amount: 360000,
      date: new Date(2022, 2, 12),
    },
    {
      id: 'e3',
      title: '새로산 자전거',
      amount: 160000,
      date: new Date(2022, 7, 28),
    },
    {
      id: 'e4',
      title: ' 식탁',
      amount: 45000,
      date: new Date(2020, 5, 12),
    },
  ]

  const [filteredYear, setFilteredYear] = useState('2022')
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const filterChangeHandler = filterDate => {
    setFilteredYear(filterDate)
  }

  const addExpenseHandler = expense => {
    setExpenses(prevExpense => [expense, ...prevExpense])
  }

  const filteredExpenses = expenses.filter(
    expense => expense.date.getFullYear() === +filteredYear
  )
  return (
    <li>
      <NewExpense expenses={expenses} onAddExpense={addExpenseHandler} />
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filterExpense={filteredExpenses} />
      </div>
    </li>
  )
}

export default Expense
