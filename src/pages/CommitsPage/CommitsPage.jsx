import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import Pagination from '../../components/pagination/Pagination';
import { setCurrentPage } from '../../reducers/commitsReducer';
import { getCommits } from '../actions/commits';

import "../main/main.less";
import './commitsPage.less'


const CommitsPage = () => {
	const dispatch = useDispatch();
	const {login, repoName} = useParams()
  // const user = useSelector((state) => state.repos.user);
	// const repo = useSelector((state) => state.repo.item);
  const commits = useSelector((state) => state.commits.commits);
	const isFetching = useSelector((state) => state.commits.isFetching);
	const firstRowCommit = useSelector((state) => state.commits.firstRowCommit);
  const currentPage = useSelector((state) => state.commits.currentPage);
  const totalCount = useSelector((state) => state.commits.totalCount);
  const perPage = useSelector((state) => state.commits.perPage);
  const pagesCommits = [];

    useEffect(() => {
		dispatch(getCommits(login, repoName, perPage, currentPage));
	  }, [repoName]);
    // const date = new Date(commit.commit.author.date).toLocaleDateString() 
  return (
    <div>
    {isFetching === false ? (
			<div className='commit_body'>
      <Link to={`/${login}`}>
      <Button
      name={'Назад'}/>
    </Link>
				<h2>Коммиты репозитория {repoName} </h2>
         <table className='commit_body-table'>
        <tbody>
          <tr>
          {firstRowCommit.map((item, index) => (
            <th className='commit_body-table-row' key={index}>
              {item}
            </th>
            ))}
          </tr>
          {commits.map((commit) =>(
            <tr key={commit.node_id}>
              <td className='commit_body-table-row'>{commit.commit.author.name ? commit.commit.author.name : commit.author.login}</td>
              <td className='commit_body-table-row'>{commit.commit.message} </td>
              <td className='commit_body-table-row'>{new Date(commit.commit.author.date).toISOString().slice(0, 10)}</td>
            </tr>
            ))}
        </tbody>
        </table>
			</div>      ) : (
			<div className="fetching"></div>
		  )}
      <Pagination
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      totalCount={totalCount}
      perPage={perPage}
      pages = {pagesCommits}
    />
		</div>
  )
}

export default CommitsPage

