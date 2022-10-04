import React from 'react';
import "./Group.css";
import GroupsIcon from '@mui/icons-material/Groups';

export default function Group() {
    return (
        <button className='btn group tooltip-group' >
            <GroupsIcon /><span class="tooltiptext">Tooltip text</span>
        </button>
    )
}
