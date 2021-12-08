import React from 'react';
import { Container, Grid, Paper, Box, Divider } from '@mui/material';
import { LensBlur, Email, Room, Phone, Language, Work, School } from '@mui/icons-material';

import ProfileItem from '../../../shared/Component/ProfileItem';
import ProfileImage from './ProfileImage';
import ChangePassword from './ChangePassword';
import EditProfile from './Edit';

const Profile = () => {
    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <ProfileImage />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            py: 1,
                            my: 1,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <EditProfile />
                        <ChangePassword />
                    </Box>
                    <Divider />
                    <Paper sx={{
                        marginTop: 0,
                        marginBottom: 4,
                        width: "100%"
                    }}>
                        <Grid container spacing={0}>
                            <ProfileItem icon={<LensBlur />} title='First Name' data='Shah Ali' />
                            <ProfileItem icon={<LensBlur />} title='Last Name' data='Bogdadi' />
                            <ProfileItem icon={<Email />} title='Email' data='bogdadishahali@gmail.com' />
                            <ProfileItem icon={<Email />} title='Alternate Email' data='shahali007@gmail.com' />
                            <ProfileItem icon={<Room />} title='Present Address' data='Dhaka' />
                            <ProfileItem icon={<Room />} title='Permanent Address' data='Narayangonj, Dhaka' />
                            <ProfileItem icon={<Phone />} title='Mobile No' data='01234567890' />
                            <ProfileItem icon={<Phone />} title='Alternate Mobile No' data='017000000' />
                            <ProfileItem icon={<Language />} title='Country' data='Bangladesh' />
                            <ProfileItem icon={<Work />} title='Occupation' data='Software Engineer (Frontend)' />
                            <ProfileItem icon={<School />} title='Last Education Degree' data='MCA' />
                            <ProfileItem icon={<School />} title='Last Education Institute' data='Stamford University' />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;