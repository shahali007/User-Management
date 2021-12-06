import * as React from "react";
import { Button, Container, Grid, Box, Avatar, Typography, TextField } from "@mui/material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from 'react-router-dom'
import CssBaseline from "@mui/material/CssBaseline";
import classes from "./register.module.css";

const Register = (): JSX.Element => {
	const handleSubmit = () => {
		//...
	}
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
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}>
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
								size="small"
								InputLabelProps={{
									shrink: true
								}}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								margin="normal"
								fullWidth
								id="lastName"
								label="Last Name"
								name="firstName"
								autoComplete="lastName"
								size="small"
								InputLabelProps={{
									shrink: true
								}}
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
								size="small"
								InputLabelProps={{
									shrink: true
								}}
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
								size="small"
								InputLabelProps={{
									shrink: true
								}}
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
								size="small"
								InputLabelProps={{
									shrink: true
								}}
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
								size="small"
								InputLabelProps={{
									shrink: true
								}}
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
								size="small"
								InputLabelProps={{
									shrink: true
								}}
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
								size="small"
								InputLabelProps={{
									shrink: true
								}}
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
							/>
						</Grid>
						<Grid item md={12} xs={12}>
							<TextField
								margin="normal"
								fullWidth
								name="bio"
								multiline
								rows={3}
								label="About Yourself"
								id="bio"
								autoComplete="bio"
								InputLabelProps={{
									shrink: true
								}}
							/>
						</Grid>
					</Grid>


					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}>
						Registration
					</Button>
					<Box
						sx={{
							marginTop: 4,
							marginBottom: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Link to="/register">
							{"Already have an account? Sign In"}
						</Link>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Register;
