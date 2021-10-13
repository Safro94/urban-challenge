import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../utils/test-utils';

import Worker from '..';

import { HOME } from '../../../constants/routes';

import { IWorker } from '../../../types';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		push: mockHistoryPush,
	}),
}));

jest.mock('uuid', () => ({
	...jest.requireActual('uuid'),
	v4: () => '1',
}));

const mockAddToCart = jest.fn();
jest.mock('../../../hooks/cart', () => {
	return {
		useCart: () => ({
			addToCart: mockAddToCart,
		}),
	};
});

const mockSlot = {
	id: 1,
	localisedTime: '10:00',
	price: '$20',
};
jest.mock('../../../hooks/application', () => {
	return {
		useApplication: () => ({
			selectedSlot: mockSlot,
		}),
	};
});

describe('Worker', () => {
	const index = 1;
	const getItemProps = () => {};
	const worker: IWorker = {
		id: 1,
		name: 'test',
		rating: '4.5',
		isNew: true,
	};

	it('should render correctly', () => {
		const { container } = render(
			<Worker item={worker} index={index} getItemProps={getItemProps} />
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	describe('Worker functionality', () => {
		it('should call addToCart when the button is clicked', () => {
			render(
				<Worker item={worker} index={index} getItemProps={getItemProps} />
			);

			const button = screen.getByRole('button', { name: /book/i });
			userEvent.click(button);

			expect(mockAddToCart).toHaveBeenCalledTimes(1);
			expect(mockAddToCart).toHaveBeenCalledWith({
				worker,
				id: '1',
				slot: mockSlot,
				price: 20,
				amount: 1,
			});

			// expect(mockHistoryPush).toHaveBeenCalledTimes(1);
			// expect(mockHistoryPush).toHaveBeenCalledWith(HOME);
		});
	});
});
