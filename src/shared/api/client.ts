import axios from 'axios';

import { store } from "../../redux/store";
import { baseUrl } from "./api";

export const client = axios.create({
    baseURL: baseUrl,
});

client.interceptors.request.use((config: any) => {
    const { auth } = store.getState();

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
        if (error.response.status === 401) {

            setTimeout(() => {
                localStorage.clear();
                window.location.href = '/login'
            }, 3000)
        }
        else if (error.response.status === 404) {
            //...
        }
        else if (error.response.status === 500) {
            //...
        }
        //console.log('Axios error', error);
        return Promise.reject({
            status: error.response.status,
            response: error.response.data,
        });
    },
);

export default client;
