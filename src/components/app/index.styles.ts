import styled from 'styled-components';

export const Container = styled.div(
	({ theme }) => `
	background: ${theme.palette.common.white};
	min-height: 100vh;
`
);
