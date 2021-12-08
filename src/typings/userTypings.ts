export interface UpdateUser{
    firstname: string,
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

export interface ChangePassword{
    currentPassword: string,
    password: string,
}