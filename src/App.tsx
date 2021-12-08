import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

import Application from "./modules/Application";
import { RootState } from "./redux/store";
import AuthLayout from "./shared/layout/AuthLayout";


export default function App() {
	const { currentUser } = useSelector((state: RootState) => state.auth);
	return (
		<>
			<ReactNotification />
			<Routes>
				{currentUser && currentUser.authToken ? (
					<Route path="/*" element={<Application />} />
				) : (
					<Route path="/*" element={<AuthLayout />} />
				)}
			</Routes>
		</>
	);
}
