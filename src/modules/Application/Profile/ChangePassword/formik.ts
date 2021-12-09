import * as Yup from 'yup';

const initialValues = {
    currentPassword: '',
    password: '',
    confirmPassword: '',
};

const validationSchema = Yup.object().shape({
    currentPassword: Yup
        .string()
        .required('Password is required'),
    password: Yup
        .string()
        .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export { initialValues, validationSchema };