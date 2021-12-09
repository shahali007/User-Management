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
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { initialValues, validationSchema } from "./formik";
import api from "../../../../shared/api";
import { ChangePasswordValues } from "../../../../typings/userTypings";

const ChangePassword = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const [loading, setLoading] = React.useState<boolean>(false);
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});

	const handleSubmit = async (values: ChangePasswordValues) => {
		setLoading(true);
		const obj = {
			current_password: values.currentPassword,
			password: values.password,
		};
		try {
			const response = await api.user.changePassword(obj);
			console.log(response);
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
				message: "Error",
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
			<Button onClick={handleModal}>Change Password</Button>
			<Dialog open={open} onClose={handleModal} maxWidth={"md"}>
				<DialogTitle>
					Change Password
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
						<TextField
							margin="normal"
							required
							fullWidth
							name="currentPassword"
							label="currentPassword"
							type="password"
							id="currentPassword"
							autoComplete="currentPassword"
							InputLabelProps={{
								shrink: true,
							}}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.currentPassword}
							error={
								formik.touched.currentPassword &&
								Boolean(formik.errors.currentPassword)
							}
							helperText={
								formik.touched.currentPassword &&
								formik.errors.currentPassword
							}
						/>
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
								shrink: true,
							}}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
							error={
								formik.touched.password &&
								Boolean(formik.errors.password)
							}
							helperText={
								formik.touched.password &&
								formik.errors.password
							}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="confirmPassword"
							label="confirmPassword"
							type="password"
							id="confirmPassword"
							autoComplete="confirmPassword"
							InputLabelProps={{
								shrink: true,
							}}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.confirmPassword}
							error={
								formik.touched.confirmPassword &&
								Boolean(formik.errors.confirmPassword)
							}
							helperText={
								formik.touched.confirmPassword &&
								formik.errors.confirmPassword
							}
						/>
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

export default ChangePassword;
