import User from './User';
import load from './assets/load.svg';
import styled from 'styled-components';

const ListUser = ({ users, loading }) => {
	if (loading) {
		return <img src={load} alt='loading' />;
	}
	return (
		<Container>
			{users.map((user) => (
				<User user={user} key={user.cell} />
			))}
		</Container>
	);
};

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-gap: 1rem;
	@media (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 900px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export default ListUser;
