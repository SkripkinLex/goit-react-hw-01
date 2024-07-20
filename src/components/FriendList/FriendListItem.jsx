import React from 'react'
import clsx from 'clsx';
import './FriendList.css'

const FriendListItem = ({image, name, status}) => {
  return (
    <div>
  <img src={image} alt="Avatar" width="48" />
          <p>{name}</p>
      <p className={clsx(
       status === "Online" ? "isOnline" : "isOffline"
      )}>
        {status}</p>
</div>
  )
}

export default FriendListItem