import { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import DateSelectionContainer from '../../containers/dateSelectionContainer';

import WorkerService from '../../services/workerService';

import { useApplication } from '../../hooks/application';

import {
	HomeWrapper,
	HomeInformationContainer,
	HomeInformation,
	HomeTimeSlot,
	HomeUsername,
	HomeContent,
} from './index.styles';

const Home = () => {
	const { setWorkers } = useApplication();
	const handleError = useErrorHandler();

	useEffect(() => {
		const getWorkers = async () => {
			const apiWorkers = await WorkerService.getWorkers(handleError);
			setWorkers(apiWorkers);
		};

		getWorkers();
	}, [handleError, setWorkers]);

	return (
		<HomeWrapper>
			<HomeContent>
				<HomeInformationContainer>
					<HomeUsername>Welcome Matias Safranchik</HomeUsername>
					<HomeTimeSlot>30 minutes appointment</HomeTimeSlot>
					<HomeInformation>
						A 30 minutes appointment with the best practitioners in the world.
						Select the date and time and enjoy the best experience of your life!
					</HomeInformation>
				</HomeInformationContainer>
				<DateSelectionContainer />
			</HomeContent>
		</HomeWrapper>
	);
};

export default Home;
