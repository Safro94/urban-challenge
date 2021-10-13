import styled from 'styled-components';

import {
	DatePicker,
	DatePickerInput,
	DatePickerCalendar,
	DatePickerButton,
	DatePickerMonth,
	DatePickerTable,
} from '@reecelucas/react-datepicker';

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const DpWrapper = styled(DatePicker)`
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const DpInput = styled(DatePickerInput)`
	border: none;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	display: block;
	height: 40px;
	font-size: 18px;
	padding: 0 8px;
`;

export const DpCalendar = styled(DatePickerCalendar)(
	({ theme }) => `
	background-color: ${theme.palette.common.white};
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	padding: 20px;
	margin: 10px 0;
	position: relative;

	&:before {
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 8px solid ${theme.palette.common.white};
		content: '';
		height: 0;
		left: 50%;
		position: absolute;
		top: 0;
		transform: translate(-50%, -100%);
		width: 0;
	}
`
);

export const TopBar = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 12px;
`;

export const DpMonth = styled(DatePickerMonth)`
	font-weight: 700;
	padding: 0 16px;
	text-align: center;
	width: 200px;
`;

export const DpButton = styled(DatePickerButton)(
	({ theme }) => `
	border: 1px solid #e4e7e7;
	border-radius: 2px;
	color: #82888a;
	cursor: pointer;
	line-height: 1;
	padding: 2px 6px;
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: ${theme.palette.primary.main};
		color: ${theme.palette.primary.text};
	}

	svg {
		display: block;
		width: 22px;

		path {
			fill: currentColor;
		}
	}
`
);

export const DpTable = styled(DatePickerTable)(
	({ theme }) => `
	border-collapse: collapse;
	width: 100%;

	th,
	td {
		font-size: 14px;
		text-align: center;
		user-select: none;
	}

	th {
		color: #82888a;
		font-weight: 400;
		line-height: 1.6;
	}

	td {
		cursor: pointer;
		height: 36px;
		line-height: 1;
		width: 36px;
		transition: 0.3s ease-in-out;
		
		&:hover {
			background-color: ${theme.palette.primary.main};
			color: ${theme.palette.primary.text};
		}

		&[aria-disabled='true'] {
			opacity: 0.5;
			pointer-events: none;
		}

		&[aria-selected='true'] {
			background-color: ${theme.palette.primary.main};
			color: ${theme.palette.primary.text};
		}

		&:not(:empty) {
			border: 1px solid #e4e7e7;
		}
	}
`
);
