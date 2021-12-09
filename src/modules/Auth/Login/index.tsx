import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { store } from 'react-notifications-component';
import { useFormik } from "formik";

import api from "../../../shared/api";
import actions from "../../../redux/actions";
import { initialValues, validationSchema } from "./formik";
import { RootState } from "../../../redux/store";
import { Login as LoginTypes } from "../../../typings/authTypings";

const theme = createTheme();

export default function Login() {
	const dispatch = useDispatch();
	const [loading, setLoading] = React.useState<boolean>(false);

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: values => {
			handleSubmit(values);
		},
	});

	const handleSubmit = async (values: LoginTypes) => {
		setLoading(true);
		try {
			const response = await api.auth.login(values);
			console.log(response);
			dispatch(actions.auth.loginUser({
				authToken: `Bearer ${response.data.token}`,
				firstName: response.data.data.first_name,
				lastName: response.data.data.last_name,
				email: response.data.data.email,
				alternateEmail: response.data.data.alternate_email,
				phone: response.data.data.phone,
				alternatePhone: response.data.data.alternate_phone,
				presentAddress: response.data.data.present_address,
				permanentAddress: response.data.data.permanent_address,
				lastEducationDegree: response.data.data.last_education_degree,
				lastEducationInstitute: response.data.data.last_education_institute,
				country: response.data.data.country,
				occupation: response.data.data.occupation,
				profilePicture: response.data.data.profile_picture,
			}));
			setLoading(false);
		}
		catch (error: any) {
			// on user not found returns 404
			if (error.status === 404) {
				window.location.href = "/login";
			} else {
				setLoading(false);
				store.addNotification({
					title: "Error!",
					message: 'Unauthorised! Please type valid email and password',
					type: "danger",
					insert: "top",
					container: "top-right",

					dismiss: {
						duration: 5000,
						onScreen: true
					}
				});
			}
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form onSubmit={formik.handleSubmit}>
					<Box
						sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
						<TextField
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
						<Typography align="center">
							{loading && <Box my={2}><CircularProgress color="secondary" /></Box>}
						</Typography>
						{!loading && (
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}>
								Sign In
							</Button>
						)}
						<Box
							sx={{
								marginTop: 4,
								marginBottom: 4,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}>
							<Link to="/register">
								{"Don't have an account? Sign Up"}
							</Link>
						</Box>
					</Box>
				</form>
			</Box>
		</Container>
	);
}
