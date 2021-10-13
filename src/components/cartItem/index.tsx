import Button from '@material-ui/core/Button';

import { useCart } from '../../hooks/cart';

import { ICartItem } from '../../types';

import therapist from '../../assets/therapist.jpeg';

import {
	CartItemData,
	CartItemContainer,
	CartItemImage,
	CartItemInformation,
	CartItemInformationContainer,
	CartItemTitle,
} from './index.styles';

interface ICartItemProps {
	item: ICartItem;
}

const CartItem = ({ item }: ICartItemProps) => {
	const { removeFromCart } = useCart();

	return (
		<CartItemContainer>
			<CartItemInformation>
				<CartItemTitle>Your appointment details</CartItemTitle>
				<CartItemInformationContainer>
					<CartItemData>Price: £{item.price.toFixed(2)}</CartItemData>
					<CartItemData>Therapist: {item.worker.name}</CartItemData>
					<CartItemData>Time: {item.slot?.localisedTime}</CartItemData>
				</CartItemInformationContainer>

				<CartItemInformationContainer>
					<Button
						size='small'
						disableElevation
						variant='contained'
						onClick={() => removeFromCart(item.id)}
					>
						Remove
					</Button>
				</CartItemInformationContainer>
			</CartItemInformation>

			<CartItemImage src={therapist} alt={item.worker.name} />
		</CartItemContainer>
	);
};

export default CartItem;
