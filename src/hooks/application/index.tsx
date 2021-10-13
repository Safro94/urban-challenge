import React, {
	createContext,
	useContext,
	useReducer,
	useCallback,
} from 'react';

import { IWorker, ISlot } from '../../types';

enum Types {
	SET_WORKERS = 'SET_WORKERS',
	SET_SELECTED_SLOT = 'SET_SELECTED_SLOT',
}

type ApplicationContextType = {
	workers: IWorker[] | [];
	selectedSlot: ISlot | null;
};

type Action = {
	type: Types;
	value: IWorker[] | ISlot;
};

const initialState = { workers: [], selectedSlot: null };

const ApplicationContext = createContext<
	[state: ApplicationContextType, dispatch: React.Dispatch<Action>]
>([initialState, () => null]);

const useApplication = () => {
	const [application, setApplication] = useContext(ApplicationContext);

	const setWorkers = useCallback(
		(value: IWorker[]) => {
			setApplication({ type: Types.SET_WORKERS, value });
		},
		[setApplication]
	);

	const setSelectedSlot = useCallback(
		(value: ISlot) => {
			setApplication({ type: Types.SET_SELECTED_SLOT, value });
		},
		[setApplication]
	);

	return { ...application, setWorkers, setSelectedSlot };
};

const reducer = (state: any, action: Action) => {
	switch (action.type) {
		case Types.SET_WORKERS:
			return { ...state, workers: action.value };
		case Types.SET_SELECTED_SLOT:
			return { ...state, selectedSlot: action.value };
		default:
			return state;
	}
};

const ApplicationProvider: React.FC = ({ children }) => {
	return (
		<ApplicationContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</ApplicationContext.Provider>
	);
};

export { useApplication, ApplicationProvider };
