import axios from "axios";
import { setIsFetching, setRepos, setUser } from "../../reducers/reposReducer";

export const getRepos = (user, perPage, currentPage) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const resRepos = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=${perPage}&page=${currentPage}`
      );
      dispatch(setRepos(resRepos.data));
      
      const resUser = await axios.get(
        `https://api.github.com/users/${user}`
      );
      dispatch(setUser(resUser.data));
      dispatch(setIsFetching(false));
    } catch (e) {
      dispatch(setIsFetching(false));
    }
  };
};
