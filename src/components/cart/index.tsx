import CartItem from '../cartItem';

import { ICartItem } from '../../types';

import { CartContainer, CartTitle, CartTotal } from './index.styles';

interface ICartProps {
	items: ICartItem[];
}

const Cart = ({ items }: ICartProps) => {
	const calculateTotal = (items: ICartItem[]) =>
		items.reduce(
			(accum: number, item: ICartItem) => accum + item.amount * item.price,
			0
		);

	return (
		<CartContainer>
			<CartTitle>Your appointments</CartTitle>
			{items.length === 0 && <p>No appointments</p>}

			{items.map(item => (
				<CartItem key={item.id} item={item} />
			))}

			<CartTotal>Total: ${calculateTotal(items).toFixed(2)}</CartTotal>
		</CartContainer>
	);
};

export default Cart;
