import React, { useState, useContext } from 'react';
import { FriendSContext } from '../../../../contexts/FriendsContext';
import "./Header.css";
import Payer from './Payer';

export default function Header(props) {

    const { friendList, setFriendList } = useContext(FriendSContext);
    const currentGroup = "Roommates";
    const [isActive, setIsActive] = useState(false);

    function handleSubmit() {

        var select = document.getElementById('payer');
        var payer = select.options[select.selectedIndex].text;
        const desc = document.getElementById("expense-desc").value;
        const amt = document.getElementById("expense-amt").value;
        if (desc !== "" && amt !== "") {
            const date = new Date();
            const month = date.getUTCMonth();
            const day = date.getDate();
            let monthEng = "JAN"
            switch (month) {
                case 0: monthEng = "JAN"; break;
                case 1: monthEng = "FEB"; break;
                case 2: monthEng = "MAR"; break;
                case 3: monthEng = "APR"; break;
                case 4: monthEng = "MAY"; break;
                case 5: monthEng = "JUN"; break;
                case 6: monthEng = "JUL"; break;
                case 7: monthEng = "AUG"; break;
                case 8: monthEng = "SEPT"; break;
                case 9: monthEng = "OCT"; break;
                case 10: monthEng = "NOV"; break;
                case 11: monthEng = "DEC"; break;
                default: monthEng = "JAN"; break;
            }
            const share = (amt / friendList.length).toFixed(2);
            const obj = {
                id: Math.round(Math.random() * 10000000),
                expenseName: desc,
                payer: payer,
                payerAmount: amt,
                share: payer !== "Swapnil" ? (-share) : (share * (friendList.length - 1)),
                dateMonth: monthEng,
                dateDate: day
            }
            props.addition(obj);

            setFriendList(prevValue => {
                return prevValue.filter((item) => {
                    if (item.name === payer) {
                        item.share = Number(item.share) + Number(([share * (friendList.length - 1)]));
                    }
                    else {
                        item.share -= [share];
                    }
                    return true;
                })
            })
            document.getElementById("expense-desc").value = "";
            document.getElementById("expense-amt").value = "";
            setIsActive(false)
        }
    }

    function createPayer(props) {
        return <Payer key={props.id} name={props.name} />;
    }

    return (
        <div className="header-outer">
            <div className="header">
                <div className="group-heading">{currentGroup}</div>
                <div className="tally-buttons">
                    <button className='btn add-expenses shadow-sm' onClick={() => setIsActive(!isActive)}>Add Expenses</button>
                    <button className='btn settle-up shadow-sm'>Settle Up</button>
                </div>
            </div>
            <div className={'add-expense shadow-lg centered ' + (isActive ? "" : "hide-expense")}>
                <div className='centered header-container'>
                    <h3>Add an expense</h3>
                </div>
                <div className='centered expense-container'>
                    <div className='enter-description centered'>
                        <input id='expense-desc' type="text" name="descrition" placeholder='Enter Description' />
                    </div>
                    <div className="centered amount-container">
                        <div className='enter-amount centered'>
                            <input id='expense-amt' type="number" name="amount" min="1" max="100000" placeholder='enter amount' />
                        </div>
                        <div className='centered'>
                            <select id="payer" defaultValue={1} className="form-select" aria-label="Default select example">
                                {friendList.map(createPayer)}
                            </select>
                        </div>
                    </div>


                </div>
                <div className='centered button-container'>
                    <button onClick={() => {
                        document.getElementById("expense-desc").value = "";
                        document.getElementById("expense-amt").value = "";
                        setIsActive(false)
                    }} className="btn btn-secondary">Cancel</button>
                    <button onClick={() => handleSubmit()} className="exp-submit-btn btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    )
}
