export interface Login {
    email: string,
    password: string
}

export interface register {
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
    password: string
}