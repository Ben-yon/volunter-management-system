export interface FormDataInterface{

    firstName: string;
    lastName: string;
    date: string;
    daysPerWeek: string;
    contact: string;
    email: string;
    address: string;
    streetAddress: string;
    city: string;
    province: string;
    postalCode: string;
    occupation: string;
    skills: string;
    interest: string;
}

export interface AdminSignInFormData {
    email: string;
    password: string;
}

export interface AdminSignUpFormData{
    firstName: string;
    surname: string;
    email: string;
    password: string;
}

export interface AdminResetPasswordFormData{
    email: string;
}

export interface AdminNewPasswordFormData{
    password: string;
    confirmPassword: string;
}