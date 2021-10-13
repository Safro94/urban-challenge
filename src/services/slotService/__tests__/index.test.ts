import SlotService from '..';

import { SLOTS_ENDPOINT } from '../../../constants/endpoints';

import fetcher from '../../../utils/fetcher';

jest.mock('../../../utils/fetcher');

describe('Slot Service', () => {
	const handleError = jest.fn();

	it('should call the fetcher and return an empty array when there is no data', async () => {
		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: null })
		);

		const result = await SlotService.getSlots(handleError);

		expect(result).toStrictEqual([]);
		expect(fetcher).toHaveBeenCalledTimes(1);
		expect(fetcher).toHaveBeenCalledWith({ url: SLOTS_ENDPOINT });
	});

	it('should call the fetcher and return the results when there is data', async () => {
		const results = {
			slots: [
				{
					id: 1,
					localisedTime: '12:00',
					price: '£81.00',
				},
			],
		};

		(fetcher as jest.Mock).mockImplementation(() =>
			Promise.resolve({ data: results })
		);

		const result = await SlotService.getSlots(handleError);

		expect(result).toStrictEqual(results.slots);
		expect(fetcher).toHaveBeenCalledTimes(1);
		expect(fetcher).toHaveBeenCalledWith({ url: SLOTS_ENDPOINT });
	});
});
