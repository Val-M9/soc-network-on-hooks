import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, toggleFollowing } from "../../redux/actions/users";
import style from "./users.module.css";
import User from "./User";
import Paginator from "../../components/paginator/Paginator";

export default function Users() {
  const dispatch = useDispatch();
  const { users, currentPage, quantityOnPage, totalCount } = useSelector(({ usersPage }) => {
    return {
      users: usersPage.users,
      currentPage: usersPage.currentPage,
      quantityOnPage: usersPage.quantityOnPage,
      totalCount: usersPage.totalCount,
    };
  });

  useEffect(() => {
    dispatch(fetchUsers(currentPage, quantityOnPage));
  }, [dispatch, currentPage, quantityOnPage]);

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
