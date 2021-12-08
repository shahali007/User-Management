import {AuthType} from './actionType';
import {User} from './reducer';

const loginUser = (user: User) => ({
  type: AuthType.LOGIN_USER,
  payload: user
});

const logoutUser = (history: AuthType.LOGOUT_USER) => ({
  type: AuthType.LOGOUT_USER,
  payload: {history}
});

export default {loginUser, logoutUser};
