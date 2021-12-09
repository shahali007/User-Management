import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().nullable(true),
    email: Yup.string().email('Enter a valid email').required('Required'),
    alternateEmail: Yup.string().email('Enter a valid email').nullable(true),
    phone: Yup.number().required('Phone is required').typeError('You must specify a number'),
    alternatePhone: Yup.number().typeError('You must specify a number').nullable(true),
    presentAddress: Yup.string().required('Required').nullable(true),
    permanentAddress: Yup.string().required('Required').nullable(true),
    lastEducationDegree: Yup.string().nullable(true),
    lastEducationInstitute: Yup.string().nullable(true),
    country: Yup.string().nullable(true),
    occupation: Yup.string().nullable(true)
});

export { validationSchema };