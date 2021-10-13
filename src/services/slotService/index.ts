import { SLOTS_ENDPOINT } from '../../constants/endpoints';
import { ISlotsResponse } from '../../types';

import fetcher from '../../utils/fetcher';

class SlotService {
	static async getSlots(handleError: any) {
		return await fetcher({ url: SLOTS_ENDPOINT }).then(res => {
			if (!res?.data) return [];

			return (res.data as ISlotsResponse).slots;
		}, handleError);
	}
}

export default SlotService;
