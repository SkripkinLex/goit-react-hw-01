import css from "./FriendList.module.css";

const FriendListItem = ({ friends }) => {
  return (
    <div className={css.friendCard}>
      <img src={friends.avatar} alt="Avatar" width="48" />
      <p className={css.friendCardTitle}>{friends.name}</p>
      <p className={css.friendCardTex}>
        {friends.isOnline === true ? (
          <span className={css.friendIsOnline}>online</span>
        ) : (
          <span className={css.friendOffLine}>ofline</span>
        )}
      </p>
    </div>
  );
};

export default FriendListItem;