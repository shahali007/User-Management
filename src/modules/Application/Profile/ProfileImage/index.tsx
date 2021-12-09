import React from "react";
import {
	Paper,
	Box,
	Avatar,
	CircularProgress,
	Typography,
	Button,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { store } from "react-notifications-component";
import { useDispatch, useSelector } from "react-redux";

import api from "../../../../shared/api";
import actions from "../../../../redux/actions";
import { RootState } from "../../../../redux/store";
import { storageUrl } from "../../../../shared/api/api";
import classes from "./profileImage.module.css";

interface HandleAction {
	(event: any): void;
}

const ProfileImage = (): JSX.Element => {
	const dispatch = useDispatch();
	const [loading, setLoading] = React.useState<boolean>(false);
	const { currentUser } = useSelector((state: RootState) => state.auth);

	const hiddenFileInput = React.useRef<any>(null);

	const handleOnchange: HandleAction = async (e) => {
		e.preventDefault();
		const picture = e.target.files[0];
		const formData = new FormData();
		formData.append("profile_picture", picture);
		if (picture && picture.size > 2 * 1024 * 1024) {
			store.addNotification({
				title: "Error!",
				message: "Image size can not be larger than 2 mb",
				type: "danger",
				insert: "top",
				container: "top-right",

				dismiss: {
					duration: 5000,
					onScreen: true,
				},
			});
		} else {
			try {
				setLoading(true);
				const response = await api.user.updateProfilePicture(formData);
				if (response.data) {
					setLoading(false);
					store.addNotification({
						title: "Success!",
						message: response.data.message,
						type: "success",
						insert: "top",
						container: "top-right",
						dismiss: {
							duration: 5000,
							onScreen: true,
						},
					});

					dispatch(
						actions.auth.loginUser({
							...currentUser,
							profilePicture: response.data.profile_picture,
						})
					);
					setLoading(false);
				}
			} catch (error: any) {
				setLoading(false);
				if (error.status === 404) {
					console.log("404");
				} else {
					console.log(error);
				}
			}
		}
	};

	const handleClick: HandleAction = (event) => {
		hiddenFileInput.current.click();
	};

	return (
		<Paper
			sx={{
				marginTop: 4,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
			}}>
			<Box p={3} className={classes.avatarBox}>
				<Avatar
					alt={currentUser.firstName}
					src={
						currentUser.profilePicture
							? storageUrl + currentUser.profilePicture
							: ""
					}
					sx={{ width: 128, height: 128 }}
				/>
				<Button
					onClick={handleClick}
					color="primary"
					variant="text"
					className={classes.cameraIcon}>
					<AddAPhotoIcon />
				</Button>
			</Box>
			<form action="multipart/form-data">
				<input
					onChange={(e) => {
						handleOnchange(e);
					}}
					type="file"
					ref={hiddenFileInput}
					style={{ display: "none" }}
				/>
			</form>

			{loading && (
				<Box mt={3} mb={3} width={1}>
					<Typography align="center" component={"div"}>
						<CircularProgress color="primary" />
					</Typography>
				</Box>
			)}
		</Paper>
	);
};

export default ProfileImage;
