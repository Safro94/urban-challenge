import styled from 'styled-components';

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const FormLabel = styled.label(
	({ theme }) => `
	font-size: 0.9rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	gap: 10px;

	@media ${theme.breakpoints.tablet} {
		font-size: 1.2rem;
	}
`
);
