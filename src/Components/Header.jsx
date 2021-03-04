import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EmojiObjectsIcon from '../../node_modules/@material-ui/icons/EmojiObjects';
import clsx from 'clsx';
import { makeStyles } from '../../node_modules/@material-ui/core/styles';
import Drawer from '../../node_modules/@material-ui/core/Drawer';
import List from '../../node_modules/@material-ui/core/List';
import Divider from '../../node_modules/@material-ui/core/Divider';
import ListItem from '../../node_modules/@material-ui/core/ListItem';
import ListItemIcon from '../../node_modules/@material-ui/core/ListItemIcon';
import ListItemText from '../../node_modules/@material-ui/core/ListItemText';
import InboxIcon from '../../node_modules/@material-ui/icons/MoveToInbox';
import MailIcon from '../../node_modules/@material-ui/icons/Mail';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {




    return (
        <>
            <AppBar position="static" className="bg-warning py-1">
                <Toolbar>

                    <IconButton edge="start" color="inherit" aria-label="menu" className="iconBtn">
                        <EmojiObjectsIcon fontSize="large" />
                    </IconButton>

                    <Typography variant="h5">
                        <span className="brandName">Google Keep Clone</span>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;