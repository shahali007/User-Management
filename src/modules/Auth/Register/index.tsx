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
						<Link to="/login">
							{"Already have an account? Sign In"}
						</Link>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default Register;
