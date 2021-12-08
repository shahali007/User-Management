import axios from 'axios';

import { RootState, store } from "../../redux/store";
import { baseUrl } from "./api";

export const client = axios.create({
    baseURL: baseUrl,
});

client.interceptors.request.use((config: any) => {
    const { auth }: RootState = store.getState();

    if (auth.currentUser.authToken) {
        config.headers.Authorization = `${auth.currentUser.authToken}`;
    }
    //console.log('Axios Request', config);
    return config;
});

client.interceptors.response.use(
    (response: any) => {
        //console.log('Axios Response', response);
        return response;
    },
    (error: any) => {
        if (!error.response) {
            alert('err::CONNECTION::REFUSED');
        }
        //console.log('Axios err.response.status', error.response.status);
        else if (error.response.status === 401 && window.location.pathname !== '/login') {
            localStorage.clear();
            //alert('Session Expired!! Please login');
            window.location.href = '/login?q=session-expired';
        }
        else if (error.response.status === 404) {
            alert('Error 404! Not Found');
        }
        else if (error.response.status === 500) {
            alert('Error 500! Internal Server Error');
        }
        //console.log('Axios error', error);
        return Promise.reject({
            status: error.response.status,
            response: error.response.data,
        });
    },
);

export default client;
