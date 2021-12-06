import * as React from "react";
import { Navigate, Route, Routes } from "react-router";

import Login from "../../../modules/Auth/Login";
import Register from "../../../modules/Auth/Register";

const AuthLayout = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/*" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
};

export default AuthLayout;
