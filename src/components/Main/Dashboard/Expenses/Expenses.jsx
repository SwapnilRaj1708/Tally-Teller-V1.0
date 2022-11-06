import React from 'react';
import "./Expenses.css";

export default function Expenses(props) {


    return (
        <div className='expense'>
            <div className="datestamp"><div className="month">{props.dateMonth}</div><div className="date">{props.dateDate}</div></div>
            <div className="expense-name"><span>{props.expenseName}</span></div>
            <div className="payer-detail"><div className="name"><span>{props.payer}</span><span>payed</span></div><div className="amount">{props.payerAmount}</div></div>
            <div className="your-share"><div className="name"><span>Your share</span></div><div id='share-amount' className="amount" style={{color: (props.share<0)?"orange":"#48be9d"}}>{props.share}</div></div>
        </div>
    )
}
