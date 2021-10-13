import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from '../../../utils/test-utils';

import WorkersContainer from '..';

import { IAvailableWorker, IWorker } from '../../../types';

import WorkerService from '../../../services/workerService';

import { HOME } from '../../../constants/routes';

jest.mock('../../../services/workerService', () => {
	return {
		getAvailableWorkers: jest.fn(),
	};
});

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({
		search: {
			slotId: '1',
		},
	}),
	useHistory: () => ({
		push: mockHistoryPush,
	}),
}));

const mockWorkers: IWorker[] = [
	{
		id: 1,
		name: 'Maxwell',
		rating: '4.1',
		isNew: false,
	},
	{
		id: 2,
		name: 'Melina',
		rating: '4.1',
		isNew: false,
	},
];
const mockSlot = {
	id: 1,
	localisedTime: '10:00',
	price: '$20',
};
jest.mock('../../../hooks/application', () => {
	return {
		useApplication: () => ({
			workers: mockWorkers,
			selectedSlot: mockSlot,
		}),
	};
});

const mockHandleError = jest.fn();
jest.mock('react-error-boundary', () => ({
	...jest.requireActual('react-error-boundary'),
	useErrorHandler: () => mockHandleError,
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

describe('WorkersContainer', () => {
	const availableWorkers: IAvailableWorker[] = [
		{
			slotId: 1,
			availableWorkersIds: [1, 2, 3],
		},
	];

	beforeEach(() => {
		(WorkerService.getAvailableWorkers as jest.Mock).mockResolvedValue(
			availableWorkers
		);
	});

	it('should render correctly when service returns properties', async () => {
		const { container } = render(<WorkersContainer />);

		await waitFor(() => {
			expect(WorkerService.getAvailableWorkers).toHaveBeenCalledTimes(1);
			expect(WorkerService.getAvailableWorkers).toHaveBeenCalledWith(
				mockHandleError
			);
		});

		await waitFor(() => {
			expect(container.firstChild).toMatchSnapshot();
		});
	});

	it('should have a link with href to the home page', async () => {
		render(<WorkersContainer />);

		await waitFor(() => {
			expect(WorkerService.getAvailableWorkers).toHaveBeenCalledTimes(1);
			expect(WorkerService.getAvailableWorkers).toHaveBeenCalledWith(
				mockHandleError
			);
		});

		expect(screen.getByRole('link')).toHaveAttribute('href', HOME);
	});

	it('should filter the workers while the user types', async () => {
		render(<WorkersContainer />);

		await waitFor(() => {
			expect(WorkerService.getAvailableWorkers).toHaveBeenCalledTimes(1);
			expect(WorkerService.getAvailableWorkers).toHaveBeenCalledWith(
				mockHandleError
			);
		});

		const input = screen.getByPlaceholderText(/select a worker/i);
		expect(input).toBeInTheDocument();

		expect(screen.getAllByRole('option')).toHaveLength(2);

		userEvent.type(input, 'M');
		expect(screen.getAllByRole('option')).toHaveLength(2);

		userEvent.type(input, 'e');
		expect(screen.getAllByRole('option')).toHaveLength(1);

		await waitFor(() => {
			const bookButton = screen.getByRole('button', { name: /book/i });
			userEvent.click(bookButton);

			expect(mockAddToCart).toHaveBeenCalledTimes(1);
			expect(mockAddToCart).toHaveBeenCalledWith({
				worker: mockWorkers[1],
				id: '1',
				slot: mockSlot,
				price: 20,
				amount: 1,
			});
		});
	});
});
