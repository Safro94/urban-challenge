import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from '../../../utils/test-utils';

import DateSelectionContainer from '..';

import SlotService from '../../../services/slotService';

jest.mock('../../../services/slotService', () => {
	return {
		getSlots: jest.fn(),
	};
});

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		push: mockHistoryPush,
	}),
}));

const mockSetSelectedSlot = jest.fn();
jest.mock('../../../hooks/application', () => {
	return {
		useApplication: () => ({
			setSelectedSlot: mockSetSelectedSlot,
		}),
	};
});

const mockHandleError = jest.fn();
jest.mock('react-error-boundary', () => ({
	...jest.requireActual('react-error-boundary'),
	useErrorHandler: () => mockHandleError,
}));

const mockAddToCart = jest.fn();
jest.mock('../../../hooks/cart', () => {
	return {
		useCart: () => ({
			addToCart: mockAddToCart,
		}),
	};
});

describe('DateSelectionContainer', () => {
	const slots = [
		{
			id: 1,
			localisedTime: '10:00',
			price: '$20',
		},
		{
			id: 2,
			localisedTime: '10:30',
			price: '$30',
		},
		{
			id: 3,
			localisedTime: '11:00',
			price: '$50',
		},
	];

	beforeEach(() => {
		(SlotService.getSlots as jest.Mock).mockResolvedValue(slots);
	});

	it('should render correctly when service returns properties', async () => {
		const { container } = render(<DateSelectionContainer />);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should call the service when the date is selected', async () => {
		render(<DateSelectionContainer />);

		const input = screen.getByRole('textbox');

		userEvent.click(input);

		userEvent.click(screen.getByText(`${new Date(Date.now()).getDate()}`));

		await waitFor(() => {
			expect(SlotService.getSlots).toHaveBeenCalledTimes(1);
			expect(SlotService.getSlots).toHaveBeenCalledWith(mockHandleError);
		});
	});

	it('should set the selected slot when the time slot button is clicked', async () => {
		render(<DateSelectionContainer />);

		const input = screen.getByRole('textbox');

		userEvent.click(input);

		userEvent.click(screen.getByText(`${new Date(Date.now()).getDate()}`));

		await waitFor(() => {
			expect(SlotService.getSlots).toHaveBeenCalledTimes(1);
			expect(SlotService.getSlots).toHaveBeenCalledWith(mockHandleError);
		});

		const timeButton = screen.getByRole('button', {
			name: `${slots[1].localisedTime} - ${slots[1].price}`,
		});

		userEvent.click(timeButton);

		expect(mockSetSelectedSlot).toHaveBeenCalledTimes(1);
		expect(mockSetSelectedSlot).toHaveBeenCalledWith(slots[1]);
	});
});
