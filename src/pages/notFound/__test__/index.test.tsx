import { render, screen } from '../../../utils/test-utils';

import NotFound from '..';

describe('Not Found', () => {
	it('should have an icon and a text', () => {
		render(<NotFound />);

		expect(screen.getByTestId('icon')).toBeInTheDocument();
		expect(screen.getByText(/Go back to the home page/i)).toBeInTheDocument();
		expect((screen.getByRole('link') as HTMLLinkElement).href).toBe(
			'http://localhost/'
		);
	});
});
