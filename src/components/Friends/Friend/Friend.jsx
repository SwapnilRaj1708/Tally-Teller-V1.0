import React from 'react';
import "./Friend.css"
import PersonIcon from '@mui/icons-material/Person';


export default function Friend() {
    return (
        <button className='btn friend tooltip-friend' >
            <PersonIcon /><span class="tooltiptext">Tooltip text</span>
        </button>
    )
}
