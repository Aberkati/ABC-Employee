const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='pagination'>
			{pageNumbers.length <= 1 ? null : (
				<>
					<span>Paginate to :</span>
					{pageNumbers.map((num) => (
						<div className='item' key={num}>
							<div
								onClick={() => paginate(num)}
								style={{ color: num === currentPage ? 'red' : 'black' }}
							>
								{num}
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default Pagination;
