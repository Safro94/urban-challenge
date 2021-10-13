import styled from 'styled-components';

export const Wrapper = styled.div(
	({ theme }) => `
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: 100%;
	min-height: 100vh;
	
	@media ${theme.breakpoints.tablet} {
		flex-direction: row;
	}
`
);
