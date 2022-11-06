import React from 'react';
import Group from './Group/Group';
import "./Groups.css";
import groupList from './GroupList';

export default function Groups() {

  function createGroup(props) {
    return <Group key={props.id} groupName={props.groupName} />
  }

  return (
    <div className="groups shadow">
      {groupList.map(createGroup)}
    </div>
  )
}
