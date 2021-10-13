import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from '../../../utils/test-utils';

import Header from '..';

describe('Header', () => {
	it('should match the snapshot', () => {
		const { container } = render(<Header />);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should open and close the drawer when the icon is clicked', async () => {
		render(<Header />);

		const cartButton = screen.getByTestId('cart-button');
		expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();

		userEvent.click(cartButton);

		expect(screen.getByTestId('drawer')).toBeInTheDocument();

		const closeButton = screen.getByTestId('close-button');
		userEvent.click(closeButton);

		await waitFor(() => {
			expect(screen.queryByTestId('drawer')).not.toBeInTheDocument();
		});
	});
});
