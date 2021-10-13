import { AxiosResponse } from 'axios';
import {
	IAvailableWorkersResponse,
	ISlotsResponse,
	IWorkerResponse,
	RequestMethods,
} from '../types';

import axios from './axios';

interface IFetcher {
	method?: RequestMethods;
	url: string;
	data?: null | any;
	body?: null | any;
}

type Response = IWorkerResponse | ISlotsResponse | IAvailableWorkersResponse;

const fetcher = async ({
	method = RequestMethods.GET,
	url,
	body = null,
}: IFetcher): Promise<AxiosResponse<Response>> => {
	try {
		const res: AxiosResponse<Response> = await axios[method](url, body);
		return res;
	} catch (error) {
		throw error;
	}
};

export default fetcher;
