import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EmojiObjectsIcon from '../../node_modules/@material-ui/icons/EmojiObjects';
import ViewHeadlineIcon from '../../node_modules/@material-ui/icons/ViewHeadline';
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

    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    });

    const classes = useStyles();

    const [state, setState] = React.useState({
        left: false
    });


    const openDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={openDrawer(anchor, false)}
            onKeyDown={openDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );


    return (
        <>
            <AppBar position="static" className="bg-warning py-1">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className="iconBtn" key={anchor}>
                        <ViewHeadlineIcon fontSize="large" onClick={openDrawer(anchor, true)} />
                        <Drawer anchor={anchor} open={state[anchor]} onClose={openDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </IconButton>
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