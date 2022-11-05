import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import { setCurrentPage } from "../../reducers/commitsReducer";
import { getCommits } from "../actions/commits";

import "../main/main.less";
import "./commitsPage.less";

const CommitsPage = () => {
  const dispatch = useDispatch();
  const { login, repoName } = useParams();
  const commits = useSelector((state) => state.commits.commits);
  const isFetching = useSelector((state) => state.commits.isFetching);
  const firstRowCommit = useSelector((state) => state.commits.firstRowCommit);
  const currentPage = useSelector((state) => state.commits.currentPage);
  const perPage = useSelector((state) => state.commits.perPage);

  useEffect(() => {
    dispatch(getCommits(login, repoName, perPage, currentPage));
  }, [repoName]);
  return (
    <div>
      {isFetching === false ? (
        <div className="commit_body">
          <Link to={`/${login}`}>
            <Button 
            onClick={() => dispatch(setCurrentPage(1))}
              name={`Вернуться к ${login}`} />
          </Link>
          <h2>Коммиты репозитория {repoName} </h2>
          <div className="commit_body-nav">
            <span className={ currentPage == 1 ? "commit_body-nav-btn" : "" }>
              <Button
                onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                name="Назад"
              />
            </span>
            <span className={ commits.length < 10 ? "commit_body-nav-btn" : "" }>
              <Button
                onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                name="Далее"
              />
            </span>
          </div>
          <table className="commit_body-table">
            <tbody>
              <tr>
                {firstRowCommit.map((item, index) => (
                  <th className="commit_body-table-row" key={index}>
                    {item}
                  </th>
                ))}
              </tr>
              {commits.map((commit) => (
                <tr key={commit.node_id}>
                  <td className="commit_body-table-row">
                    {commit.commit.author.name
                      ? commit.commit.author.name
                      : commit.author.login}
                  </td>
                  <td className="commit_body-table-row">
                    {commit.commit.message}{" "}
                  </td>
                  <td className="commit_body-table-row">
                    {new Date(commit.commit.author.date)
                      .toISOString()
                      .slice(0, 10)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="commit_body-nav">
            <span className={ currentPage == 1 ? "commit_body-nav-btn" : "" }>
              <Button
                onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                name="Назад"
              />
            </span>
            <span className={ commits.length < 10 ? "commit_body-nav-btn" : "" }>
              <Button
                onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                name="Далее"
              />
            </span>
          </div>
        </div>
      ) : (
        <div className="fetching"></div>
      )}
    </div>
  );
};

export default CommitsPage;
