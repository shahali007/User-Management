import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ApplicationLayout from "../../shared/layout/ApplicationLayout";
import Profile from "./Profile";

const Application = (): JSX.Element => {
	return (
		<div>
			<ApplicationLayout>
				<Routes>
					<Route path={"/*"} element={<Navigate to="/profile" />} />
					<Route path={"/profile"} element={<Profile />} />
				</Routes>
			</ApplicationLayout>
		</div>
	);
};

export default Application;
