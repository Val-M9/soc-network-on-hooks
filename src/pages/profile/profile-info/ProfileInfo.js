import { useEffect, useState } from "react";

import { profileAPI } from "../../../api/api";
import style from "../profile.module.css";

import userPhoto from "../../../assets/img/userPhoto.png";

export default function ProfileInfo() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    let response = async () => {
      const result = await profileAPI.getProfile(13003);
      if (result) {
        return setProfile(result.data);
      }
    };
    response();
  }, []);

  return (
    <>
      {profile && (
        <div className={style.profile}>
          {profile.photos && (
            <img
              className={style.photo}
              aria-label="avatar"
              src={profile.photos.large || userPhoto}
              alt="avatar"
            />
          )}
          <div>{profile.fullName}</div>
          <div>{profile.aboutMe}</div>
        </div>
      )}
    </>
  );
}
