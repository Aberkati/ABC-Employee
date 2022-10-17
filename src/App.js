import axios from 'axios';
import { useState, useEffect } from 'react';
import ListUser from './components/ListUser';
import Pagination from './components/Pagination';

const App = () => {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(12);

	const fetchUsers = async () => {
		setLoading(true);
		const res = await axios.get('https://randomuser.me/api/?results=100');
		setUsers(res.data.results);
		setLoading(false);
	};
	useEffect(() => {
		fetchUsers();
	}, []);

	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleFrenchUsers = () => {
		setUsers(users.filter((user) => user.nat === 'FR'));
	};
	const handleAllUsers = () => {
		fetchUsers();
	};

	return (
		<div className='App'>
			<h1>Show ABS's Employees</h1>
			<div className='btn'>
				<button className='french' onClick={handleFrenchUsers}>
					Only FR
				</button>
				<button className='allusers' onClick={handleAllUsers}>
					All
				</button>
			</div>

			<ListUser users={currentUsers} loading={loading} />

			<Pagination
				usersPerPage={usersPerPage}
				totalUsers={users.length}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default App;
