import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';

import styled from 'styled-components';

export const HeaderContainer = styled.div(
	({ theme }) => `
	width: 100%;
	height: 50px;
	background-color: ${theme.palette.primary.main};
	top: 0;
	z-index: 999;
`
);

export const HeaderWrapper = styled.div`
	height: 100%;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const HeaderMenuContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export const HeaderLogoContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const HeaderLogoContainerLink = styled(Link)`
	width: 125px;
`;

export const HeaderAvatarContainer = styled.div(
	({ theme }) => `
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${theme.palette.primary.text};
	font-weight: bold;
`
);

export const HeaderAvatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;

export const HeaderWelcomeText = styled.span(
	({ theme }) => `
	display: none;

	@media ${theme.breakpoints.mobile} {
		display: block;
	}
`
);

export const HeaderButton = styled(IconButton)(
	({ theme }) => `
	color: ${theme.palette.primary.text} !important;
`
);

export const HeaderCloseIconWrapper = styled.div`
	right: 10px;
	position: relative;
	top: 10px;
	display: flex;
	justify-content: flex-end;
	cursor: pointer;
`;
