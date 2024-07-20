import React from 'react'
import FriendListItem from './FriendListItem'





const FriendList = ({ friends }) => {
  return (
      <ul className='fiendList'>
          {friends.map((friend) => {
              return (
                <li className='FriendListItem'>
                  <FriendListItem
                    key={friend.id}
                    name={friend.name}
                    image={friend.avatar}
                    status={friend.isOnline ? "Online" : "Offline"}
      id={friend.id}
                  />
	</li>)
          })}
	
</ul>)
  
}

export default FriendList