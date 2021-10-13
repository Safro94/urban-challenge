import fetcher from '../fetcher';
import axios from '../axios';
import { RequestMethods } from '../../types';

jest.mock('../axios');

describe('Fetcher', () => {
	it.each([Object.values(RequestMethods)])(
		'should return data and a status when the method (%d) is called',
		async method => {
			const data = { slots: [] };
			(axios.get as jest.Mock).mockImplementation(() =>
				Promise.resolve({ data })
			);

			const result = await fetcher({
				url: 'test',
				method,
			});

			expect(axios[method]).toBeCalledTimes(1);
			expect((axios[method] as jest.Mock).mock.calls[0][0]).toBe('test');
			expect(result.data).toEqual(data);
		}
	);

	it('should throw an error', async () => {
		const error = new Error('error');
		(axios.get as jest.Mock).mockImplementation(() => Promise.reject(error));

		await expect(fetcher({ url: 'test' })).rejects.toThrow();
	});
});
