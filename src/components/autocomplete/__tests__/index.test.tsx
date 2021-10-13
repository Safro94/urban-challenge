import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../utils/test-utils';

import Autocomplete from '..';

import { IWorker } from '../../../types';

describe('Autocomplete', () => {
	const items = [
		{
			id: 1,
			name: 'Maxwell Smith',
			rating: '4.1',
			isNew: false,
		},
		{
			id: 2,
			name: 'Melina Smith',
			rating: '4.2',
			isNew: false,
		},
	];
	const labelText = 'text';
	const filterProp = 'name';
	const placeholder = 'input';

	beforeEach(() => {
		render(
			<Autocomplete
				items={items}
				labelText={labelText}
				filterProp={filterProp}
				render={(getMenuProps: any, inputItems: IWorker[]) => (
					<div {...getMenuProps()}>
						<ul>
							{inputItems.map((item: IWorker) => (
								<li
									role='option'
									aria-selected='false'
									key={item.id}
									data-testid='option'
								>
									{item.name}
								</li>
							))}
						</ul>
					</div>
				)}
				placeholder={placeholder}
			/>
		);
	});

	it('should filter the options while the user types', async () => {
		const input = screen.getByPlaceholderText(/input/i);

		expect(screen.getByText(/text/i)).toBeInTheDocument();
		expect(input).toBeInTheDocument();

		expect(screen.getAllByRole('option')).toHaveLength(2);

		userEvent.type(input, 'M');
		expect(screen.getAllByRole('option')).toHaveLength(2);

		userEvent.type(input, 'e');
		expect(screen.getAllByRole('option')).toHaveLength(1);
	});
});
