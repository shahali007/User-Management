import React from 'react';
import { Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Divider } from '@mui/material';
import classes from './profileItem.module.css'

interface DataProps {
    icon: React.ReactElement,
    data: string | null,
    title: string,
}

const ProfileItem = ({ icon, data, title }: DataProps) => {
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
                        secondary={data ? data : 'N/A'}
                    />
                </ListItem>
            </List>
            <Divider variant="middle" />
        </Grid>
    );
}

export default ProfileItem;