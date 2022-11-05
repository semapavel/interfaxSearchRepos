import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getRepos } from "../actions/repos";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../reducers/reposReducer";
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
  const perPage = useSelector((state) => state.repos.perPage);

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
              onClick={() => dispatch(setCurrentPage(1))}
              name={'Вернуться к поиску'}/>
          </Link>
            <h2>Список репозиториев</h2>
            <div className="user_body-nav">
            <span className={ currentPage == 1 ? "user_body-nav-btn" : "" }>
              <Button
                onClick={() => dispatch(setCurrentPage(currentPage-1))}
                name="Назад"
            />
            </span>
            <span className={ repos.length < 10 ? "user_body-nav-btn" : "" }>
              <Button
                onClick={() => dispatch(setCurrentPage(currentPage+1))}
                name="Далее"
              />
            </span>

            </div>
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
            <div className="user_body-nav">
            <span className={ (currentPage == 1 || repos.length == 0)  ? "user_body-nav-btn" : "" }>
              <Button
                onClick={() => dispatch(setCurrentPage(currentPage-1))}
                name="Назад"
              />
            </span>
            <span className={ repos.length < 10 ? "user_body-nav-btn" : "" }>
                <Button
                  onClick={() => dispatch(setCurrentPage(currentPage+1))}
                  name="Далее"
                />
                </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="fetching"></div>
      )}
    </div>
  );
};

export default UserPage;
