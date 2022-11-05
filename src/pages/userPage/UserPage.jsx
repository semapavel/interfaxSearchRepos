import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getRepos } from "../actions/repos";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../reducers/reposReducer";
import Pagination from "../../components/pagination/Pagination";
import Button from "../../components/button/Button";

import "./userpage.less";
import "../main/main.less";

const UserPage = () => {
  const dispatch = useDispatch();
  const { login } = useParams();
  const user = useSelector((state) => state.repos.user);
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const firstRowRepo = useSelector((state) => state.repos.firstRowRepo);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const perPage = useSelector((state) => state.repos.perPage);
  const pagesRepos = [];

  useEffect(() => {
    dispatch(getRepos(login, perPage, currentPage));
  }, [login, currentPage]);

  return (
    <div>
      {isFetching === false ? (
        <div>
          <div className="user_head">
            <img className="user_head-img" src={user.avatar_url}></img>
            <h1>
              {user.login}
              {user.name ? `/${user.name}` : ""}
            </h1>
          </div>
          <div className="user_body">
            <Link to='/'>
              <Button 
              name={'Вернуться к поиску'}/>
          </Link>
            <h2>Список репозиториев</h2>
            <table className="user_body-table">
              <tbody>
                <tr>
                  {firstRowRepo.map((item, index) => (
                    <th className="user_body-table-row" key={index}>
                      {item}
                    </th>
                  ))}
                </tr>
                {repos.map((repo) => (
                  <tr key={repo.id}>
                    <td className="user_body-table-row">
                      <Link className="user_body-table-row-link" to={`/${user.login}/${repo.name}`}>
                        {repo.name}
                      </Link>
                    </td>
                    <td className="user_body-table-row">{repo.language}</td>
                    <td className="user_body-table-row">{repo.description}</td>
                    <td className="user_body-table-row">
                      {repo.stargazers_count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="fetching"></div>
      )}
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalCount={totalCount}
          perPage={perPage}
          pages = {pagesRepos}
        />
    </div>
  );
};

export default UserPage;
