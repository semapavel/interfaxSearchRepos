const SET_COMMITS = "SET_COMMITS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FIRST_ROW_COMMIT = "SET_FIRST_ROW_COMMIT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const defaultState = {
  commits:[],
  isFetching: false,
  currentPage:1,
	perPage:10,
  firstRowCommit:['Автор', 'Хэш коммита', 'Дата']
};

export default function commitsReducer(state = defaultState, action) {
  switch (action.type) {
      case SET_COMMITS:
      return {
        ...state,
        commits: action.payload,
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }
      case  SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload
        }
      case SET_FIRST_ROW_COMMIT:
        return {
          ...state,
          firstRowCommit: action.payload,
        }
    default:
      return state;
  }
}

export const setCommits = (commits) => ({ type: SET_COMMITS, payload: commits });
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool });
export const setFirstRowCommit = (firstRowCommit) => ({ type: SET_FIRST_ROW_COMMIT, payload: firstRowCommit });
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload:page});

