import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WorkerContainer = styled.div`
	width: 100%;
`;

export const WorkerLinkContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const WorkerContainerMenuList = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 15px;
	margin: 15px 0;
`;

export const WorkerContainerLink = styled(Link)(
	({ theme }) => `
	background-color: ${theme.palette.primary.main};
	color: ${theme.palette.primary.text};
	border: 1px solid ${theme.palette.primary.main};
	padding: 10px;
	border-radius: 6px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	font-weight: bold;
	text-align: center;
	width: 30%;

	&:hover {
		background-color: ${theme.palette.common.white};
		color: ${theme.palette.primary.main};
	}
`
);
