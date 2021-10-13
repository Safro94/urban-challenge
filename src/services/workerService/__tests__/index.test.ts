import WorkerService from '..';

import { WORKERS_ENDPOINT } from '../../../constants/endpoints';

import fetcher from '../../../utils/fetcher';

jest.mock('../../../utils/fetcher');

describe('Worker Service', () => {
	const handleError = jest.fn();

	it('should call the fetcher and return an empty array when there is no data', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: null })
		);

		const result = await WorkerService.getWorkers(handleError);

		expect(result).toStrictEqual([]);
		expect(fetcher).toHaveBeenCalledTimes(1);
		expect(fetcher).toHaveBeenCalledWith({ url: WORKERS_ENDPOINT });
	});

	it('should call the fetcher and return the results when there is data', async () => {
		const results = {
			workers: [
				{
					id: 1,
					name: 'Maxwell Smith',
					rating: '4.1',
					isNew: false,
				},
			],
		};

		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: results })
		);

		const result = await WorkerService.getWorkers(handleError);

		expect(result).toStrictEqual(results.workers);
		expect(fetcher).toHaveBeenCalledTimes(1);
		expect(fetcher).toHaveBeenCalledWith({ url: WORKERS_ENDPOINT });
	});
});
