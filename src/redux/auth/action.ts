import { User } from '../../typings/userTypings';
import { AuthType } from './actionType';

const loginUser = (user: User) => ({
  type: AuthType.LOGIN_USER,
  payload: user
});

const logoutUser = (history: AuthType.LOGOUT_USER) => ({
  type: AuthType.LOGOUT_USER,
  payload: { history }
});

export default { loginUser, logoutUser };
