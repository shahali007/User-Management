import client from "../client";
import { Login, register } from "../../../typings/authTypings";

const login = (data: Login) => client.post('/login', data);
const register = (data: register) => client.post('/register', data);

const auth = {
    login,
    register
};

export default auth;