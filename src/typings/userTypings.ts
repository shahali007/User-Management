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
    profilePicture: string | null
}

