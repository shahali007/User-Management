import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from 'react-redux';
import { RootState } from "../../../../redux/store";

export default function NavBar() {
	const { currentUser } = useSelector((state: RootState) => state.auth);
	const handleLogout = () => {
		localStorage.clear();
		window.location.href = "/";
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}>
						Hi, {currentUser.firstName + ' ' + currentUser.lastName}
					</Typography>
					<Button color="inherit" onClick={handleLogout}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
