import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { LensBlur, Email, Room, Phone, Language, Work } from '@mui/icons-material';

import ProfileItem from '../../../shared/Component/ProfileItem';
import ProfileImage from './ProfileImage';
import ChangePassword from './ChangePassword';

const Profile = () => {
    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <ProfileImage />
                    <ChangePassword />
                    <Paper sx={{
                        marginTop: 2,
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
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;