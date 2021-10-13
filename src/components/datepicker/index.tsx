import Form from '../form';

import {
	DpWrapper,
	DpInput,
	DpCalendar,
	DpTable,
	DpButton,
	TopBar,
	DpMonth,
	InputContainer,
} from './index.styles';

interface IDatePickerProps {
	labelText?: string;
	onSelect: () => void;
}

const Datepicker = ({
	onSelect,
	labelText = 'Select a date',
}: IDatePickerProps) => {
	return (
		<DpWrapper onSelect={onSelect} minDate={new Date(Date.now())}>
			<InputContainer>
				<Form.Label>
					{labelText}
					<DpInput />
				</Form.Label>
			</InputContainer>

			<DpCalendar>
				<TopBar>
					<DpButton
						aria-label='Switch to the previous month.'
						updateMonth={({ prev }) => prev()}
					>
						<svg focusable='false' viewBox='0 0 1000 1000' aria-hidden='true'>
							<path d='M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z' />
						</svg>
					</DpButton>
					<DpMonth />
					<DpButton
						aria-label='Switch to the next month.'
						updateMonth={({ next }) => next()}
					>
						<svg focusable='false' viewBox='0 0 1000 1000' aria-hidden='true'>
							<path d='M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z' />
						</svg>
					</DpButton>
				</TopBar>
				<DpTable />
			</DpCalendar>
		</DpWrapper>
	);
};

export default Datepicker;
