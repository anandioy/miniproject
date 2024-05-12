import instance from "../../../utils/axiosInstance";
import { AxiosError } from 'axios';

export const createEvent = async (eventData: any) => {
    try {
        const response = await instance.post(`auth/create-event`, eventData);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
            
            console.error('Request failed with status:', axiosError.response.status);
            console.error('Response data:', axiosError.response.data);
            throw new Error(`Request failed with status: ${axiosError.response.status}`);
        } else if (axiosError.request) {
           
            console.error('Request made but no response received:', axiosError.request);
            throw new Error('Request made but no response received');
        } else {
         
            console.error('Error setting up request:', axiosError.message);
            throw new Error(`Error setting up request: ${axiosError.message}`);
        }
    }
};