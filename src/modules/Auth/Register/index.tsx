import * as React from "react";
import { Button, Container, Grid, Box, Avatar, Typography, TextField } from "@mui/material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from 'react-router-dom'
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch, useSelector } from 'react-redux';
import { store } from 'react-notifications-component';
import { useFormik } from "formik";
import classes from "./register.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import api from "../../../shared/api";
import actions from "../../../redux/actions";
import { RegisterValues } from "../../../typings/authTypings";
import { initialValues, validationSchema } from "./formik";

const Register = (): JSX.Element => {
	const dispatch = useDispatch();
	const [loading, setLoading] = React.useState<boolean>(false);
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: values => {
			handleSubmit(values);
		},
	});


	const handleSubmit = async (values: RegisterValues) => {
		console.log(values);
		setLoading(true);
		const obj = {
			first_name: values.firstName,
			last_name: values.lastName,
			email: values.email,
			alternate_email: values.alternateEmail,
			phone: values.phone,
			alternate_phone: values.alternatePhone,
			present_address: values.presentAddress,
			permanent_address: values.permanentAddress,
			last_education_degree: values.lastEducationDegree,
			last_education_institute: values.lastEducationInstitute,
			country: values.country,
			occupation: values.occupation,
			password: values.password
		}
		try {
			const response = await api.auth.register(obj);
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
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<AssignmentIndIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Registration
				</Typography>
				<form onSubmit={formik.handleSubmit}>
					<Box sx={{ mt: 1 }}>
						<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									required
									fullWidth
									id="firstName"
									label="First Name"
									name="firstName"
									autoComplete="firstName"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.firstName}
									error={formik.touched.firstName && Boolean(formik.errors.firstName)}
									helperText={formik.touched.firstName && formik.errors.firstName}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="lastName"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.lastName}
									error={formik.touched.lastName && Boolean(formik.errors.lastName)}
									helperText={formik.touched.lastName && formik.errors.lastName}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email"
									name="email"
									autoComplete="email"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									fullWidth
									id="alternateEmail"
									label="Alternate Email"
									name="alternateEmail"
									autoComplete="alternateEmail"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.alternateEmail}
									error={formik.touched.alternateEmail && Boolean(formik.errors.alternateEmail)}
									helperText={formik.touched.alternateEmail && formik.errors.alternateEmail}
								/>
							</Grid>

							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="password"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.password}
									error={formik.touched.password && Boolean(formik.errors.password)}
									helperText={formik.touched.password && formik.errors.password}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									required
									fullWidth
									name="confirmPassword"
									label="Confirm Password"
									type="password"
									id="confirmPassword"
									autoComplete="confirmPassword"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.confirmPassword}
									error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
									helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									fullWidth
									name="lastEducationDegree"
									label="Last Education Degree"
									id="lastEducationDegree"
									autoComplete="lastEducationDegree"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.lastEducationDegree}
									error={formik.touched.lastEducationDegree && Boolean(formik.errors.lastEducationDegree)}
									helperText={formik.touched.lastEducationDegree && formik.errors.lastEducationDegree}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									fullWidth
									name="lastEducationInstitute"
									label="Last Education Institute"
									id="lastEducationInstitute"
									autoComplete="lastEducationInstitute"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.lastEducationInstitute}
									error={formik.touched.lastEducationInstitute && Boolean(formik.errors.lastEducationInstitute)}
									helperText={formik.touched.lastEducationInstitute && formik.errors.lastEducationInstitute}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									required
									fullWidth
									id="presentAddress"
									label="Present Address"
									name="presentAddress"
									autoComplete="presentAddress"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.presentAddress}
									error={formik.touched.presentAddress && Boolean(formik.errors.presentAddress)}
									helperText={formik.touched.presentAddress && formik.errors.presentAddress}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									required
									fullWidth
									id="permanentAddress"
									label="Permanent Address"
									name="permanentAddress"
									autoComplete="permanentAddress"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.permanentAddress}
									error={formik.touched.permanentAddress && Boolean(formik.errors.permanentAddress)}
									helperText={formik.touched.permanentAddress && formik.errors.permanentAddress}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									fullWidth
									name="phone"
									label="Mobile No"
									id="phone"
									autoComplete="phone"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.phone}
									error={formik.touched.phone && Boolean(formik.errors.phone)}
									helperText={formik.touched.phone && formik.errors.phone}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									margin="normal"
									fullWidth
									name="alternatePhone"
									label="Alternate Mobile No"
									id="alternatePhone"
									autoComplete="alternatePhone"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.alternatePhone}
									error={formik.touched.alternatePhone && Boolean(formik.errors.alternatePhone)}
									helperText={formik.touched.alternatePhone && formik.errors.alternatePhone}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									margin="normal"
									fullWidth
									name="country"
									label="Country"
									id="country"
									autoComplete="country"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.country}
									error={formik.touched.country && Boolean(formik.errors.country)}
									helperText={formik.touched.country && formik.errors.country}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									margin="normal"
									fullWidth
									name="occupation"
									label="Occupation"
									id="occupation"
									autoComplete="occupation"
									InputLabelProps={{
										shrink: true
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.occupation}
									error={formik.touched.occupation && Boolean(formik.errors.occupation)}
									helperText={formik.touched.occupation && formik.errors.occupation}
								/>
							</Grid>

						</Grid>
						<Typography align="center">
							{loading && <Box my={2}><CircularProgress color="secondary" /></Box>}
						</Typography>
						{!loading && (
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}>
								Registration
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
							<Link to="/login">
								{"Already have an account? Sign In"}
							</Link>
						</Box>
					</Box>
				</form>
			</Box>
		</Container>
	);
};

export default Register;
