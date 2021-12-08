export enum AuthType {
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER'
}

interface LoginAction {
  type: typeof AuthType.LOGIN_USER;
  payload: any;
}

interface LogoutAction {
  type: typeof AuthType.LOGOUT_USER;
}

export type UserAction = LoginAction | LogoutAction;
