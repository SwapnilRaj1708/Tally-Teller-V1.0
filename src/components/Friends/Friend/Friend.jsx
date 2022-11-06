import React from 'react';
import "./Friend.css"
import PersonIcon from '@mui/icons-material/Person';


export default function Friend(props) {
    if (props.friendName === "Swapnil")
        return;
    else
        return (
            <button className='btn friend tooltip-friend' >
                <PersonIcon /><span className="tooltiptext">{props.friendName}</span>
            </button>
        )
}
