import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../utils/test-utils';

import CartItem from '..';

import { ICartItem } from '../../../types';

const mockRemoveFromCart = jest.fn();
jest.mock('../../../hooks/cart', () => {
	return {
		useCart: () => ({
			removeFromCart: mockRemoveFromCart,
		}),
	};
});

describe('CartItem', () => {
	const item: ICartItem = {
		id: 'id',
		worker: {
			id: 1,
			name: 'test',
			rating: '4.5',
			isNew: true,
		},
		slot: {
			id: 1,
			localisedTime: '10:00',
			price: '$20',
		},
		price: 20,
		amount: 1,
	};

	it('should render correctly', () => {
		const { container } = render(<CartItem item={item} />);
		expect(container.firstChild).toMatchSnapshot();
	});

	describe('CartItem functionality', () => {
		beforeEach(() => {
			render(<CartItem item={item} />);
		});

		it('should call removeFromCart when the remove button is clicked', () => {
			const removeButton = screen.getByRole('button', { name: /remove/i });
			userEvent.click(removeButton);

			expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
			expect(mockRemoveFromCart).toHaveBeenCalledWith(item.id);
		});
	});
});
