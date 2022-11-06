import React from 'react';
import "./Member.css";

export default function Member(props) {

    const amt=props.share;
    console.log("amount = "+amt)
    console.log("typeof = "+typeof(amt));
    var textColor = "black"
    if(amt === 0)
        textColor = "black";
    else if(amt>0)
        textColor = "#48be9d"
    else
        textColor = "orange";
    return (
        <div className='member'>
            <span className='member-name'>{props.name}</span>
            <div>
                <span className='member-cond' style={{ color: textColor }}>{(amt === 0) ? "owes nothing" : ((amt>0)?"gets back":"owes")}</span> <span className='member-amount' style={{ color: textColor }}>{(amt === 0) ? "" :("₹"+[Math.abs(amt)])}</span>
            </div>
        </div>
    )
}
