import { User } from '../../typings/userTypings';
import { AuthType, UserAction } from './actionType';


export type State = {
  currentUser: User;
};

const initialState: State = {
  currentUser: {
    authToken: '',
    firstName: '',
    lastName: '',
    email: '',
    alternateEmail: '',
    phone: '',
    alternatePhone: '',
    presentAddress: '',
    permanentAddress: '',
    lastEducationDegree: '',
    lastEducationInstitute: '',
    country: '',
    occupation: '',
  }
};

export default (state: State = initialState, action: UserAction) => {
  //console.log('action', action);
  switch (action.type) {
    case AuthType.LOGIN_USER:
      //console.log('action.payload', action.payload);
      return {
        ...state,
        currentUser: action.payload,
      };
    case AuthType.LOGOUT_USER:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};
