import axios, { AxiosError, AxiosResponse } from "axios";
import { ApiPaths } from "./ApiPaths.ts";

interface ApiResponse<T> {
    data: T;
}

export interface AuthenticationRequest {
    userNameReq: string;
    authToken: string;
}

const handleApiResponse = <T>(response: AxiosResponse<ApiResponse<T>>): T => response.data as T;

//TODO, notification?
const handleApiError = (error: AxiosError): void => {
    // You can handle errors based on your requirements
    console.error("API Error:", error.message);
};

class RestUtils {
    public static async get<T>(url: string): Promise<T> {
        try {
            const response = await axios.get<ApiResponse<T>>(ApiPaths.HOST.concat(url));
            return handleApiResponse(response);
        } catch (error) {
            const axiosError: AxiosError = error as AxiosError;
            handleApiError(axiosError);
            return undefined as T;
        }
    }

    public static async post<T>(url: string, data: any): Promise<T> {
        try {
            const response = await axios.post<ApiResponse<T>>(ApiPaths.HOST.concat(url), data);
            return handleApiResponse(response);
        } catch (error) {
            const axiosError: AxiosError = error as AxiosError;
            handleApiError(axiosError);
            return undefined as T;
        }
    }

    public static async put<T>(url: string, data: any): Promise<T> {
        try {
            const response = await axios.put<ApiResponse<T>>(ApiPaths.HOST.concat(url), data);
            return handleApiResponse(response);
        } catch (error) {
            const axiosError: AxiosError = error as AxiosError;
            handleApiError(axiosError);
            return undefined as T;
        }
    }

    public static async _delete<T>(url: string): Promise<T> {
        try {
            const response = await axios.delete<ApiResponse<T>>(ApiPaths.HOST.concat(url));
            return handleApiResponse(response);
        } catch (error) {
            const axiosError: AxiosError = error as AxiosError;
            handleApiError(axiosError);
            return undefined as T;
        }
    }
}

export default RestUtils;
