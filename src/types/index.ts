export interface ISlot {
	id: number;
	localisedTime: string;
	price: string;
}

export interface IWorker {
	id: number;
	name: string;
	rating: string;
	isNew: boolean;
}

export interface ICartItem {
	id: string;
	slot: ISlot | null;
	worker: IWorker;
	price: number;
	amount: number;
}

export interface IAvailableWorker {
	slotId: number;
	availableWorkersIds: number[];
}

export interface IWorkerResponse {
	workers: IWorker[];
}

export interface ISlotsResponse {
	slots: ISlot[];
}

export interface IAvailableWorkerResponse {
	slot_id: number;
	availableWorker_ids: number[];
}

export interface IAvailableWorkersResponse {
	'available-workers': IAvailableWorkerResponse[];
}

export interface ISelectOption {
	label: string;
	value: string;
	[key: string]: unknown;
}

export enum RequestMethods {
	GET = 'get',
	POST = 'post',
	DELETE = 'delete',
}

export enum ButtonTypes {
	Primary = 'primary',
}
