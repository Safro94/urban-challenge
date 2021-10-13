import { useEffect, useRef, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';

import AutoComplete from '../../components/autocomplete';
import Worker from '../../components/worker';

import { HOME } from '../../constants/routes';

import { useApplication } from '../../hooks/application';

import WorkerService from '../../services/workerService';

import { IAvailableWorker, IWorker } from '../../types';

import {
	WorkerContainer,
	WorkerContainerMenuList,
	WorkerContainerLink,
	WorkerLinkContainer,
} from './index.styles';

const Index = () => {
	const { workers: contextWorkers } = useApplication();
	const inputRef = useRef<HTMLInputElement>();
	const handleError = useErrorHandler();

	const queryParams = new URLSearchParams(useLocation().search);
	const slotId = Number(queryParams.get('slotId') ?? '');

	const [workers, setWorkers] = useState<IWorker[]>([]);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	useEffect(() => {
		const getWorkers = async () => {
			const apiWorkers = await WorkerService.getAvailableWorkers(handleError);
			const workersIds = apiWorkers.find((worker: IAvailableWorker) => {
				return worker.slotId === slotId;
			})?.availableWorkersIds;

			const workersById = contextWorkers.filter((worker: IWorker) =>
				workersIds?.includes(worker.id)
			);

			setWorkers(workersById);
		};

		getWorkers();
	}, [handleError, slotId, contextWorkers]);

	return (
		<WorkerContainer>
			<AutoComplete
				placeholder='Select a worker'
				items={workers}
				labelText='Select a worker'
				inputRef={inputRef}
				filterProp='name'
				render={(
					getMenuProps: any,
					inputItems: IWorker[],
					getItemProps: any
				) => (
					<WorkerContainerMenuList {...getMenuProps()}>
						{inputItems.map((item: IWorker, index: number) => (
							<Worker
								key={item.id}
								item={item}
								index={index}
								getItemProps={getItemProps}
							/>
						))}
					</WorkerContainerMenuList>
				)}
			/>
			<WorkerLinkContainer>
				<WorkerContainerLink to={HOME}>Go back</WorkerContainerLink>
			</WorkerLinkContainer>
		</WorkerContainer>
	);
};

export default Index;
