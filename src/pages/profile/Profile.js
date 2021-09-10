import Posts from "./my-posts/Posts";
import ProfileInfo from "./profile-info/ProfileInfo";
import style from "./profile.module.css";

export default function Profile() {
  return (
    <div className={style.wrapper}>
      <ProfileInfo />
      <Posts />
    </div>
  );
}
