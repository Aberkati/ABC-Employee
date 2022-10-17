import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListUser from './components/ListUser';
import Pagination from './components/Pagination';

const App = () => {
	const [users, setUsers] = useState([]);
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
		<Container>
			<h1>Show ABS's Employees</h1>
			<BtnWrapper>
				<Button data='french' onClick={handleFrenchUsers}>
					Only FR
				</Button>
				<Button data='all' onClick={handleAllUsers}>
					All
				</Button>
			</BtnWrapper>

			<ListUser users={currentUsers} loading={loading} />

			<Pagination
				usersPerPage={usersPerPage}
				totalUsers={users.length}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</Container>
	);
};

const Container = styled.div`
	font-family: sans-serif;
	text-align: center;
`;
const BtnWrapper = styled.div`
	margin: 20px;
`;
const Button = styled.button`
	background-color: ${({ data }) => (data === 'french' ? '#4caf50' : 'black')};
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin-right: 20px;
`;

export default App;
