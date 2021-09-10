import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/userPhoto.png";
import style from "./users.module.css";

export default function User({ user }) {
  return (
    <>
      <NavLink to={`/profile/${user.id}`} className={style.user}>
        <img src={user.photos.small ? user.photos.small : userPhoto} alt="user avatar" />
        <div className={style.name}>{user.name}</div>
      </NavLink>
    </>
  );
}
