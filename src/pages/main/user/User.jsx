import React from 'react';
import { Link } from 'react-router-dom';
import { setUser } from '../../../reducers/reposReducer';
import { useDispatch, useSelector } from "react-redux";
import './user.less'

const User = (props) => {
	const dispatch = useDispatch();
	const user = props.user
	
	return (
		<div className='user'>
			<div className="user-header">
				<div className="user-header-name">{user.login}</div>
				<div className="user-header-star">{user.stargazers_count}</div>
			</div>
			<div className="user-last-commit">{user.updated_at}</div>
					
		</div>
	);
};

// <Link to={`/${user.login}`} onClick={() => setDisUser(user)}>{user.login}</Link>
// <a href={user.html_url} className="user-link">Ссылка на репозиторий: {user.html_url}</a>	
export default User;