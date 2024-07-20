import css from "./Profile.module.css"
const Profile = ({ name, tag, location, image, stats }) => {
  return (
		<div className={css.wrapper}>
			<div className={css.userWrapper}>
				<img
					className={css.img}
					src={image}
					alt='User avatar'
				/>
				<p className={css.userName}>{name}</p>
				<p className={css.userInfo}>@{tag}</p>
				<p className={css.userInfo}>{location}</p>
			</div>

			<ul className={css.socialList}>
				<li className={css.socialInfo}>
					<span className={css.socialName}>{Object.keys(stats)[0]}</span>
					<span className={css.socialNumber}>{stats.Followers}</span>
				</li>
				<li className={css.socialInfo}>
					<span className={css.socialName}>{Object.keys(stats)[1]}</span>
					<span className={css.socialNumber}>{stats.Views}</span>
				</li>
				<li className={css.socialInfo}>
					<span className={css.socialName}>{Object.keys(stats)[2]}</span>
					<span className={css.socialNumber}>{stats.Likes}</span>
				</li>
			</ul>
		</div>
	);
};

export default Profile;