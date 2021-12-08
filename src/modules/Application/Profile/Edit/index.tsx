import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const EditProfile = () => {
    const [open, setOpen] = React.useState(false);

    const handleModal = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Button onClick={handleModal}>
                Edit Profile
            </Button>
            <Dialog open={open} onClose={handleModal} maxWidth={'md'} fullWidth>
                <DialogTitle>
                    Edit Profile
                    <IconButton
                        aria-label="close"
                        onClick={handleModal}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={1}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="alternateEmail"
                                name="alternateEmail"
                                label="Alternate Email"
                                type="email"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="presentAddress"
                                name="presentAddress"
                                label="Present Address"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="permanentAddress"
                                name="permanentAddress"
                                label="Permanent Address"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="phone"
                                name="phone"
                                label="Mobile No"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="alternatePhone"
                                name="alternatePhone"
                                label="Alternate Phone"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="occupation"
                                name="occupation"
                                label="Occupation"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="lastEducationDegree"
                                name="lastEducationDegree"
                                label="Last Education Degree"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                margin="dense"
                                id="lastEducationInstitute"
                                name="lastEducationInstitute"
                                label="Last Education Institute"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModal}>Cancel</Button>
                    <Button onClick={handleModal}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditProfile;