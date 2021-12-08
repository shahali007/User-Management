import React from 'react';
import { Paper, Box, Avatar } from '@mui/material';

const ProfileImage = (): JSX.Element => {
    return (
        <Paper sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%"
        }}>
            <Box p={5}>
                <Avatar
                    alt="Shah Ali Bogdadi"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 128, height: 128 }}
                />
            </Box>
        </Paper>
    )
}

export default ProfileImage;