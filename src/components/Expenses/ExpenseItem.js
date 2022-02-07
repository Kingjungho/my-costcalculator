import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [item, setItem] = useState(props.title);

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{item}</h2>
        <div className='expense-item__price'>{props.amount}원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;