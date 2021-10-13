import { render, screen } from '../../../utils/test-utils';

import Workers from '..';

jest.mock('../../../containers/workersContainer', () => () => (
	<div>workers container</div>
));

describe('Workers', () => {
	it('should render the mocked container', () => {
		render(<Workers />);

		expect(screen.getByText(/workers container/i)).toBeInTheDocument();
	});
});
