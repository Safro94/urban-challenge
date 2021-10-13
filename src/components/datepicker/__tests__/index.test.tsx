import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../utils/test-utils';

import Datepicker from '..';

describe('Datepicker', () => {
	const onSelect = jest.fn();

	it('should match the snapshot', () => {
		const { container } = render(<Datepicker onSelect={onSelect} />);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should call onSelect when the date is selected', () => {
		render(<Datepicker onSelect={onSelect} />);

		const input = screen.getByRole('textbox');

		userEvent.click(input);

		userEvent.click(screen.getByText(`${new Date(Date.now()).getDate()}`));

		expect(onSelect).toHaveBeenCalledTimes(1);
	});
});
