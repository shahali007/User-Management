import { AxiosResponse } from 'axios';
import client from "../client";
import { Login, RegisterObj } from "../../../typings/authTypings";

const login = (data: Login): Promise<AxiosResponse> => client.post('/login', data);
const register = (data: RegisterObj): Promise<AxiosResponse> => client.post('/register', data);

const auth = {
    login,
    register
};

export default auth;