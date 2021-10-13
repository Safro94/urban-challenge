import { IAvailableWorker, IAvailableWorkerResponse } from '../types';

export const mapAvailableWorkers = (
	workers: IAvailableWorkerResponse[]
): IAvailableWorker[] => {
	return workers.map((worker: IAvailableWorkerResponse) => ({
		slotId: worker.slot_id,
		availableWorkersIds: worker.availableWorker_ids,
	}));
};
