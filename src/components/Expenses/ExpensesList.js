import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ filterExpense }) => {
  if (filterExpense.length === 0) {
    return <h2 className="expenses-list__fallback">The list does not exist.🤣</h2>
  }

  return (
    <ul className="expenses-list">
      {filterExpense.map(el => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </ul>
  )
}

export default ExpensesList
