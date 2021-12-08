import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ChangePassword = () => {
    const [open, setOpen] = React.useState(false);

    const handleModal = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Button onClick={handleModal}>
                Change Password
            </Button>
            <Dialog open={open} onClose={handleModal} maxWidth={'md'}>
                <DialogTitle>
                    Change Password
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
                        margin="dense"
                        id="password"
                        name="password"
                        label="New Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
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