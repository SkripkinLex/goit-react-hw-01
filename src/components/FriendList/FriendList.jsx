import React from 'react'
import FriendListItem from "./FriendListItem";

import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friendItem}>
            <FriendListItem friends={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;