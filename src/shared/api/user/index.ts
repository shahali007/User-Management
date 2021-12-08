import { AxiosResponse } from 'axios';

import client from "../client";
import { ChangePassword, User } from "../../../typings/userTypings";

const update = (data: User): Promise<AxiosResponse> => client.post('/profile-update/', data);
const changePassword = (data: ChangePassword): Promise<AxiosResponse> => client.post('/change-password', data);

const user = {
    update,
    changePassword
};
export default user;