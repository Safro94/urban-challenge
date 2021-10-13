import { render, waitFor } from '../../../utils/test-utils';

import Home from '..';

import WorkerService from '../../../services/workerService';

jest.mock('../../../containers/dateSelectionContainer', () => () => (
	<div>date selection container</div>
));

const mockSetWorkers = jest.fn();
jest.mock('../../../hooks/application', () => {
	return {
		useApplication: () => ({
			setWorkers: mockSetWorkers,
		}),
	};
});

jest.mock('../../../services/workerService', () => {
	return {
		getWorkers: jest.fn(),
	};
});

const mockHandleError = jest.fn();
jest.mock('react-error-boundary', () => ({
	...jest.requireActual('react-error-boundary'),
	useErrorHandler: () => mockHandleError,
}));

describe('Home', () => {
	const workers = [{ id: 1, name: 'test', rating: '4.5' }];

	beforeEach(() => {
		(WorkerService.getWorkers as jest.Mock).mockResolvedValue(workers);
	});

	it('should render correctly', async () => {
		const { container } = render(<Home />);

		await waitFor(() => {
			expect(container.firstChild).toMatchSnapshot();
		});
	});

	it('should call the workerService and setWorkers with the service response', async () => {
		render(<Home />);

		await waitFor(() => {
			expect(WorkerService.getWorkers).toHaveBeenCalledTimes(1);
			expect(WorkerService.getWorkers).toHaveBeenCalledWith(mockHandleError);

			expect(mockSetWorkers).toHaveBeenCalledTimes(1);
			expect(mockSetWorkers).toHaveBeenCalledWith(workers);
		});
	});
});
