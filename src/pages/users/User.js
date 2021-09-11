import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/userPhoto.png";

import style from "./users.module.css";

export default function User({ user, onToggleFollowing }) {
  return (
    <div className={style.userBlock}>
      <NavLink to={`/profile/${user.id}`} className={style.user}>
        <img src={user.photos.small ? user.photos.small : userPhoto} alt="user avatar" />
        <div className={style.name}>{user.name}</div>
      </NavLink>
      <div>
        <button
          className={user.followed ? `${style.unfollowBtn}` : `${style.followBtn}`}
          onClick={() => onToggleFollowing(user.id, user.followed)}>
          {user.followed ? " - UNFOLLOW" : "+ FOLLOW"}
        </button>
      </div>
    </div>
  );
}
