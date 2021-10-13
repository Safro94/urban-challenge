import {
	SLOTS_ENDPOINT,
	WORKERS_ENDPOINT,
	AVAILABLE_WORKERS_ENDPOINT,
} from '../endpoints';

describe('Endpoints', () => {
	it('should return the SLOTS_ENDPOINT', () => {
		const expectedEndpoint = '/slots.json';
		expect(SLOTS_ENDPOINT).toBe(expectedEndpoint);
	});

	it('should return the WORKERS_ENDPOINT', () => {
		const expectedEndpoint = '/workers.json';
		expect(WORKERS_ENDPOINT).toBe(expectedEndpoint);
	});

	it('should return the AVAILABLE_WORKERS_ENDPOINT', () => {
		const expectedEndpoint = '/available-workers.json';
		expect(AVAILABLE_WORKERS_ENDPOINT).toBe(expectedEndpoint);
	});
});
