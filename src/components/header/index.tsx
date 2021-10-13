import { useState } from 'react';

import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CancelIcon from '@material-ui/icons/Cancel';
import Drawer from '@material-ui/core/Drawer';

import { HOME } from '../../constants/routes';

import { useCart } from '../../hooks/cart';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import avatar from '../../assets/avatar.jpeg';

import {
	HeaderAvatar,
	HeaderAvatarContainer,
	HeaderButton,
	HeaderCloseIconWrapper,
	HeaderContainer,
	HeaderLogoContainer,
	HeaderLogoContainerLink,
	HeaderMenuContainer,
	HeaderWelcomeText,
	HeaderWrapper,
} from './index.styles';

const Header = () => {
	const { cart, getTotalItems } = useCart();
	const [isCartOpen, setIsCartOpen] = useState(false);

	const user = 'Matias';

	return (
		<HeaderContainer>
			<HeaderWrapper>
				<HeaderMenuContainer>
					<HeaderLogoContainer>
						<HeaderLogoContainerLink to={HOME}>
							<Logo />
						</HeaderLogoContainerLink>
					</HeaderLogoContainer>
				</HeaderMenuContainer>

				<HeaderAvatarContainer>
					<HeaderWelcomeText>Welcome {user}</HeaderWelcomeText>
					<HeaderAvatar src={avatar} alt='Avatar' />
					<Drawer
						anchor='right'
						open={isCartOpen}
						onClose={() => setIsCartOpen(false)}
						data-testid='drawer'
					>
						<HeaderCloseIconWrapper
							data-testid='close-button'
							onClick={() => setIsCartOpen(false)}
						>
							<CancelIcon />
						</HeaderCloseIconWrapper>
					</Drawer>
					<HeaderButton
						data-testid='cart-button'
						onClick={() => setIsCartOpen(true)}
					>
						<Badge badgeContent={getTotalItems(cart)} color='error'>
							<AddShoppingCartIcon />
						</Badge>
					</HeaderButton>
				</HeaderAvatarContainer>
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default Header;
