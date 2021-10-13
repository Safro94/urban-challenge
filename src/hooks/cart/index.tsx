import { createContext, useCallback, useContext, useReducer } from 'react';

import { ICartItem } from '../../types';

enum Types {
	ADD_TO_CART = 'ADD_TO_CART',
	REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

interface IAction {
	type: Types;
	value: ICartItem | string;
}

const initialState: ICartItem[] = [];

const CartContext = createContext<
	[state: ICartItem[], dispatch: React.Dispatch<IAction>]
>([initialState, () => null]);

const useCart = () => {
	const [cart, setCart] = useContext(CartContext);

	const getTotalItems = useCallback(
		(items: ICartItem[]) =>
			items.reduce(
				(accum: number, item: ICartItem) => (accum += item.amount),
				0
			),
		[]
	);

	const addToCart = useCallback(
		(item: ICartItem) => setCart({ type: Types.ADD_TO_CART, value: item }),
		[setCart]
	);

	const removeFromCart = useCallback(
		(id: string) => setCart({ type: Types.REMOVE_FROM_CART, value: id }),
		[setCart]
	);

	return { cart, getTotalItems, addToCart, removeFromCart };
};

const reducer = (state: ICartItem[], action: IAction) => {
	switch (action.type) {
		case Types.ADD_TO_CART:
			return [...state, { ...(action.value as ICartItem), amount: 1 }];
		case Types.REMOVE_FROM_CART:
			return state.reduce((accum: ICartItem[], item: ICartItem) => {
				if (item.id === action.value) {
					// Here I assumed you can only have one appointment per slot,
					return accum;

					// If you could add more than one, then it'd look like this
					//if (item.amount === 1) return accum;
					// return [...accum, { ...item, amount: item.amount - 1 }];
				} else {
					return [...accum, item];
				}
			}, [] as ICartItem[]);
		default:
			return state;
	}
};

const CartProvider: React.FC = ({ children }) => {
	return (
		<CartContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</CartContext.Provider>
	);
};

export { useCart, CartProvider };
