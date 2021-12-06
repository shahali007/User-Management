import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
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
						Hi, Shah Ali
					</Typography>
					<Button color="inherit" onClick={handleLogout}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
