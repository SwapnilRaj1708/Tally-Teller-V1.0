import React from 'react';
import "./Group.css";
import GroupsIcon from '@mui/icons-material/Groups';

export default function Group(props) {
    return (
        <button className='btn group tooltip-group' >
            <GroupsIcon /><span className="tooltiptext">{props.groupName}</span>
        </button>
    )
}
