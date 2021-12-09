import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { store } from "react-notifications-component";
import { useFormik } from "formik";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";

import { validationSchema } from "./formik";
import api from "../../../../shared/api";
import {
	ChangePasswordValues,
	UserValues,
} from "../../../../typings/userTypings";
import { RootState } from "../../../../redux/store";
import actions from "../../../../redux/actions";

const EditProfile = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((state: RootState) => state.auth);
	const [open, setOpen] = React.useState<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(false);
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			firstName: currentUser.firstName,
			lastName: currentUser.lastName,
			email: currentUser.email,
			alternateEmail: currentUser.alternateEmail,
			phone: currentUser.phone,
			alternatePhone: currentUser.alternatePhone,
			presentAddress: currentUser.presentAddress,
			permanentAddress: currentUser.permanentAddress,
			lastEducationDegree: currentUser.lastEducationDegree,
			lastEducationInstitute: currentUser.lastEducationInstitute,
			country: currentUser.country,
			occupation: currentUser.occupation,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	const handleSubmit = async (values: UserValues) => {
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
		};
		try {
			const response = await api.user.update(obj);
			console.log(response);
			dispatch(
				actions.auth.loginUser({
					authToken: currentUser.authToken,
					firstName: response.data.user.first_name,
					lastName: response.data.user.last_name,
					email: response.data.user.email,
					alternateEmail: response.data.user.alternate_email,
					phone: response.data.user.phone,
					alternatePhone: response.data.user.alternate_phone,
					presentAddress: response.data.user.present_address,
					permanentAddress: response.data.user.permanent_address,
					lastEducationDegree:
						response.data.user.last_education_degree,
					lastEducationInstitute:
						response.data.user.last_education_institute,
					country: response.data.user.country,
					occupation: response.data.user.occupation,
					profilePicture: response.data.user.profile_picture,
				})
			);
			store.addNotification({
				title: "Success!",
				message: response.data.message,
				type: "success",
				insert: "top",
				container: "top-right",
				dismiss: {
					duration: 5000,
					onScreen: true,
				},
			});
			handleModal();
			setLoading(false);
		} catch (error: any) {
			setLoading(false);
			store.addNotification({
				title: "Error!",
				message: error.response.errors[0],
				type: "danger",
				insert: "top",
				container: "top-right",

				dismiss: {
					duration: 5000,
					onScreen: true,
				},
			});
		}
	};

	const handleModal = () => {
		setOpen(!open);
		formik.resetForm({});
	};

	return (
		<div>
			<Button onClick={handleModal}>Edit Profile</Button>
			<Dialog open={open} onClose={handleModal} maxWidth={"md"} fullWidth>
				<DialogTitle>
					Edit Profile
					<IconButton
						aria-label="close"
						onClick={handleModal}
						sx={{
							position: "absolute",
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<form onSubmit={formik.handleSubmit}>
					<DialogContent>
						<Grid
							container
							columnSpacing={{ xs: 1, sm: 2, md: 3 }}
							rowSpacing={1}>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									id="firstName"
									required
									name="firstName"
									label="First Name"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.firstName}
									error={
										formik.touched.firstName &&
										Boolean(formik.errors.firstName)
									}
									helperText={
										formik.touched.firstName &&
										formik.errors.firstName
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									id="lastName"
									name="lastName"
									label="Last Name"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.lastName}
									error={
										formik.touched.lastName &&
										Boolean(formik.errors.lastName)
									}
									helperText={
										formik.touched.lastName &&
										formik.errors.lastName
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									required
									id="email"
									name="email"
									label="Email"
									type="email"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									error={
										formik.touched.email &&
										Boolean(formik.errors.email)
									}
									helperText={
										formik.touched.email &&
										formik.errors.email
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									id="alternateEmail"
									name="alternateEmail"
									label="Alternate Email"
									type="email"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.alternateEmail}
									error={
										formik.touched.alternateEmail &&
										Boolean(formik.errors.alternateEmail)
									}
									helperText={
										formik.touched.alternateEmail &&
										formik.errors.alternateEmail
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									required
									id="presentAddress"
									name="presentAddress"
									label="Present Address"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.presentAddress}
									error={
										formik.touched.presentAddress &&
										Boolean(formik.errors.presentAddress)
									}
									helperText={
										formik.touched.presentAddress &&
										formik.errors.presentAddress
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									required
									id="permanentAddress"
									name="permanentAddress"
									label="Permanent Address"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.permanentAddress}
									error={
										formik.touched.permanentAddress &&
										Boolean(formik.errors.permanentAddress)
									}
									helperText={
										formik.touched.permanentAddress &&
										formik.errors.permanentAddress
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									required
									id="phone"
									name="phone"
									label="Mobile No"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.phone}
									error={
										formik.touched.phone &&
										Boolean(formik.errors.phone)
									}
									helperText={
										formik.touched.phone &&
										formik.errors.phone
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									id="alternatePhone"
									name="alternatePhone"
									label="Alternate Phone"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.alternatePhone}
									error={
										formik.touched.alternatePhone &&
										Boolean(formik.errors.alternatePhone)
									}
									helperText={
										formik.touched.alternatePhone &&
										formik.errors.alternatePhone
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									id="country"
									name="country"
									label="Country"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.country}
									error={
										formik.touched.country &&
										Boolean(formik.errors.country)
									}
									helperText={
										formik.touched.country &&
										formik.errors.country
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									id="occupation"
									name="occupation"
									label="Occupation"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.occupation}
									error={
										formik.touched.occupation &&
										Boolean(formik.errors.occupation)
									}
									helperText={
										formik.touched.occupation &&
										formik.errors.occupation
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									id="lastEducationDegree"
									name="lastEducationDegree"
									label="Last Education Degree"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.lastEducationDegree}
									error={
										formik.touched.lastEducationDegree &&
										Boolean(
											formik.errors.lastEducationDegree
										)
									}
									helperText={
										formik.touched.lastEducationDegree &&
										formik.errors.lastEducationDegree
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									margin="dense"
									id="lastEducationInstitute"
									name="lastEducationInstitute"
									label="Last Education Institute"
									fullWidth
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.lastEducationInstitute}
									error={
										formik.touched.lastEducationInstitute &&
										Boolean(
											formik.errors.lastEducationInstitute
										)
									}
									helperText={
										formik.touched.lastEducationInstitute &&
										formik.errors.lastEducationInstitute
									}
								/>
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Box mx={2} width={1}>
							<Typography align="center">
								{loading && (
									<Box my={2}>
										<CircularProgress color="primary" />
									</Box>
								)}
							</Typography>
							{!loading && (
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}>
									Submit
								</Button>
							)}
						</Box>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
};

export default EditProfile;
