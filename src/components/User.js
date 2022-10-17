import React from 'react';
import styled from 'styled-components';

const User = ({ user }) => {
	return (
		<Container key={user.cell}>
			<Image src={user.picture.medium} alt='' />
			<Informations>
				<span>
					Identity : {user.name.title}. {user.name.first} {user.name.last}
				</span>
				<span>Email :{user.email}</span>
				<span>Phone :{user.phone}</span>
				<span>Nationality :{user.nat}</span>
				<span>City :{user.location.city}</span>
			</Informations>
		</Container>
	);
};

const Container = styled.div`
	border: 1px solid #e2e4e5;
	background: #edeff1;
	padding: 5px;
`;
const Image = styled.img`
	width: 200px;
	height: 200px;
	margin-bottom: 10px;
`;
const Informations = styled.div`
	font-size: 11px;
	font-weight: 700;
	color: #4e566d;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100px;
`;

export default User;
