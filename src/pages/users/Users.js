import { useDispatch } from "react-redux";
import { fetchUsers, toggleFollowing } from "../../redux/actions/users";
import User from "./User";
import Paginator from "../../components/paginator/Paginator";
import useUsers from "../../hooks/useUsers";
import style from "./users.module.css";

export default function Users() {
  const { users, currentPage, quantityOnPage, totalCount } = useUsers();
  const dispatch = useDispatch();

  const onChangePage = (pageNumber) => {
    dispatch(fetchUsers(pageNumber, quantityOnPage));
  };

  const onToggleFollowing = (userId, isFollowed) => {
    dispatch(toggleFollowing(userId, isFollowed));
  };

  return (
    <>
      <div className={style.wrapper}>
        {users.map((user) => (
          <User key={user.id} user={user} onToggleFollowing={onToggleFollowing} />
        ))}
      </div>
      <div className={style.paginator}>
        <Paginator
          onChangePage={onChangePage}
          currentPage={currentPage}
          quantityOnPage={quantityOnPage}
          totalCount={totalCount}
        />
      </div>
    </>
  );
}
