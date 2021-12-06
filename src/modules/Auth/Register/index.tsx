import { Button } from "@mui/material";
import * as React from "react";
import classes from "./register.module.css";

const Register = (): JSX.Element => {
	return (
		<Button
			type="button"
			className={classes.btn}
			onClick={() => console.log("clicked")}>
			Register
		</Button>
	);
};

export default Register;
