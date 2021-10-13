import { act } from '../../../utils/test-utils';
import { renderHook } from '@testing-library/react-hooks';

import { useCart, CartProvider } from '../';

import { ICartItem } from '../../../types';

describe('Cart Context', () => {
	const cartItem: ICartItem = {
		id: '1',
		slot: null,
		worker: { id: 1, name: 'test', rating: '4', isNew: false },
		price: 20,
		amount: 1,
	};

	it('should add an item to the cart when addToCart is called', () => {
		const { result } = renderHook(() => useCart(), {
			wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
		});

		const { addToCart } = result.current;

		act(() => {
			addToCart(cartItem);
		});

		expect(result.current.cart).toStrictEqual([cartItem]);
	});

	it('should remove an item to the cart when removeFromCart is called', () => {
		const { result } = renderHook(() => useCart(), {
			wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
		});

		const { addToCart, removeFromCart } = result.current;

		act(() => {
			addToCart(cartItem);
		});
		expect(result.current.cart).toStrictEqual([cartItem]);

		act(() => {
			removeFromCart(cartItem.id);
		});
		expect(result.current.cart).toStrictEqual([]);
	});

	it('should get the total amount of items when getTotalItems is called', () => {
		const cartItems = [cartItem, { ...cartItem, id: '2' }];
		const { result } = renderHook(() => useCart(), {
			wrapper: ({ children }) => <CartProvider>{children}</CartProvider>,
		});

		const { addToCart, getTotalItems } = result.current;

		act(() => {
			addToCart(cartItem);
		});

		act(() => {
			addToCart({ ...cartItem, id: '2' });
		});

		expect(getTotalItems(cartItems)).toBe(2);
	});
});
