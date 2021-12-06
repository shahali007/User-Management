import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ApplicationLayout from "../../shared/layout/ApplicationLayout";
import Profile from "./Profile";
import Home from "./Home";

const Application = (): JSX.Element => {
	return (
		<div>
			<ApplicationLayout>
				<Routes>
					<Route path={"/*"} element={<Navigate to="/home" />} />
					<Route path={"/home"} element={<Home />} />
					<Route path={"/profile"} element={<Profile />} />
				</Routes>
			</ApplicationLayout>
		</div>
	);
};

export default Application;
