import { useHistory } from 'react-router';

import Button from '../button';

import { HOME } from '../../constants/routes';

import { IWorker } from '../../types';

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

	const handleClick = () => {
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
