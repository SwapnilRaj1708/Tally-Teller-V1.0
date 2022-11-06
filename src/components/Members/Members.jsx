import React, { useContext } from 'react';
import Member from './Member/Member';
import "./Members.css";
import { FriendSContext } from '../../contexts/FriendsContext';

export default function Members() {

  const { friendList } = useContext(FriendSContext);

  const createMembers = (props) => {
    return <Member key={props.id} name={props.name} share={props.share} />
  }

  return (
    <>
      <div className='members'>
        <div className="sticky-div">
          <p>Members</p>
          {friendList.length===0?"Add a friend":""}
          {friendList.map(createMembers)}
        </div>
      </div>
    </>
  )
}
