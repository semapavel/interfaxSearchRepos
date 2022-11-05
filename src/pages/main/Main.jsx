import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getUsers } from "../actions/users";
import { setCurrentPage } from "../../reducers/usersReducer";
import User from "./user/User";
import Button from "../../components/button/Button";
import Pagination from "../../components/pagination/Pagination";

import "./main.less";


const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);
  const isFetching = useSelector((state) => state.users.isFetching);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalCount = useSelector((state) => state.users.totalCount);
  const perPage = useSelector((state) => state.users.perPage);
  const isFetchError = useSelector((state) => state.users.isFetchError);
  const [searchValue, setSearchValue] = useState("");
  const pagesUsers = [];


  useEffect(() => {
    dispatch(getUsers(searchValue, currentPage, perPage));
  }, [currentPage]);

  function searchHandler() {
    dispatch(setCurrentPage(1));
    dispatch(getUsers(searchValue, currentPage, perPage));
  }

  return (
    <div>
      {isFetchError && (
        <div class="alert alert-danger" role="alert">
          Произошла ошибка!
        </div>
      )}

      <div className="search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Введите логин пользователя"
          className="search-input"
        />
        <Button
          onClick={() => searchHandler()}
          name="Поиск"
        />
      </div>

      {isFetching === false ? (
        users.map((user) => 
        <Link key={user.id} to={`/interfaxSearchRepos/${user.login}`} >
          <User user={user}  />
        </Link>)
      ) : (
        <div className="fetching"></div>
      )}

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalCount={totalCount}
        perPage={perPage}
        pages = {pagesUsers}
      />
    </div>
  );
};

export default Main;
