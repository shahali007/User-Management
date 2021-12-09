import * as Yup from 'yup';

const initialValues = {
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
    password: '',
    confirmPassword: '',
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string(),
    email: Yup.string().email('Enter a valid email').required('Required'),
    alternateEmail: Yup.string().email('Enter a valid email'),
    phone: Yup.number().required('Phone is required').typeError('You must specify a number'),
    alternatePhone: Yup.number().typeError('You must specify a number'),
    presentAddress: Yup.string().required('Required'),
    permanentAddress: Yup.string().required('Required'),
    lastEducationDegree: Yup.string(),
    lastEducationInstitute: Yup.string(),
    country: Yup.string(),
    occupation: Yup.string(),
    password: Yup
        .string()
        .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export { initialValues, validationSchema };