import { render, screen } from '../../../utils/test-utils';

import Form from '..';

describe('Form', () => {
	const onClick = jest.fn();

	it('should render a a label and a button', () => {
		render(
			<Form>
				<Form.Label>Label</Form.Label>
				<Form.Submit onClick={onClick} disabled>
					Book
				</Form.Submit>
			</Form>
		);

		expect(screen.getByText(/label/i)).toBeInTheDocument();
		expect(screen.getByText(/book/i)).toBeDisabled();
	});

	it('should have a button not disabled', () => {
		render(
			<Form>
				<Form.Submit onClick={onClick}>Book</Form.Submit>
			</Form>
		);

		expect(screen.getByText(/book/i)).not.toBeDisabled();
	});

	it('should have a disabled button', () => {
		render(
			<Form>
				<Form.Submit disabled onClick={onClick}>
					Book
				</Form.Submit>
			</Form>
		);

		expect(screen.getByText(/book/i)).toBeDisabled();
	});
});
