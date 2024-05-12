
import instance from "../../../utils/axiosInstance";

export const getUserProfile = async () => {
    try {
        const response = await instance.get(`/auth/profile`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching user data', error)
        throw new Error('Failed to fetch user data');
    }
};