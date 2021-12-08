import React from 'react';
import { Container, Grid, Paper, Box, Divider } from '@mui/material';
import { LensBlur, Email, Room, Phone, Language, Work, School } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import ProfileItem from '../../../shared/Component/ProfileItem';
import ProfileImage from './ProfileImage';
import ChangePassword from './ChangePassword';
import EditProfile from './Edit';
import { RootState } from '../../../redux/store';

const Profile = () => {
    const { currentUser } = useSelector((state: RootState) => state.auth);
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
                            <ProfileItem icon={<LensBlur />} title='First Name' data={currentUser.firstName} />
                            <ProfileItem icon={<LensBlur />} title='Last Name' data={currentUser.lastName} />
                            <ProfileItem icon={<Email />} title='Email' data={currentUser.email} />
                            <ProfileItem icon={<Email />} title='Alternate Email' data={currentUser.alternateEmail} />
                            <ProfileItem icon={<Room />} title='Present Address' data={currentUser.presentAddress} />
                            <ProfileItem icon={<Room />} title='Permanent Address' data={currentUser.permanentAddress} />
                            <ProfileItem icon={<Phone />} title='Mobile No' data={currentUser.phone} />
                            <ProfileItem icon={<Phone />} title='Alternate Mobile No' data={currentUser.alternatePhone} />
                            <ProfileItem icon={<Language />} title='Country' data={currentUser.country} />
                            <ProfileItem icon={<Work />} title='Occupation' data={currentUser.occupation} />
                            <ProfileItem icon={<School />} title='Last Education Degree' data={currentUser.lastEducationDegree} />
                            <ProfileItem icon={<School />} title='Last Education Institute' data={currentUser.lastEducationInstitute} />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;