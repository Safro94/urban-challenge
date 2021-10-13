import { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';

import { IWorker } from '../../types';

import {
	AutoCompleteContainer,
	AutoCompleteInput,
	AutoCompleteInputContainer,
	AutoCompleteLabel,
	AutoCompleteWrapper,
} from './index.styles';

export interface IAutoCompleteProps {
	items: IWorker[];
	labelText: string;
	filterProp: 'name';
	render?: any;
	placeholder: string;
	inputRef?: any;
}

const AutoComplete = ({
	items,
	labelText,
	filterProp,
	render,
	placeholder,
	inputRef,
}: IAutoCompleteProps) => {
	const [inputItems, setInputItems] = useState<IWorker[]>([]);

	const {
		isOpen,
		getLabelProps,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		getItemProps,
	} = useCombobox({
		items: inputItems,
		itemToString: item => (item ? item[filterProp] : ''),

		onInputValueChange: ({ inputValue }) => {
			const inputItem = items.filter(item => {
				return item[filterProp]
					.toLowerCase()
					.startsWith(inputValue?.toLowerCase() ?? '');
			});

			setInputItems(inputItem);
		},
	});

	useEffect(() => {
		setInputItems(items);
	}, [items]);

	return (
		<AutoCompleteContainer>
			<AutoCompleteWrapper>
				<AutoCompleteLabel {...getLabelProps()}>{labelText}</AutoCompleteLabel>

				<AutoCompleteInputContainer {...getComboboxProps()}>
					<AutoCompleteInput
						isOpen={isOpen}
						{...getInputProps({
							placeholder,
							ref: inputRef,
						})}
						isActive={isOpen}
					/>
				</AutoCompleteInputContainer>
			</AutoCompleteWrapper>

			{render(getMenuProps, inputItems, getItemProps, isOpen)}
		</AutoCompleteContainer>
	);
};

export default AutoComplete;
