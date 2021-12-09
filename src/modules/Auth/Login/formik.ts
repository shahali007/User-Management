import * as Yup from "yup";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Enter a valid email").required("Required"),
	password: Yup.string().min(8).required("Password is required"),
});

export { initialValues, validationSchema };
