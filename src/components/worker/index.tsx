import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import Button from '../button';

import { useCart } from '../../hooks/cart';
import { useApplication } from '../../hooks/application';

import { HOME } from '../../constants/routes';

import { ICartItem, IWorker } from '../../types';

import therapistImg from '../../assets/therapist.jpeg';

import {
	WorkerButtonsContainer,
	WorkerContainer,
	WorkerImage,
	WorkerImageContainer,
	WorkerInformation,
	WorkerInformationContainer,
	WorkerInformationItem,
	WorkerItem,
} from './index.styles';

interface IWorkerProps {
	item: IWorker;
	index: number;
	getItemProps: any;
}

const Worker = ({ item, index, getItemProps }: IWorkerProps) => {
	const history = useHistory();
	const { selectedSlot } = useApplication();
	const { addToCart } = useCart();

	const handleClick = () => {
		const cartItem: ICartItem = {
			id: uuidv4(),
			slot: selectedSlot,
			worker: item,
			price: Number(selectedSlot?.price.replace(/[^0-9.-]+/g, '')) ?? 0,
			amount: 1,
		};

		addToCart(cartItem);
		history.push(HOME);
	};

	return (
		<WorkerItem {...getItemProps({ key: index, index, item })}>
			<WorkerContainer>
				<WorkerImageContainer>
					<WorkerImage src={therapistImg} alt={`Worker ${index}`} />
				</WorkerImageContainer>

				<WorkerInformationContainer>
					<WorkerInformationItem>
						<WorkerInformation>Name:</WorkerInformation>

						<WorkerInformation>{item.name}</WorkerInformation>
					</WorkerInformationItem>

					<WorkerInformationItem>
						<WorkerInformation>Rating:</WorkerInformation>

						<WorkerInformation>
							{'⭐'.repeat(parseInt(item.rating))}
						</WorkerInformation>
					</WorkerInformationItem>
				</WorkerInformationContainer>

				<WorkerButtonsContainer>
					<Button onClick={handleClick}>Book</Button>
				</WorkerButtonsContainer>
			</WorkerContainer>
		</WorkerItem>
	);
};

export default Worker;
