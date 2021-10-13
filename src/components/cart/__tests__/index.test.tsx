import { render, screen } from '../../../utils/test-utils';

import Cart from '..';

import { ICartItem } from '../../../types';

describe('Cart', () => {
	const items: ICartItem[] = [
		{
			id: '1',
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
		},
		{
			id: '2',
			worker: {
				id: 2,
				name: 'test2',
				rating: '4.3',
				isNew: true,
			},
			slot: {
				id: 2,
				localisedTime: '10:00',
				price: '$20',
			},
			price: 20,
			amount: 1,
		},
	];

	it('should render Cart items when items is not empty', () => {
		const { container } = render(<Cart items={items} />);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render the text No appointments when items is an empty array', () => {
		const { container } = render(<Cart items={[]} />);
		expect(container.firstChild).toMatchSnapshot();
		expect(screen.getByText(/no appointments/i)).toBeInTheDocument();
	});
});
