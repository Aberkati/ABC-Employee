import styled from 'styled-components';

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<Container>
			{pageNumbers.length <= 1 ? null : (
				<>
					<span>Paginate to :</span>
					{pageNumbers.map((num) => (
						<Item key={num}>
							<div
								onClick={() => paginate(num)}
								style={{ color: num === currentPage ? 'red' : 'black' }}
							>
								{num}
							</div>
						</Item>
					))}
				</>
			)}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	margin: 30px;
	justify-content: center;
	align-items: center;
`;
const Item = styled.div`
	margin-left: 15px;
	cursor: pointer;
`;

export default Pagination;
