import React from 'react';

const User = ({ user }) => {
	return (
		<div key={user.cell} className='card'>
			<img src={user.picture.medium} alt='' />
			<div className='infos'>
				<span>
					Identity : {user.name.title}.{user.name.first} {user.name.last}
				</span>
				<span>Email :{user.email}</span>
				<span>Phone :{user.phone}</span>
				<span>Nationality :{user.nat}</span>
				<span>City :{user.location.city}</span>
			</div>
		</div>
	);
};

export default User;
