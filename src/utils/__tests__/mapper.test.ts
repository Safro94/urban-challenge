import { mapAvailableWorkers } from '../mapper';

describe('Mapper', () => {
	it('should return an array of objects when mapAvailableWorkers is called', () => {
		const data = [
			{
				slot_id: 1,
				availableWorker_ids: [1, 2, 3],
			},
		];

		const expectedResult = [{ slotId: 1, availableWorkersIds: [1, 2, 3] }];

		const result = mapAvailableWorkers(data);

		expect(result).toStrictEqual(expectedResult);
	});
});
