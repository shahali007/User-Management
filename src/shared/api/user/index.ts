import { AxiosResponse } from 'axios';

import client from "../client";
import { ChangePasswordObj, User } from "../../../typings/userTypings";

const update = (data: User): Promise<AxiosResponse> => client.post('/profile-update/', data);
const changePassword = (data: any): Promise<AxiosResponse> => client.post('/change-password', data);
const updateProfilePicture = (data: string): Promise<AxiosResponse> => client.post('/profile-picture', data);

const user = {
    update,
    changePassword,
    updateProfilePicture
};
export default user;