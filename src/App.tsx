import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Application from "./modules/Application";
import AuthLayout from "./shared/layout/AuthLayout";

type AuthProp = {
	authToken?: string | any;
};

const auth: AuthProp = {
	authToken: localStorage.getItem("auth"),
};

export default function App() {
	return (
		<Routes>
			{auth && auth.authToken ? (
				<Route path="/*" element={<Application />} />
			) : (
				<Route path="/*" element={<AuthLayout />} />
			)}
		</Routes>
	);
}
