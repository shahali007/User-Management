import { AxiosResponse } from 'axios';

import client from "../client";
import { ChangePasswordObj, UserObj } from "../../../typings/userTypings";

const update = (data: UserObj): Promise<AxiosResponse> => client.post('/profile-update', data);
const changePassword = (data: any): Promise<AxiosResponse> => client.post('/change-password', data);
const updateProfilePicture = (data: any): Promise<AxiosResponse> => client.post('/profile-picture', data, { headers: { 'Content-Type': 'multipart/form-data' } });

const user = {
    update,
    changePassword,
    updateProfilePicture
};
export default user;