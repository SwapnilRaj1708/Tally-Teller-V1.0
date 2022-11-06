import React, { useContext } from 'react';
import "./Dashboard.css";
import Expenses from './Expenses/Expenses';
import Header from './Header/Header';
import { ExpenseContext } from '../../../contexts/ExpenseContext';

export default function Dashboard() {

    const addition = (obj) => {
        setExpenseList(prevValue => {
            return [...prevValue, obj];
        })
    }
    const { expenseList, setExpenseList } = useContext(ExpenseContext);

    function createExpense(props) {
        return <Expenses
            key={props.id}
            expenseName={props.expenseName}
            payer={props.payer}
            payerAmount={props.payerAmount}
            share={props.share}
            dateMonth={props.dateMonth}
            dateDate={props.dateDate}
        />
    }
    if (expenseList.length === 0) {
        return <div className="dashboard shadow">
            <Header addition={addition} />
            <div className='default-expense expense'>
                No expenses to display
            </div>
        </div>
    }
    else {
        return (
            <div className="dashboard shadow">
                <Header addition={addition} />
                {expenseList.map(createExpense)}
            </div>
        )
    }
}
