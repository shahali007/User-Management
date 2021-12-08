import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ChangePassword = () => {
    const [open, setOpen] = React.useState(false);

    const handleModal = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleModal}>
                Change Password
            </Button>
            <Dialog open={open} onClose={handleModal}>
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="currentPassword"
                        name="currentPassword"
                        label="Current Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="New Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModal}>Cancel</Button>
                    <Button onClick={handleModal}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ChangePassword;