import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import "./AddFriend.css";
// import Friends from '../Friends';

export default function AddFriend(props) {

    const [isActive, setIsActive] = useState(false);
    const handleSubmit = () => {
        const input = document.getElementById("newFriend");
        // console.log(input.value)
        if ((input.value) !== "") {
            props.newFriend(input.value);
        setIsActive(false);
        }
    }

    return (
        <>
            <div className={"create-friend " + (isActive ? "" : "hide-box")}>
                <h4>Add a friend </h4>
                <input type="text" name="friend" id="newFriend" placeholder='Enter a name' />
                <div className="btn-container">
                    <div><button onClick={() => {
                        const int = document.getElementById("newFriend");
                        int.value = "";
                        setIsActive(false);
                        // if (int === null);
                        // else
                        // props.newFriend(int);
                    }} className="btn btn-sm btn-secondary">Cancel</button></div>
                    <div><button onClick={() => handleSubmit()} className="btn btn-sm add-btn">Add</button></div>
                </div>
            </div>
            <button onClick={() => { setIsActive(!isActive) }} className='btn friend tooltip-friend' >
                <AddIcon /><span className="new-tooltiptext">Add a friend</span>
            </button>
        </>
    )
}
