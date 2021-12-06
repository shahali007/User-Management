import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

type Props = {
	children: JSX.Element;
};

const ApplicationLayout = ({ children }: Props): JSX.Element => {
	return (
		<div>
			<NavBar />
			<nav>
				<Link to="home">Home</Link> |<Link to="profile">Profile</Link>
			</nav>
			<div className="content">{children}</div>
		</div>
	);
};

export default ApplicationLayout;
