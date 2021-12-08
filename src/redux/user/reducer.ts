import { AuthType, UserAction } from './actionType';

export type EducationHistory = {
  academicQualification: string | any;
  institution: string | any;
}[];

export type JobHistory = {
  address: string | null;
  companyName: string | null;
  designation: string | null;
}[];

export type UserProfile = {
  address1: string;
  address2: string | null;
  affiliatedHospitalName: string | null;
  bloodGroup: string;
  cadetName: string;
  city: string;
  country: number;
  countryCode2: string | null;
  educationHistory: EducationHistory;
  email2: string | null;
  firstName: string;
  houseName: string;
  id: number;
  isBloodDonor: number;
  isJexmed: string | null | number;
  isPrivateEmail2: boolean;
  isPrivatePhone2: boolean;
  isUnemployed: number;
  jobHistory: JobHistory;
  lastDonationDate: string | null;
  lastName: string;
  middleName: string | null;
  occupationId: number;
  phone2: string | null;
  preferredCommunicationChannel: string | null;
  specializationId: string | null;
  tShirtSize: string | null;
};

export type User = {
  apiToken: string;
  cadetNo: string;
  countryCode: string;
  email: string;
  firestoreKey: string;
  id: number;
  intakeNo: number;
  isActive: boolean;
  isOnline: boolean;
  isPrivateEmail: boolean;
  isPrivatePhone: boolean;
  name: string;
  phone: string;
  profile: UserProfile;
  profilePicture: string;
};

export type State = {
  currentUser: User;
};

const initialState: State = {
  currentUser: {
    apiToken: '',
    cadetNo: '',
    countryCode: '',
    email: '',
    firestoreKey: '',
    id: 0,
    intakeNo: 0,
    isActive: true,
    isOnline: true,
    isPrivateEmail: true,
    isPrivatePhone: true,
    name: '',
    phone: '',
    profile: {
      address1: '',
      address2: '',
      affiliatedHospitalName: '',
      bloodGroup: '',
      cadetName: '',
      city: '',
      country: 9,
      countryCode2: '',
      educationHistory: [],
      email2: '',
      firstName: '',
      houseName: '',
      id: 1,
      isBloodDonor: 1,
      isJexmed: '',
      isPrivateEmail2: true,
      isPrivatePhone2: true,
      isUnemployed: 1,
      jobHistory: [],
      lastDonationDate: '',
      lastName: '',
      middleName: '',
      occupationId: 1,
      phone2: '',
      preferredCommunicationChannel: '',
      specializationId: '',
      tShirtSize: ''
    },
    profilePicture: ''
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
        authToken: action.payload.api_token
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
