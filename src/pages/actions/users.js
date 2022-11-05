import axios from "axios";
import {
  setIsFetching,
  setFetchError,
  setUsers
} from "../../reducers/usersReducer";

export const getUsers = (searchQuery, currentPage, perPage) => {
  if (searchQuery == "") {
    searchQuery = "followers:%3E0";
  }

  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchQuery}&per_page=${perPage}&page=${currentPage}`
      );
      dispatch(setUsers(response.data));
    } catch (e) {
      dispatch(setIsFetching(false));
      dispatch(setFetchError(true));

      setTimeout(() => {
        dispatch(setFetchError(false));
      }, 2000);
    }
  };
};
