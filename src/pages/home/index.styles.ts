import styled from 'styled-components';

export const HomeWrapper = styled.div(
	({ theme }) => `
	background: ${theme.palette.common.background};
	padding: 1rem;

	@media ${theme.breakpoints.desktop} {
		min-height: 100vh;
		display: flex;
	}
`
);

export const HomeContent = styled.div(
	({ theme }) => `
	background: ${theme.palette.common.white};
	padding: 1rem;
	margin: auto;
	box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	min-height: 100vh;

	@media ${theme.breakpoints.tablet} {
		width: 70%;
		flex-direction: row;
		min-height: 60vh;
		max-height: 60vh;
	}
`
);

export const HomeInformationContainer = styled.div(
	({ theme }) => `
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-bottom: 1px solid ${theme.palette.common.grey};
	padding-bottom: 1rem;

	@media ${theme.breakpoints.tablet} {
		flex: 1;
		border-right: 1px solid ${theme.palette.common.grey};
		border-bottom: 0;
		padding-bottom: 0;
		padding-right: 1rem;
	}
`
);

export const HomeUsername = styled.span``;

export const HomeTimeSlot = styled.h2``;

export const HomeInformation = styled.p``;
