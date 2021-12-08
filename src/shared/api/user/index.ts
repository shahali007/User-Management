import client from "../client";
import { ChangePassword, UpdateUser } from "../../../typings/userTypings";

const update = (data: UpdateUser) => client.put('/profile-update/', data);
const changePassword = (data: ChangePassword) => client.delete('/change-password', data);

const user = {
    update,
    changePassword
};
export default user;