import React from 'react';
import './user.less';

const User = (props) => {
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
export default User;