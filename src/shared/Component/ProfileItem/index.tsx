import React from 'react';
import { Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Divider } from '@mui/material';
import classes from './profileItem.module.css'


const ProfileItem = ({ icon, data, title }: any): JSX.Element => {
    return (
        <Grid item xs={12} sm={6}>
            <List className={classes.positionProfile}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<small>{title}</small>}
                        secondary={data}
                    />
                </ListItem>
            </List>
            <Divider variant="middle" />
        </Grid>
    );
}

export default ProfileItem;