import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions/users";

export default function useUsers() {
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
  return { users, currentPage, quantityOnPage, totalCount };
}
