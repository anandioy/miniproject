
import instance from "../../../utils/axiosInstance";

export const getUserProfile = async () => {
    try {
        const response = await instance.get(`/auth/profile`);
        return response.data.user;
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
};