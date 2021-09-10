import style from "./header.module.css";
import envelope from "../../assets/img/envelope.png";
import home from "../../assets/img/home.png";
import contacts from "../../assets/img/contacts.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.pages}>
        <NavLink to={"/profile"} className={style.item} activeClassName={style.activeLink}>
          <img className={style.image} src={home} alt="home" /> Home
        </NavLink>
        <NavLink to={"/messages"} className={style.item} activeClassName={style.activeLink}>
          <img className={style.image} src={envelope} alt="messages" /> Messages
        </NavLink>
        <NavLink to={"/users"} className={style.item} activeClassName={style.activeLink}>
          <img className={style.image} src={contacts} alt="contacts" /> Contacts
        </NavLink>
      </div>
      <h5>Logout</h5>
    </div>
  );
}
