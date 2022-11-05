import axios from "axios";
import {
  setCommits,
  setIsFetching,
} from "../../reducers/commitsReducer";

export const getCommits = (user, repoName, perPage, currentPage) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const resCommits = await axios.get(
        `https://api.github.com/repos/${user}/${repoName}/commits?per_page=${perPage}&page=${currentPage}`
      );
      dispatch(setCommits(resCommits.data));
      dispatch(setIsFetching(false));
    } catch (e) {
      dispatch(setIsFetching(false));
    }
  };
};
