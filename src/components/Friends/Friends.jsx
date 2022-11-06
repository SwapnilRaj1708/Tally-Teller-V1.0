import React, { useContext } from 'react'
import AddFriend from './Friend/AddFriend';
import Friend from './Friend/Friend'
import "./Friends.css";
import { FriendSContext } from '../../contexts/FriendsContext';

export default function Friends(props) {

  const { friendList, setFriendList } = useContext(FriendSContext);

  const newFriend = (name) => {
    const share = 0;
    const key = Math.round(Math.random() * 100000000);
    setFriendList(prevValue => {
      return [...prevValue, { key, name, share }];

    }
    )
  }

  function createFriend(props) {
    return <Friend key={props.id} friendName={props.name} />
  }

  return (
    <div className="friends shadow">
      <AddFriend newFriend={newFriend} />
      {friendList.map(createFriend)}
    </div>
  )
}
