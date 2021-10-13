import styled from 'styled-components';

export const WorkerItem = styled.li(
	({ theme }) => `
	padding: 20px;
	border: 1px solid ${theme.palette.primary.main};
	border-radius: 6px;
`
);

export const WorkerContainer = styled.div`
	display: grid;
	gap: 15px;
`;

export const WorkerButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const WorkerInformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const WorkerImageContainer = styled.div`
	height: 150px;
	display: flex;
	justify-content: center;
`;

export const WorkerInformationItem = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

export const WorkerImage = styled.img`
	height: 100%;
	width: auto;
`;

export const WorkerInformation = styled.span``;
