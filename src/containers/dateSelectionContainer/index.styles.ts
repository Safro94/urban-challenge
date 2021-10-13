import styled from 'styled-components';

export const DpWrapper = styled.div(
	({ theme }) => `
	@media ${theme.breakpoints.tablet} {
		flex: 1;
	}
`
);

export const SlotsContainer = styled.div(
	({ theme }) => `
	width: 100%;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow-y: auto;
	height: 70vh;
	
	@media ${theme.breakpoints.tablet} {
		flex: 0.5;
		width: initial;
		height: 50vh;
	}
`
);
