import { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useHistory } from 'react-router';

import Datepicker from '../../components/datepicker';
import Button from '../../components/button';

import { WORKERS } from '../../constants/routes';

import { useApplication } from '../../hooks/application';

import SlotService from '../../services/slotService';

import { ISlot } from '../../types';

import { DpWrapper, SlotsContainer } from './index.styles';

const Index = () => {
	const history = useHistory();
	const { setSelectedSlot } = useApplication();
	const handleError = useErrorHandler();

	const [slots, setSlots] = useState<ISlot[]>([]);

	const handleSelect = async () => {
		const apiSlots = await SlotService.getSlots(handleError);
		setSlots(apiSlots);
	};

	const handleClick = (slot: ISlot) => {
		setSelectedSlot(slot);
		history.push(`${WORKERS}?slotId=${slot.id}`);
	};

	return (
		<>
			<DpWrapper>
				<Datepicker onSelect={handleSelect} />
			</DpWrapper>
			{slots.length > 0 && (
				<SlotsContainer>
					{slots.map((slot: ISlot) => (
						<Button onClick={() => handleClick(slot)} key={slot.id}>
							{slot.localisedTime} - {slot.price}
						</Button>
					))}
				</SlotsContainer>
			)}
		</>
	);
};

export default Index;
