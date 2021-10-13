import { act } from '../../../utils/test-utils';
import { renderHook } from '@testing-library/react-hooks';

import { useApplication, ApplicationProvider } from '../';

import { ISlot, IWorker } from '../../../types';

describe('Application Context', () => {
	it('should set the workers when setWorkers is called', () => {
		const workers: IWorker[] = [
			{
				id: 1,
				name: 'Maxwell Smith',
				rating: '4.1',
				isNew: false,
			},
		];

		const { result } = renderHook(() => useApplication(), {
			wrapper: ({ children }) => (
				<ApplicationProvider>{children}</ApplicationProvider>
			),
		});

		const { setWorkers } = result.current;

		act(() => {
			setWorkers(workers);
		});

		expect(result.current.workers).toStrictEqual(workers);
	});

	it('should set the selectedSlot when setSelectedSlot is called', () => {
		const selectedSlot: ISlot = { id: 1, localisedTime: '10:00', price: '$30' };

		const { result } = renderHook(() => useApplication(), {
			wrapper: ({ children }) => (
				<ApplicationProvider>{children}</ApplicationProvider>
			),
		});

		const { setSelectedSlot } = result.current;

		act(() => {
			setSelectedSlot(selectedSlot);
		});

		expect(result.current.selectedSlot).toStrictEqual(selectedSlot);
	});
});
