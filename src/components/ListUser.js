import User from './User';
import load from './assets/load.svg';

const ListUser = ({ users, loading }) => {
	if (loading) {
		return <img src={load} alt='loading' />;
	}
	return (
		<div className='wrapper'>
			{users.map((user) => (
				<User user={user} key={user.cell} />
			))}
		</div>
	);
};

export default ListUser;
