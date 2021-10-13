import {
	AVAILABLE_WORKERS_ENDPOINT,
	WORKERS_ENDPOINT,
} from '../../constants/endpoints';
import { IAvailableWorkersResponse, IWorkerResponse } from '../../types';

import fetcher from '../../utils/fetcher';
import { mapAvailableWorkers } from '../../utils/mapper';

class WorkerService {
	static async getWorkers(handleError: any) {
		return await fetcher({ url: WORKERS_ENDPOINT }).then(res => {
			if (!res?.data) return [];

			return (res.data as IWorkerResponse).workers;
		}, handleError);
	}

	static async getAvailableWorkers(handleError: any) {
		return await fetcher({ url: AVAILABLE_WORKERS_ENDPOINT }).then(res => {
			if (!res?.data) return [];

			return mapAvailableWorkers(
				(res.data as IAvailableWorkersResponse)['available-workers']
			);
		}, handleError);
	}
}

export default WorkerService;
