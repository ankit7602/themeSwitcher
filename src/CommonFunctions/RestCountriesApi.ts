import axios, { AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

// Define a type for the error handler function parameter
interface RequestError extends AxiosError {
    message: string;
}

export interface Country {
    name: {
        common: string;
        official: string;
        nativeName?: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    flags: {
        png: string;
        svg: string;
    };
    cca3: string
}

// Function to handle HTTP errors
const handleError = (error: RequestError): never => {
    console.error('Request failed:', error.message);
    throw error;
};

// Function to make a GET request
export const get = async <T>(endpoint: string): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await axios.get(`${BASE_URL}${endpoint}`);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleError(error as RequestError);
        } else {
            console.error('Unexpected error:', error);
            throw error;
        }
    }
    // Adding a return statement to satisfy TypeScript's type checker
    throw new Error('Unhandled exception');
};

// Define a generic interface for post data
type PostData = Record<string, unknown>;

// Function to make a POST request 
export const post = async <T>(endpoint: string, data: PostData): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await axios.post(`${BASE_URL}${endpoint}`, data);
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleError(error as RequestError);
        } else {
            console.error('Unexpected error:', error);
            throw error;
        }
    }
    // Adding a return statement to satisfy TypeScript's type checker
    throw new Error('Unhandled exception');
};
