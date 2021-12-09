export interface ChangePasswordValues {
    confirmPassword: string,
    password: string,
    currentPassword: string
}

export interface ChangePasswordObj {
    current_password: string,
    password: string
}

export interface User {
    authToken: string,
    firstName: string,
    lastName: string | null,
    email: string,
    alternateEmail: string | null,
    phone: string,
    alternatePhone: string | null,
    presentAddress: string | null,
    permanentAddress: string | null,
    lastEducationDegree: string | null,
    lastEducationInstitute: string | null,
    country: string | null,
    occupation: string | null,
    profilePicture?: string | null
}
export interface UserValues {
    firstName: string,
    lastName: string | null,
    email: string,
    alternateEmail: string | null,
    phone: string,
    alternatePhone: string | null,
    presentAddress: string | null,
    permanentAddress: string | null,
    lastEducationDegree: string | null,
    lastEducationInstitute: string | null,
    country: string | null,
    occupation: string | null,
}
export interface UserObj {
    first_name: string,
    last_name: string | null,
    email: string,
    alternate_email: string | null,
    phone: string,
    alternate_phone: string | null,
    present_address: string | null,
    permanent_address: string | null,
    last_education_degree: string | null,
    last_education_institute: string | null,
    country: string | null,
    occupation: string | null,
}

