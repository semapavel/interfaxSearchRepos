const SET_REPOS = "SET_REPOS";
const SET_USER = "SET_USER";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FIRST_ROW_REPO = "SET_FIRST_ROW_REPO"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const defaultState = {
  items: [],
  user: {},
  isFetching: false,
  currentPage:1,
	perPage:10,
  firstRowRepo:['Наименование', 'Язык программирования', 'Описание', 'Количество звезд']
};

export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload,
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload,
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
      case SET_FIRST_ROW_REPO:
      return {
        ...state,
        firstRowRepo: action.payload,
      }
    default:
      return state;
  }
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool });
export const setFirstRowRepo = (firstRowRepo) => ({ type: SET_FIRST_ROW_REPO, payload: firstRowRepo });
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload:page});


