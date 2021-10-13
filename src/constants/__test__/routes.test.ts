import { HOME, WORKERS } from '../routes';

describe('Routes', () => {
	it('should return the home route', () => {
		const expectedResult = '/';
		expect(HOME).toBe(expectedResult);
	});

	it('should return the workers route', () => {
		const expectedResult = '/workers';
		expect(WORKERS).toBe(expectedResult);
	});
});
